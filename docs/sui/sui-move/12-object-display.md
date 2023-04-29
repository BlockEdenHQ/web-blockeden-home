# Setting Up Object Display for Custom Types

In this tutorial, we will walk you through the process of setting up an object display for custom types in the Sui ecosystem using the sui::display module. This module allows creators or builders who own a Publisher object to define display properties for their objects. The Sui Object Display is a template engine that enables on-chain display configuration for types to be handled off-chain by the ecosystem.

We will follow these steps:

1. **Define your custom type**: Create a custom type for which you want to define the display properties. In the example below, we define a `Hero` struct with `id`, `name`, and `img_url` properties.

```rust
struct Hero has key, store {
    id: UID,
    name: String,
    img_url: String,
}
```

2. **Create a One-Time-Witness (OTW) and initialize the module**: Define an OTW for the module and initialize it by claiming the `Publisher` object, creating a `Display` object with a set of fields, and publishing the `Display` via the `update_version` call.

```rust
struct MY_HERO has drop {}

fun init(otw: MY_HERO, ctx: &mut TxContext) {
    // Define keys and values for display properties...

    let publisher = package::claim(otw, ctx);
    let display = display::new_with_fields<Hero>(
        &publisher, keys, values, ctx
    );
    display::update_version(&mut display);

    transfer::public_transfer(publisher, sender(ctx));
    transfer::public_transfer(display, sender(ctx));
}
```

3. **Define the display properties**: Define the keys and values for the display properties. Use the `{property}` syntax to access object properties and insert them as part of the template string.

```rust
let keys = vector[
    utf8(b"name"),
    utf8(b"link"),
    utf8(b"image_url"),
    utf8(b"description"),
    utf8(b"project_url"),
    utf8(b"creator"),
];

let values = vector[
    utf8(b"{name}"),
    utf8(b"https://sui-heroes.io/hero/{id}"),
    utf8(b"ipfs://{img_url}"),
    utf8(b"A true Hero of the Sui ecosystem!"),
    utf8(b"https://sui-heroes.io"),
    utf8(b"Unknown Sui Fan")
];
```

4. **Modify and update the display properties**: Once you have acquired the `Display`, you can modify the properties using the `add_multiple`, `edit`, and `remove` functions. To apply the changes, call the `update_version` function.

```rust
display::add_multiple(&mut display, keys, values);
display::edit(&mut display, key, value);
display::remove(&mut display, key);
display::update_version(&mut display);
```

By following these steps, you can set up an object display for custom types in the Sui ecosystem. This allows you to define display properties for your objects and use an object's data for substitution into a template string.
