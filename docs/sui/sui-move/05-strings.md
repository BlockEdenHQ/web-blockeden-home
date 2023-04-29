# Working with Strings in Move

In this tutorial, we will learn how to work with strings in the Move programming language. Move does not have a native type for strings, but it provides a convenient wrapper for handling strings using the `std::string::{Self, String}` module.

1. Create a Move module with a struct:

Create a new Move file (e.g., "strings_example.move") and define a module called "strings" with a struct named "Name":

```move
module examples::strings {
    use sui::object::{Self, UID};
    use sui::tx_context::TxContext;
    use std::string::{Self, String};

    struct Name has key, store {
        id: UID,

        /// Here it is - the String type
        name: String
    }
}
```

2. Import the String type:

To use the `String` type, import it from the `std::string` module:

```move
use std::string::{Self, String};
```

3. Define a function to create a Name object:

Add a public function called `issue_name_nft` that takes a `vector<u8>` (representing raw bytes of a string) and a mutable transaction context as input. This function will create and return a `Name` object:

```move
public fun issue_name_nft(
    name_bytes: vector<u8>, ctx: &mut TxContext
): Name {
    // Your code here
}
```

4. Implement the function to create a Name object:

Inside the `issue_name_nft` function, create a `Name` object by initializing its `id` and `name` fields. Convert the raw bytes (`name_bytes`) into a `String` type using the `string::utf8` function:

```move
public fun issue_name_nft(
    name_bytes: vector<u8>, ctx: &mut TxContext
): Name {
    Name {
        id: object::new(ctx),
        name: string::utf8(name_bytes)
    }
}
```

5. Final Move module with String handling:

After implementing the function, your complete "strings_example.move" module should look like this:

```move
module examples::strings {
    use sui::object::{Self, UID};
    use sui::tx_context::TxContext;
    use std::string::{Self, String};

    struct Name has key, store {
        id: UID,

        /// Here it is - the String type
        name: String
    }

    /// Create a name Object by passing raw bytes
    public fun issue_name_nft(
        name_bytes: vector<u8>, ctx: &mut TxContext
    ): Name {
        Name {
            id: object::new(ctx),
            name: string::utf8(name_bytes)
        }
    }
}
```

Save the file, and you've successfully implemented string handling in a Move module using the `std::string::{Self, String}` module.
