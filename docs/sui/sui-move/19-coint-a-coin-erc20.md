# Creating a Custom Coin in Sui

In this tutorial, we will demonstrate how to create a custom coin in Sui. The process is relatively simple and requires using a One Time Witness. We will create a new coin type and initialize a treasury cap to control the minting and burning of the custom coin.

Follow these steps to create a custom coin:

1. **Create the mycoin module**: Define a new module `examples::mycoin` to create the custom coin.

```rust
module examples::mycoin {
    use std::option;
    use sui::coin;
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
}
```

2. **Define the MYCOIN struct**: Create a `MYCOIN` struct as the type identifier of the custom coin.

```rust
struct MYCOIN has drop {}
```

3. **Create the module initializer**: Define the `init` function, which is called once on module publish. The function takes a witness and a mutable transaction context as arguments. It creates a treasury cap and a metadata object, and sends the treasury cap to the publisher, who then controls minting and burning.

```rust
fun init(witness: MYCOIN, ctx: &mut TxContext) {
    let (treasury, metadata) = coin::create_currency(witness, 6, b"MYCOIN", b"", b"", option::none(), ctx);
    transfer::public_freeze_object(metadata);
    transfer::public_transfer(treasury, tx_context::sender(ctx))
}
```

The `Coin<T>` is a generic implementation of a coin in Sui. The owner of the `TreasuryCap` gets control over the minting and burning of coins. Further transactions can be sent directly to the `sui::coin::Coin` with the `TreasuryCap` object as authorization.

Now you have successfully created a custom coin in Sui. The publisher can control the minting and burning of the coin using the `TreasuryCap`.
