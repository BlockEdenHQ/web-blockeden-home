# Implementing the Witness Pattern for Confirming Type Ownership in Sui

In this tutorial, we will demonstrate how to implement the Witness pattern to confirm the ownership of a type in the Sui ecosystem. The Witness pattern is used for confirming ownership by passing a `drop` instance of a type. We will create a custom `Guardian` type that can only be instantiated with a witness and a `PEACE` type to demonstrate the pattern.

Follow these steps to implement the Witness pattern:

1. **Define the Guardian type**: Create a module that defines a generic type `Guardian<T>` which can only be instantiated with a witness. The phantom parameter `T` can only be initialized in the `create_guardian` function, and the types passed must have the `drop` ability.

```rust
module examples::guardian {
    use sui::object::{Self, UID};
    use sui::tx_context::TxContext;

    struct Guardian<phantom T: drop> has key, store {
        id: UID
    }
}
```

2. **Create the create_guardian function**: Define a public function `create_guardian` that takes an actual instance of type `T` with `drop` ability as its first argument. This instance is dropped as soon as it is received.

```rust
public fun create_guardian<T: drop>(
    _witness: T, ctx: &mut TxContext
): Guardian<T> {
    Guardian { id: object::new(ctx) }
}
```

3. **Create the custom module**: Define a custom module `examples::peace_guardian` that makes use of the `guardian` type. Create a custom `PEACE` type with the `drop` ability, which is intended to be used only once.

```rust
module examples::peace_guardian {
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

    // Use the `guardian` as a dependency.
    use 0x0::guardian;

    struct PEACE has drop {}
}
```

4. **Initialize the module**: Create a module initializer function that is called once on module publish. This is the best way to ensure that the code is called only once, which is often the best practice with the Witness pattern. Inside this function, transfer a newly created `Guardian` instance to the sender.

```rust
fun init(ctx: &mut TxContext) {
    transfer::public_transfer(
        guardian::create_guardian(PEACE {}, ctx),
        tx_context::sender(ctx)
    )
}
```

By following these steps, you can implement the Witness pattern for confirming the ownership of a type in the Sui ecosystem. In this example, we created a custom `Guardian` type that can only be instantiated with a witness and demonstrated the pattern using the `PEACE` type.
