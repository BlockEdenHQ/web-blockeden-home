# Creating Custom Transfer Functions in Sui Move

In this tutorial, we will learn how to create custom transfer functions in Sui Move. Custom transfer functions are useful when you want to enforce certain conditions or fees for transferring objects.

We will create a `TitleDeed` object to represent property ownership and a `LandRegistry` to manage the transfer of these deeds. We will also implement a custom transfer function that requires a fee for each transfer.

1. Define the necessary structs:

First, define the `GovernmentCapability`, `TitleDeed`, and `LandRegistry` structs.

```move
module examples::restricted_transfer {
    use sui::tx_context::{Self, TxContext};
    use sui::balance::{Self, Balance};
    use sui::coin::{Self, Coin};
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::sui::SUI;

    struct GovernmentCapability has key { id: UID }

    struct TitleDeed has key {
        id: UID,
        // ... some additional fields
    }

    struct LandRegistry has key {
        id: UID,
        balance: Balance<SUI>,
        fee: u64
    }
}
```

2. Initialize the module:

Create a `LandRegistry` and transfer the `GovernmentCapability` to the transaction sender on module initialization.

```move
    fun init(ctx: &mut TxContext) {
        transfer::transfer(GovernmentCapability {
            id: object::new(ctx)
        }, tx_context::sender(ctx));

        transfer::share_object(LandRegistry {
            id: object::new(ctx),
            balance: balance::zero<SUI>(),
            fee: 10000
        })
    }
```

3. Implement the `issue_title_deed` function:

Create a `TitleDeed` and transfer it to the specified property owner. Only the owner of the `GovernmentCapability` can perform this action.

```move
    public entry fun issue_title_deed(
        _: &GovernmentCapability,
        for: address,
        ctx: &mut TxContext
    ) {
        transfer::transfer(TitleDeed {
            id: object::new(ctx)
        }, for)
    }
```

4. Implement the custom transfer function:

Create a `transfer_ownership` function that checks whether the paid fee is equal to the required fee and then transfers the `TitleDeed` to the new owner.

```move
    public entry fun transfer_ownership(
        registry: &mut LandRegistry,
        paper: TitleDeed,
        fee: Coin<SUI>,
        to: address,
    ) {
        assert!(coin::value(&fee) == registry.fee, EWrongAmount);

        // add a payment to the LandRegistry balance
        balance::join(&mut registry.balance, coin::into_balance(fee));

        // finally call the transfer function
        transfer::transfer(paper, to)
    }
}
```

Now, you have created a custom transfer function in Sui Move that enforces a fee for transferring `TitleDeed` objects. This allows you to manage property ownership transfers and collect fees in the process.

Then, we'll add some extra functions to the `LandRegistry` for managing and tracking the property ownership transfers.

5. Implement a function to get the current fee:

Add a `get_fee` function to read the current fee for transferring a `TitleDeed`.

```move
    public fun get_fee(registry: &LandRegistry) -> u64 {
        registry.fee
    }
```

6. Implement a function to update the transfer fee:

Create a `set_fee` function that allows the owner of the `GovernmentCapability` to update the fee for transferring a `TitleDeed`.

```move
    public entry fun set_fee(
        _: &GovernmentCapability,
        registry: &mut LandRegistry,
        new_fee: u64
    ) {
        registry.fee = new_fee;
    }
```

7. Implement a function to collect the accumulated fees:

Add a `collect_fees` function that allows the owner of the `GovernmentCapability` to collect the fees accumulated in the `LandRegistry`.

```move
    public entry fun collect_fees(
        _: &GovernmentCapability,
        registry: &mut LandRegistry,
        ctx: &mut TxContext
    ) {
        let amount = balance::value(&registry.balance);
        let fees = coin::take(&mut registry.balance, amount, ctx);

        transfer::public_transfer(fees, tx_context::sender(ctx))
    }
```

With these additional functions, you now have a more comprehensive example of using custom transfer functions in Sui Move. The `LandRegistry` can manage property ownership transfers, collect fees, and allow the government to update fees and collect accumulated fees as needed.

Finally, the file will be like

```move
module examples::restricted_transfer {
    use sui::tx_context::{Self, TxContext};
    use sui::balance::{Self, Balance};
    use sui::coin::{Self, Coin};
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::sui::SUI;

    /// For when paid amount is not equal to the transfer price.
    const EWrongAmount: u64 = 0;

    /// A Capability that allows bearer to create new `TitleDeed`s.
    struct GovernmentCapability has key { id: UID }

    /// An object that marks a property ownership. Can only be issued
    /// by an authority.
    struct TitleDeed has key {
        id: UID,
        // ... some additional fields
    }

    /// A centralized registry that approves property ownership
    /// transfers and collects fees.
    struct LandRegistry has key {
        id: UID,
        balance: Balance<SUI>,
        fee: u64
    }

    /// Create a `LandRegistry` on module init.
    fun init(ctx: &mut TxContext) {
        transfer::transfer(GovernmentCapability {
            id: object::new(ctx)
        }, tx_context::sender(ctx));

        transfer::share_object(LandRegistry {
            id: object::new(ctx),
            balance: balance::zero<SUI>(),
            fee: 10000
        })
    }

    /// Create `TitleDeed` and transfer it to the property owner.
    /// Only owner of the `GovernmentCapability` can perform this action.
    public entry fun issue_title_deed(
        _: &GovernmentCapability,
        for: address,
        ctx: &mut TxContext
    ) {
        transfer::transfer(TitleDeed {
            id: object::new(ctx)
        }, for)
    }

    /// A custom transfer function. Required due to `TitleDeed` not having
    /// a `store` ability. All transfers of `TitleDeed`s have to go through
    /// this function and pay a fee to the `LandRegistry`.
    public entry fun transfer_ownership(
        registry: &mut LandRegistry,
        paper: TitleDeed,
        fee: Coin<SUI>,
        to: address,
    ) {
        assert!(coin::value(&fee) == registry.fee, EWrongAmount);

        // add a payment to the LandRegistry balance
        balance::join(&mut registry.balance, coin::into_balance(fee));

        // finally call the transfer function
        transfer::transfer(paper, to)
    }
}

```
