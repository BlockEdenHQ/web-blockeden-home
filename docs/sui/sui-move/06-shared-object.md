# Creating a Shared Object in Move

In this tutorial, we will learn how to create a shared object in the Move programming language using the `sui::transfer::share_object` function. Shared objects are accessible to everyone on the network, so you might need to put additional effort into securing access when necessary.

1. Create a Move module:

Create a new Move file (e.g., "donuts_example.move") and define a module called "donuts":

```move
module examples::donuts {
    // Imports and constants go here
}
```

2. Import necessary modules and define constants:

Import the required modules for our example and define the `ENotEnough` constant to indicate when the coin balance is too low:

```move
use sui::transfer;
use sui::sui::SUI;
use sui::coin::{Self, Coin};
use sui::object::{Self, UID};
use sui::balance::{Self, Balance};
use sui::tx_context::{Self, TxContext};

const ENotEnough: u64 = 0;
```

3. Define structs:

Define the following structs in your "donuts" module:

- `ShopOwnerCap`: A capability that grants an owner the right to collect profits.
- `Donut`: A purchasable Donut.
- `DonutShop`: A shared object that requires the `key` ability.

```move
struct ShopOwnerCap has key { id: UID }
struct Donut has key { id: UID }
struct DonutShop has key {
    id: UID,
    price: u64,
    balance: Balance<SUI>
}
```

4. Implement the `init` function:

Create an `init` function that initializes the shared object `DonutShop` and shares it using the `transfer::share_object` function:

```move
fun init(ctx: &mut TxContext) {
    transfer::transfer(ShopOwnerCap {
        id: object::new(ctx)
    }, tx_context::sender(ctx));

    // Share the object to make it accessible to everyone!
    transfer::share_object(DonutShop {
        id: object::new(ctx),
        price: 1000,
        balance: balance::zero()
    })
}
```

5. Implement `buy_donut`, `eat_donut`, and `collect_profits` functions:

Add the following entry functions to the module:

- `buy_donut`: Allows anyone who owns a `Coin` to buy a donut from the `DonutShop`.
- `eat_donut`: Consumes a `Donut` and returns nothing.
- `collect_profits`: Allows the shop owner to collect profits from the `DonutShop` by authorizing with `ShopOwnerCap`.

```move
public entry fun buy_donut(
    shop: &mut DonutShop, payment: &mut Coin<SUI>, ctx: &mut TxContext
) {
    // Your code here
}

public entry fun eat_donut(d: Donut) {
    // Your code here
}

public entry fun collect_profits(
    _: &ShopOwnerCap, shop: &mut DonutShop, ctx: &mut TxContext
) {
    // Your code here
}
```

6. Implement the functions:

Fill in the implementation for the `buy_donut`, `eat_donut`, and `collect_profits` functions:

```move
    /// Entry function available to everyone who owns a Coin.
    public entry fun buy_donut(
        shop: &mut DonutShop, payment: &mut Coin<SUI>, ctx: &mut TxContext
    ) {
        assert!(coin::value(payment) >= shop.price, ENotEnough);

        // Take amount = `shop.price` from Coin<SUI>
        let coin_balance = coin::balance_mut(payment);
        let paid = balance::split(coin_balance, shop.price);

        // Put the coin to the Shop's balance
        balance::join(&mut shop.balance, paid);

        transfer::transfer(Donut {
            id: object::new(ctx)
        }, tx_context::sender(ctx))
    }

    /// Consume donut and get nothing...
    public entry fun eat_donut(d: Donut) {
        let Donut { id } = d;
        object::delete(id);
    }

    /// Take coin from `DonutShop` and transfer it to tx sender.
    /// Requires authorization with `ShopOwnerCap`.
    public entry fun collect_profits(
        _: &ShopOwnerCap, shop: &mut DonutShop, ctx: &mut TxContext
    ) {
        let amount = balance::value(&shop.balance);
        let profits = coin::take(&mut shop.balance, amount, ctx);

        transfer::public_transfer(profits, tx_context::sender(ctx))
    }
```

7. Final Move module with shared object: After implementing the functions, your complete "donuts_example.move" module should look like this:

```move
/// Unlike `Owned` objects, `Shared` ones can be accessed by anyone on the
/// network. Extended functionality and accessibility of this kind of objects
/// requires additional effort by securing access if needed.
module examples::donuts {
    use sui::transfer;
    use sui::sui::SUI;
    use sui::coin::{Self, Coin};
    use sui::object::{Self, UID};
    use sui::balance::{Self, Balance};
    use sui::tx_context::{Self, TxContext};

    /// For when Coin balance is too low.
    const ENotEnough: u64 = 0;

    /// Capability that grants an owner the right to collect profits.
    struct ShopOwnerCap has key { id: UID }

    /// A purchasable Donut. For simplicity's sake we ignore implementation.
    struct Donut has key { id: UID }

    /// A shared object. `key` ability is required.
    struct DonutShop has key {
        id: UID,
        price: u64,
        balance: Balance<SUI>
    }

    /// Init function is often ideal place for initializing
    /// a shared object as it is called only once.
    ///
    /// To share an object `transfer::share_object` is used.
    fun init(ctx: &mut TxContext) {
        transfer::transfer(ShopOwnerCap {
            id: object::new(ctx)
        }, tx_context::sender(ctx));

        // Share the object to make it accessible to everyone!
        transfer::share_object(DonutShop {
            id: object::new(ctx),
            price: 1000,
            balance: balance::zero()
        })
    }

    /// Entry function available to everyone who owns a Coin.
    public entry fun buy_donut(
        shop: &mut DonutShop, payment: &mut Coin<SUI>, ctx: &mut TxContext
    ) {
        assert!(coin::value(payment) >= shop.price, ENotEnough);

        // Take amount = `shop.price` from Coin<SUI>
        let coin_balance = coin::balance_mut(payment);
        let paid = balance::split(coin_balance, shop.price);

        // Put the coin to the Shop's balance
        balance::join(&mut shop.balance, paid);

        transfer::transfer(Donut {
            id: object::new(ctx)
        }, tx_context::sender(ctx))
    }

    /// Consume donut and get nothing...
    public entry fun eat_donut(d: Donut) {
        let Donut { id } = d;
        object::delete(id);
    }

    /// Take coin from `DonutShop` and transfer it to tx sender.
    /// Requires authorization with `ShopOwnerCap`.
    public entry fun collect_profits(
        _: &ShopOwnerCap, shop: &mut DonutShop, ctx: &mut TxContext
    ) {
        let amount = balance::value(&shop.balance);
        let profits = coin::take(&mut shop.balance, amount, ctx);

        transfer::public_transfer(profits, tx_context::sender(ctx))
    }
}

```
