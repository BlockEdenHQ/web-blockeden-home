# Creating and Transferring Wrapped Objects in Move

In this tutorial, we will learn how to create and transfer wrapped objects in the Move programming language. We will use a `Wrapper` struct that allows any custom data with the `store` ability to be freely transferable.

1. Define the `Wrapper` struct:
   First, we will create a `Wrapper` struct with the `key` and `store` abilities. The `store` ability allows the object to be transferred without a custom transfer implementation.

```move
module examples::wrapper {
    use sui::object::{Self, UID};
    use sui::tx_context::TxContext;

    struct Wrapper<T: store> has key, store {
        id: UID,
        contents: T
    }
}
```

2. Implement functions for the `Wrapper` struct:
   Now, we will implement functions to create, read, and destroy the `Wrapper`.

```move
    // View function to read contents of a `Wrapper`
    public fun contents<T: store>(c: &Wrapper<T>): &T {
        &c.contents
    }

    // Anyone can create a new object
    public fun create<T: store>(contents: T, ctx: &mut TxContext): Wrapper<T> {
        Wrapper {
            contents,
            id: object::new(ctx),
        }
    }

    // Destroy `Wrapper` and get T
    public fun destroy<T: store>(c: Wrapper<T>): T {
        let Wrapper { id, contents } = c;
        object::delete(id);
        contents
    }
}
```

3. Use the `Wrapper` in another module:
   In this example, we will create a `ProfileInfo` struct and use the `Wrapper` functionality to make it transferable.

```move
module examples::profile {
    use sui::transfer;
    use sui::url::{Self, Url};
    use std::string::{Self, String};
    use sui::tx_context::{Self, TxContext};

    // using Wrapper functionality
    use 0x0::wrapper;

    struct ProfileInfo has store {
        name: String,
        url: Url
    }
}
```

4. Implement functions for the `ProfileInfo` struct:
   Now, we will implement functions to read the `name` and `url` fields from the `ProfileInfo` struct.

```move
    public fun name(info: &ProfileInfo): &String {
        &info.name
    }

    public fun url(info: &ProfileInfo): &Url {
        &info.url
    }
```

5. Create a new profile and wrap it into a `Wrapper`:
   We will create a function `create_profile` to create a new `ProfileInfo` instance, wrap it into a `Wrapper`, and transfer it to the transaction sender.

```move
    public fun create_profile(
        name: vector<u8>, url: vector<u8>, ctx: &mut TxContext
    ) {
        // create a new container and wrap ProfileInfo into it
        let container = wrapper::create(ProfileInfo {
            name: string::utf8(name),
            url: url::new_unsafe_from_bytes(url)
        }, ctx);

        // `Wrapper` type is freely transferable
        transfer::public_transfer(container, tx_context::sender(ctx))
    }
}
```

With this implementation, you can now create and transfer wrapped objects containing custom data in the Move programming language. Finally we get

```move
/// A freely transfererrable Wrapper for custom data.
module examples::wrapper {
    use sui::object::{Self, UID};
    use sui::tx_context::TxContext;

    /// An object with `store` can be transferred in any
    /// module without a custom transfer implementation.
    struct Wrapper<T: store> has key, store {
        id: UID,
        contents: T
    }

    /// View function to read contents of a `Container`.
    public fun contents<T: store>(c: &Wrapper<T>): &T {
        &c.contents
    }

    /// Anyone can create a new object
    public fun create<T: store>(
        contents: T, ctx: &mut TxContext
    ): Wrapper<T> {
        Wrapper {
            contents,
            id: object::new(ctx),
        }
    }

    /// Destroy `Wrapper` and get T.
    public fun destroy<T: store> (c: Wrapper<T>): T {
        let Wrapper { id, contents } = c;
        object::delete(id);
        contents
    }
}

module examples::profile {
    use sui::transfer;
    use sui::url::{Self, Url};
    use std::string::{Self, String};
    use sui::tx_context::{Self, TxContext};

    // using Wrapper functionality
    use 0x0::wrapper;

    /// Profile information, not an object, can be wrapped
    /// into a transferable container
    struct ProfileInfo has store {
        name: String,
        url: Url
    }

    /// Read `name` field from `ProfileInfo`.
    public fun name(info: &ProfileInfo): &String {
        &info.name
    }

    /// Read `url` field from `ProfileInfo`.
    public fun url(info: &ProfileInfo): &Url {
        &info.url
    }

    /// Creates new `ProfileInfo` and wraps into `Wrapper`.
    /// Then transfers to sender.
    public fun create_profile(
        name: vector<u8>, url: vector<u8>, ctx: &mut TxContext
    ) {
        // create a new container and wrap ProfileInfo into it
        let container = wrapper::create(ProfileInfo {
            name: string::utf8(name),
            url: url::new_unsafe_from_bytes(url)
        }, ctx);

        // `Wrapper` type is freely transferable
        transfer::public_transfer(container, tx_context::sender(ctx))
    }
}

```
