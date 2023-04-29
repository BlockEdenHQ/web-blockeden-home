# Events

In this tutorial, we will go through the implementation of a smart contract that models a simple Donut Shop. This example demonstrates how to use events to track actions on the blockchain. We will discuss the structure of the code, its components, and the events emitted throughout its execution.

1. Import required dependencies:

```rust
use sui::transfer;
use sui::sui::SUI;
use sui::coin::{Self, Coin};
use sui::object::{Self, ID, UID};
use sui::balance::{Self, Balance};
use sui::tx_context::{Self, TxContext};
use sui::event;
```

2. Define error constants:

```rust
/// For when Coin balance is too low.
const ENotEnough: u64 = 0;
```

3. Define structs for the Donut Shop:

```rust
struct ShopOwnerCap has key { id: UID }
struct Donut has key { id: UID }
struct DonutShop has key {
    id: UID,
    price: u64,
    balance: Balance<SUI>
}
```

4. Define events:

```rust
struct DonutBought has copy, drop {
    id: ID
}

struct ProfitsCollected has copy, drop {
    amount: u64
}
```

5. Define the initialization function:

```rust
fun init(ctx: &mut TxContext) {
    transfer::transfer(ShopOwnerCap {
        id: object::new(ctx)
    }, tx_context::sender(ctx));

    transfer::share_object(DonutShop {
        id: object::new(ctx),
        price: 1000,
        balance: balance::zero()
    })
}
```

6. Define a function to buy a donut:

```rust
public entry fun buy_donut(
    shop: &mut DonutShop, payment: &mut Coin<SUI>, ctx: &mut TxContext
) {
    assert!(coin::value(payment) >= shop.price, ENotEnough);

    let coin_balance = coin::balance_mut(payment);
    let paid = balance::split(coin_balance, shop.price);
    let id = object::new(ctx);

    balance::join(&mut shop.balance, paid);

    // Emit the event using future object's ID.
    event::emit(DonutBought { id: object::uid_to_inner(&id) });
    transfer::transfer(Donut { id }, tx_context::sender(ctx))
}
```

7. Define a function to eat a donut:

```rust
public entry fun eat_donut(d: Donut) {
    let Donut { id } = d;
    object::delete(id);
}
```

8. Define a function to collect profits:

```rust
public entry fun collect_profits(
    _: &ShopOwnerCap, shop: &mut DonutShop, ctx: &mut TxContext
) {
    let amount = balance::value(&shop.balance);
    let profits = coin::take(&mut shop.balance, amount, ctx);

    // simply create new type instance and emit it
    event::emit(ProfitsCollected { amount });

    transfer::public_transfer(profits, tx_context::sender(ctx))
}
```

This smart contract example demonstrates the following actions:

1. Initializing the Donut Shop.
2. Buying a donut, which emits a `DonutBought` event.
3. Eating a donut.
4. Collecting profits from the Donut Shop, which emits a `ProfitsCollected` event.

Events are an essential tool for tracking actions on the blockchain, and they provide valuable information for users and developers. In this example, we used events to notify users when a donut has been bought and when profits have been collected
