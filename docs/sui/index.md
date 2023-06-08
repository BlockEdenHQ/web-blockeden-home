---
sidebar_position: 3
---

# Quick Start Guide for Sui JSON-RPC API

Welcome to BlockEden.xyz, the proud provider of the [Sui](https://sui.io/) JSON-RPC API equipped with indexer data. We are dedicated to delivering a robust, intuitive, and efficient interface for your Sui node.

* **Standardized Interface**: We furnish a standard interface supporting Sui JSON-RPC API through HTTPS for seamless data interaction.
* **Reliability Assured**: Our system consistently runs on the most recent network upgrades, guaranteeing a minimum of 99.9% uptime to maintain uninterrupted service.
* **Immediate Availability**: Experience instant connectivity with our straightforward single-line-of-code integration. We've eliminated the need for complicated setups and syncing.
* **Comprehensive Delegation**: Enjoy the freedom from DevOps work for maintaining a Sui node, as we provide a fully delegated solution.

## How to Create a BlockEden.xyz Access Key

**Step 1**: Visit https://blockeden.xyz/dash/. If you're new to our platform, please complete the sign-up process.

**Step 2**: Specify a unique name for your API key, and click on '+ Create key'.

**Step 3**: After creation, click on the provided access key to copy it to your clipboard for future referencing.

**Step 4**: Incorporate the copied access key into your project as demonstrated below. Ensure you replace `<access_key>` with your personal access key.

**Connection to Sui using `CURL`:**

```bash
# Sui JSON-RPC discovery request
curl -X POST https://sui-devnet.blockeden.xyz/<access_key> \
-H 'Content-Type: application/json' \
-d '{ "jsonrpc":"2.0", "method":"rpc.discover","id":1}'
```

**Connection to Sui using TypeScript SDK:**

```typescript
const { JsonRpcProvider, devnetConnection } = require("@mysten/sui.js");

(async () => {
  const providerUrl = "https://api.blockeden.xyz/sui/<access_key>";
  const provider = new JsonRpcProvider(devnetConnection);
  const totalTxBlocks = await provider.getTotalTransactionBlocks();
  console.log(`successfully called ${providerUrl} to getTotalTransactionBlocks. result: ${totalTxBlocks}`);
})();
```

By following these instructions, you will be equipped to effectively leverage our Sui RPC API for your development needs. Happy coding!
