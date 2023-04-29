# Implementing Capability Pattern for Object Authorization

In this tutorial, we will demonstrate how to implement the capability pattern for authorizing actions with an object in the Sui ecosystem. The capability pattern allows you to authorize specific actions using a custom capability type. In our example, we will create a custom NFT-like type `Item` and an `AdminCap` capability to control the creation of new `Item` instances.

Follow these steps to implement the capability pattern:

1. **Define the custom type and capability**: Create a custom type `Item` with properties `id` and `name`. Define a capability `AdminCap` with a property `id` to represent the capability to create new `Item`s.

``` rust
struct AdminCap has key { id: UID }

struct Item has key, store { id: UID, name: String }
```

2. **Initialize the module**: Create a module initializer function that is called once on module publish. Inside this function, create an instance of `AdminCap` and send it to the publisher.

```rust
fun init(ctx: &mut TxContext) {
    transfer::transfer(AdminCap {
        id: object::new(ctx)
    }, tx_context::sender(ctx))
}
```

3. **Define the entry function**: Create an entry function `create_and_send` that takes `AdminCap`, `name`, and `to` as arguments. This function cannot be called if `AdminCap` is not passed as the first argument, ensuring that only the owner of the `AdminCap` can perform this action.

```rust
public entry fun create_and_send(
    _: &AdminCap, name: vector<u8>, to: address, ctx: &mut TxContext
) {
    transfer::transfer(Item {
        id: object::new(ctx),
        name: string::utf8(name)
    }, to)
}
```

By following these steps, you can implement the capability pattern for authorizing actions with an object in the Sui ecosystem. In this example, we created a custom NFT-like type `Item` and an `AdminCap` capability to control the creation of new `Item` instances, ensuring that only the owner of the `AdminCap` can create new items.
