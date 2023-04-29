## Creating a Simple NFT

In this tutorial, we will demonstrate how to create a simple Non-Fungible Token (NFT) using Sui. In Sui, everything is an NFT - Objects are unique, non-fungible, and owned. We will create an NFT with basic properties such as a name, description, and URL.

Follow these steps to create a simple NFT:

1. **Create the devnet_nft module**: Define a new module `examples::devnet_nft` to create the NFT.

```rust
module examples::devnet_nft {
    use sui::url::{Self, Url};
    use std::string;
    use sui::object::{Self, ID, UID};
    use sui::event;
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
}
```

2. **Define the DevNetNFT struct**: Create a `DevNetNFT` struct with properties such as `id`, `name`, `description`, and `url`.

```rust
struct DevNetNFT has key, store {
    id: UID,
    name: string::String,
    description: string::String,
    url: Url,
}
```

3. **Create events**: Define an event `NFTMinted` that is emitted when an NFT is minted.

```rust
struct NFTMinted has copy, drop {
    object_id: ID,
    creator: address,
    name: string::String,
}
```

4. **Define public view functions**: Create public view functions `name`, `description`, and `url` that return references to the corresponding properties of a given `DevNetNFT`.

```rust
public fun name(nft: &DevNetNFT): &string::String {
    &nft.name
}

public fun description(nft: &DevNetNFT): &string::String {
    &nft.description
}

public fun url(nft: &DevNetNFT): &Url {
    &nft.url
}
```

5. **Create the mint_to_sender function**: Define an entry function `mint_to_sender` that takes `name`, `description`, `url`, and a mutable transaction context as arguments. It creates a new `DevNetNFT` with the given properties and transfers the NFT to the transaction sender.

```rust
public entry fun mint_to_sender(
    name: vector<u8>,
    description: vector<u8>,
    url: vector<u8>,
    ctx: &mut TxContext
) {
    let sender = tx_context::sender(ctx);
    let nft = DevNetNFT {
        id: object::new(ctx),
        name: string::utf8(name),
        description: string::utf8(description),
        url: url::new_unsafe_from_bytes(url)
    };

    event::emit(NFTMinted {
        object_id: object::id(&nft),
        creator: sender,
        name: nft.name,
    });

    transfer::public_transfer(nft, sender);
}
```

6. **Create the transfer, update_description, and burn functions**: Define entry functions `transfer`, `update_description`, and `burn` that allow transferring the NFT to a recipient, updating the description of the NFT, and permanently deleting the NFT, respectively.

```rust
public entry fun transfer(
    nft: DevNetNFT, recipient: address, _: &mut TxContext
) {
    transfer::public_transfer(nft, recipient)
}

public entry fun update_description(
    nft: &mut DevNetNFT,
    new_description: vector<u8>,
    _:
```
