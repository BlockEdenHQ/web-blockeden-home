# Implementing Entry Functions in Move Modules

In this tutorial, we'll explore the concept of entry functions in the Move programming language and learn how to implement them in a Move module. Entry functions use a visibility modifier that allows them to be called directly in transactions. These modifiers can be combined with other visibility modifiers, such as `public` for calling from other modules, and `public(friend)` for calling from friend modules.

1. Create a Move module with a struct:

Create a new Move file (e.g., "object_entry_functions.move") and define a module called "object" with a struct named "Object":

```move
module examples::object {
    use sui::object::{Self, UID};
    use sui::tx_context::TxContext;

    struct Object has key {
        id: UID
    }
}
```

2. Define a public non-entry function:

Add a public function called `create` that returns an instance of the `Object` struct:

```move
public fun create(ctx: &mut TxContext): Object {
    Object { id: object::new(ctx) }
}
```

The `public` visibility modifier allows any module to call this function, and it can also have a return value.

3. Define an entry function:

Next, add an entry function called `create_and_transfer` that takes an `address` and a mutable transaction context:

```move
entry fun create_and_transfer(to: address, ctx: &mut TxContext) {
    // Your code here
}
```

Entry functions can't have return values because they can only be called directly in a transaction, and the returned value can't be used. However, using `entry` without `public` disallows calling this method from other Move modules.

4. Implement the entry function:

Inside the `create_and_transfer` function, call the `create` function to create a new `Object`, and then transfer it to the specified address:

```move
use sui::transfer;

// ...

entry fun create_and_transfer(to: address, ctx: &mut TxContext) {
    transfer::transfer(create(ctx), to)
}
```

5. Final Move module with entry functions:

After implementing the entry function, your complete "object_entry_functions.move" module should look like this:

```move
module examples::object {
    use sui::transfer;
    use sui::object::{Self, UID};
    use sui::tx_context::TxContext;

    struct Object has key {
        id: UID
    }

    /// If function is defined as public - any module can call it.
    /// Non-entry functions are also allowed to have return values.
    public fun create(ctx: &mut TxContext): Object {
        Object { id: object::new(ctx) }
    }

    /// Entrypoints can't have return values as they can only be called
    /// directly in a transaction and the returned value can't be used.
    /// However, `entry` without `public` disallows calling this method from
    /// other Move modules.
    entry fun create_and_transfer(to: address, ctx: &mut TxContext) {
        transfer::transfer(create(ctx), to)
    }
}
```

Save the file, and you've successfully implemented entry functions in a Move module. This allows you to call the `create_and_transfer` function directly in a transaction.

## Why do we need entry function?

Entry functions are essential in the Move programming language for several reasons:

1. Direct transaction execution: Entry functions provide a way to call specific functions directly in a transaction. This allows users to interact with the module's functionality through transactions, enabling operations such as creating or transferring assets, updating states, and more.

2. Clear entry points: By defining entry functions, developers establish clear entry points for transactions, making it easy to understand how the module is intended to be used. This clarity can help reduce errors and improve the overall design of the smart contract.

3. Controlled access: Entry functions, when used without the `public` visibility modifier, can restrict access to specific module functionality. This allows developers to control what parts of their modules are exposed to transactions, ensuring that only the intended functions can be called directly in a transaction.

4. Enforce transaction-only behavior: Since entry functions can't have return values, they enforce a transaction-only behavior, meaning the results of these functions can't be used directly by other functions or modules. This feature helps developers maintain the integrity of their modules by ensuring that certain actions can only be performed within a transaction context.

In summary, entry functions play a critical role in the Move programming language by enabling direct transaction execution, providing clear entry points, controlling access to module functionality, and enforcing transaction-only behavior.

## Is it like “main” function in other language?

Entry functions in Move can be seen as somewhat similar to the `main` function in other programming languages in that they both serve as entry points for execution. However, there are some key differences between the two:

1. Purpose: The `main` function in many programming languages is the primary entry point for the execution of a program. In contrast, entry functions in Move are entry points for direct transaction execution within a smart contract. A Move module can have multiple entry functions, each serving a different purpose or transaction, whereas there is usually only one `main` function in a program.

2. Return values: In most programming languages, the `main` function can have a return value, typically used to indicate the success or failure of the program's execution. However, entry functions in Move can't have return values because they can only be called directly within a transaction, and their returned values can't be used outside the transaction.

3. Visibility: The `main` function is often a global entry point for a program, whereas entry functions in Move can be used with different visibility modifiers, such as `public`, `public(friend)`, or without any modifier. This allows developers to control the accessibility of their entry functions in the context of smart contracts and transactions.

While both the `main` function and entry functions serve as entry points for execution, their roles, behaviors, and use cases differ significantly due to the unique requirements of the Move programming language and smart contracts.
