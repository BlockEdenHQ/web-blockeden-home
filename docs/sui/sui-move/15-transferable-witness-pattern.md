# Implementing Transferable Witness Pattern in Sui

In this tutorial, we will demonstrate how to implement the Transferable Witness pattern in the Sui ecosystem. This pattern is based on a combination of two other patterns: Capability and Witness. Transferable Witness pattern can be useful when type authorization by one module is needed to be used in another module or when authorization should be performed after some time.

Here are the steps to implement the Transferable Witness pattern:

1. **Create the transferable_witness module**: Define a new module `examples::transferable_witness` that will implement the Transferable Witness pattern.

```rust
module examples::transferable_witness {
    use sui::transfer;
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};
}
```

2. **Define the WITNESS type**: Create a `WITNESS` type that has `store` and `drop` abilities. The `store` ability allows storing the witness inside a wrapper.

```rust
struct WITNESS has store, drop {}
```

3. **Define the WitnessCarrier type**: Create a `WitnessCarrier` type that has the `key` ability and carries the `WITNESS` type. The `WitnessCarrier` can be used only once to get a `WITNESS`.

```rust
struct WitnessCarrier has key { id: UID, witness: WITNESS }
```

4. **Initialize the module**: Create an `init` function that sends a `WitnessCarrier` to the module publisher. This function will be called once on module publish.

```rust
fun init(ctx: &mut TxContext) {
    transfer::transfer(
        WitnessCarrier { id: object::new(ctx), witness: WITNESS {} },
        tx_context::sender(ctx)
    )
}
```

5. **Create the get_witness function**: Define a public function `get_witness` that takes a `WitnessCarrier` as an argument and returns the inner `WITNESS` type. The function unwraps the carrier and deletes the carrier's `id` before returning the `witness`.

```rust
public fun get_witness(carrier: WitnessCarrier): WITNESS {
    let WitnessCarrier { id, witness } = carrier;
    object::delete(id);
    witness
}
```

By following these steps, you can implement the Transferable Witness pattern in the Sui ecosystem. This pattern combines the Capability and Witness patterns to allow type authorization by one module to be used in another module or to perform authorization after some time.
