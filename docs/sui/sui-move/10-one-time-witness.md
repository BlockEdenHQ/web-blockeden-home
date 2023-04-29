# One Time Witness (OTW)

In this tutorial, we will discuss the use of One Time Witness (OTW) in Sui Move. OTW is a special instance of a type that is created only in the module initializer and is guaranteed to be unique and have only one instance. We will explore the properties of OTW, how to check whether an instance is an OTW, and how to use it in a smart contract.

1. Import the required dependencies:

```rust
use sui::tx_context::TxContext;
use sui::object::{Self, UID};
use std::string::String;
use sui::transfer;
use sui::types;
```

2. Define error constants:

```rust
/// For when someone tries to send a non OTW struct
const ENotOneTimeWitness: u64 = 0;
```

3. Define the struct for the Unique Type Record:

```rust
struct UniqueTypeRecord<phantom T> has key {
    id: UID,
    name: String
}
```

4. Expose a public function to allow registering new types with custom names:

```rust
public fun add_record<T: drop>(
    witness: T,
    name: String,
    ctx: &mut TxContext
) {
    assert!(types::is_one_time_witness(&witness), ENotOneTimeWitness);

    transfer::share_object(UniqueTypeRecord<T> {
        id: object::new(ctx),
        name
    });
}
```

5. Define the struct for the One Time Witness:

```rust
struct MY_OTW has drop {}
```

6. Define the initialization function:

```rust
fun init(witness: MY_OTW, ctx: &mut TxContext) {
    registry::add_record(
        witness,
        string::utf8(b"My awesome record"),
        ctx
    )
}
```

In this example, we use OTW to ensure that there is only one record per type. We define a struct called `UniqueTypeRecord` that has a key and a name. We also define a function called `add_record` that checks whether the type is an OTW and shares the record for the world to see.

To use OTW, we define a struct called `MY_OTW` and use it as the witness in the initialization function of our smart contract. We then call the `add_record` function and pass in the witness, a custom name, and the context.

One Time Witness is a powerful tool in Sui Move that guarantees uniqueness and can be used to ensure that certain actions are performed only once. It is essential to understand its properties and how to use it in smart contracts.

> To check whether an instance is an OTW, [`sui::types::is_one_time_witness(witness)`](https://github.com/MystenLabs/sui/blob/main/crates/sui-framework/sources/types.move) should be used.
