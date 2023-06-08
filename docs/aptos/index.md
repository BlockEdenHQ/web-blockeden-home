---
sidebar_position: 2
---
# Aptos API Quick Start Guide

Welcome to BlockEden.xyz, your trusted provider of the [Aptos](https://aptoslabs.com/) Node API. Our platform facilitates robust and seamless data interaction, presenting an array of benefits:

* **Standard Interface**: Our interface supports the Aptos Node API via a Restful API through HTTPS, enhancing your interaction experience.
* **Reliability**: With consistent updates reflecting the latest in network upgrades, we guarantee a minimum 99.9% uptime, assuring uninterrupted services.
* **Instant Availability**: Connect your application swiftly with just one line of code, eliminating the need for complicated setups and syncing processes.
* **Full Delegation**: We alleviate you from the DevOps burden associated with maintaining an Aptos node, offering a fully managed solution.


## Steps to Connect to the Aptos Mainnet

**Step 1**: Navigate to https://blockeden.xyz/dash/. If you're a new user, please proceed to sign up.

**Step 2**: Input a unique name for the API key and click '+ Create key'.

**Step 3**: Click on your newly created access key to copy it to your clipboard for future reference.

**Step 4**: Implement the access URL in your project as demonstrated below. Ensure to replace `<access_key>` with your personal access key.

```typescript
const {AptosClient} = require("aptos");

(async () => {
  const client = new AptosClient("https://aptos-mainnet.blockeden.xyz/<access_key>");
  const block = await client.getBlockByHeight(1);
  console.log(block);
})();
```

## Crafting a Request with BlockEden.xyz

Your access URL serves as your unique endpoint to the Aptos Node API. Copy it and compose your initial request. Here is an example: `https://aptos-testnet.blockeden.xyz/<access_key>/v1`

```json
{
  "chain_id": 2,
  "epoch": "823",
  "ledger_version": "282458715",
  "oldest_ledger_version": "132658733",
  "ledger_timestamp": "1665901262718511",
  "node_role": "full_node",
  "oldest_block_height": "15427523",
  "block_height": "21026963",
  "git_hash": "36162a71289270c41371874fa2e818da96bc4751"
}
```

## API Documentation

Explore our interactive [API documentation](/aptos-api-reference/get-ledger-info) to learn more about the various capabilities and methods available.

## Ready to Innovate!

If you require further assistance or have any inquiries, feel free to join our community on [Discord](https://discord.gg/GqzTYQ4YNa). We look forward to seeing your creations!

Happy coding!
