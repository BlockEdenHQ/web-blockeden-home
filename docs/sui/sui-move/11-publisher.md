# Creating and Using a Publisher Object for Ownership Verification

In this tutorial, we will explore how to create a Publisher object and utilize it to prove ownership of a type in a package. The Publisher object is a utility that represents the publisher authority and allows checking whether a type belongs to a specific module or package. It is crucial for setting the "Display" and trading types in the "Kiosk" ecosystem.

We will follow these steps:

1. **Create a One-Time-Witness (OTW)**: To set up a Publisher, an OTW is required. It ensures that the Publisher object is initialized only once for a specific module and that the creation function is called in the publish transaction.

```rust
struct OWNER has drop {}
```

2. **Define a module to claim a Publisher object**: Create a module that defines an OTW and claims a `Publisher` object for the sender. After the module is published, the sender will receive a `Publisher` object, which can be used to set Display or manage transfer policies in the `Kiosk` system.

```rust
module examples::owner {
    use sui::tx_context::TxContext;
    use sui::package;

    // OTW and other types...

    fun init(otw: OWNER, ctx: &mut TxContext) {
        package::claim_and_keep(otw, ctx)
    }
}
```

3. **Create a TypeOwnerCap struct**: Define a struct that represents a capability granted to those who want an "objective" confirmation of their ownership. It will have a UID (unique identifier) as a field.

```rust
struct TypeOwnerCap<phantom T> has key, store {
    id: UID
}
```

4. **Implement the prove_ownership function**: Create a module that utilizes the `Publisher` object to give a token of appreciation and a `TypeOwnerCap` for the owned type. Use the `Publisher` object to check if the caller owns the type `T`.

```rust
module examples::type_owner {
    // Import necessary modules...

    // Define constants, structs, and other types...

    public fun prove_ownership<T>(
        publisher: &Publisher, ctx: &mut TxContext
    ): TypeOwnerCap<T> {
        assert!(package::from_package<T>(publisher), ENotOwner);
        TypeOwnerCap<T> { id: object::new(ctx) }
    }
}
```

By following this tutorial, you can create a Publisher object and utilize it to prove ownership of a type in a package. This functionality is essential for managing object displays and trading types in the Kiosk ecosystem.

Finally, we will get

```rust
/// A simple package that defines an OTW and claims a `Publisher`
/// object for the sender.
module examples::owner {
    use sui::tx_context::TxContext;
    use sui::package;

    /// OTW is a struct with only `drop` and is named
    /// after the module - but uppercased. See "One Time
    /// Witness" page for more details.
    struct OWNER has drop {}

    /// Some other type to use in a dummy check
    struct ThisType {}

    /// After the module is published, the sender will receive
    /// a `Publisher` object. Which can be used to set Display
    /// or manage the transfer policies in the `Kiosk` system.
    fun init(otw: OWNER, ctx: &mut TxContext) {
        package::claim_and_keep(otw, ctx)
    }
}

/// A module that utilizes the `Publisher` object to give a token
/// of appreciation and a `TypeOwnerCap` for the owned type.
module examples::type_owner {
    use sui::object::{Self, UID};
    use sui::tx_context::TxContext;
    use sui::package::{Self, Publisher};

    /// Trying to claim ownership of a type with a wrong `Publisher`.
    const ENotOwner: u64 = 0;

    /// A capability granted to those who want an "objective"
    /// confirmation of their ownership :)
    struct TypeOwnerCap<phantom T> has key, store {
        id: UID
    }

    /// Uses the `Publisher` object to check if the caller owns the type `T`.
    public fun prove_ownership<T>(
        publisher: &Publisher, ctx: &mut TxContext
    ): TypeOwnerCap<T> {
        assert!(package::from_package<T>(publisher), ENotOwner);
        TypeOwnerCap<T> { id: object::new(ctx) }
    }
}

```
