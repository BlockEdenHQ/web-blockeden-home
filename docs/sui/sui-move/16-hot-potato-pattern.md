# Implementing the Hot Potato Pattern

In this tutorial, we will demonstrate how to implement the Hot Potato pattern in the Sui ecosystem. The Hot Potato pattern involves a struct with no abilities, meaning it can only be packed and unpacked in its module. This pattern ensures that certain functions must be called in a specific order.

For this example, we will implement a simple phone trade-in module, which allows users to buy a phone and pay later or trade-in their old phone for a discount on a new phone.

Follow these steps to implement the Hot Potato pattern:

1. **Create the trade_in module**: Define a new module `examples::trade_in` that will implement the Hot Potato pattern.

```rust
module examples::trade_in {
    use sui::transfer;
    use sui::sui::SUI;
    use sui::coin::{Self, Coin};
    use sui::object::{Self, UID};
    use sui::tx_context::{TxContext};
}
```

2. **Define constants and errors**: Define constants for the phone model prices and error codes for wrong model selection and incorrect payment amounts.

```rust
const MODEL_ONE_PRICE: u64 = 10000;
const MODEL_TWO_PRICE: u64 = 20000;
const EWrongModel: u64 = 1;
const EIncorrectAmount: u64 = 2;
```

3. **Define the Phone and Receipt structs**: Create a `Phone` struct that can be purchased or traded in for a newer model, and a `Receipt` struct that represents a payable receipt.

```rust
struct Phone has key, store { id: UID, model: u8 }
struct Receipt { price: u64 }
```

4. **Create the buy_phone function**: Define a public function `buy_phone` that takes a phone model and a mutable transaction context as arguments. It returns a tuple containing a `Phone` and a `Receipt`.

```rust
public fun buy_phone(model: u8, ctx: &mut TxContext): (Phone, Receipt) {
    assert!(model == 1 || model == 2, EWrongModel);

    let price = if (model == 1) MODEL_ONE_PRICE else MODEL_TWO_PRICE;

    (
        Phone { id: object::new(ctx), model },
        Receipt { price }
    )
}
```

5. **Create the pay_full function**: Define a public function `pay_full` that takes a `Receipt` and a payment `Coin<SUI>` as arguments. The function consumes the `Receipt` and transfers the payment to the `@examples` account.

```rust
public fun pay_full(receipt: Receipt, payment: Coin<SUI>) {
    let Receipt { price } = receipt;
    assert!(coin::value(&payment) == price, EIncorrectAmount);

    // for simplicity's sake transfer directly to @examples account
    transfer::public_transfer(payment, @examples);
}
```

6. **Create the trade_in function**: Define a public function `trade_in` that takes a `Receipt`, an old `Phone`, and a payment `Coin<SUI>` as arguments. The function consumes the `Receipt`, transfers the old phone and the payment to the `@examples` account, and applies a discount based on the old phone's model.

```rust
public fun trade_in(receipt: Receipt, old_phone: Phone, payment: Coin<SUI>) {
    let Receipt { price } = receipt;
    let tradein_price = if (old_phone.model == 1) MODEL_ONE_PRICE else MODEL_TWO_PRICE;
    let to_pay = price - (tradein_price / 2);

    assert!(coin::value(&payment) == to_pay, EIncorrectAmount);

    transfer::public
```
