# Sui TypeScript SDK

The Sui TypeScript SDK is an SDK built on the [Sui JSON RPC API](/docs/sui/sui-api-reference/), providing utility classes and functions for applications to sign transactions and interact with the Sui network.

Please note that the RPC and SDK API are still being iterated on before TestNet, so expect frequent breaking changes in the short-term. We expect the API to stabilize after the upcoming TestNet launch.

## Working with DevNet

The SDK will be published to the npm registry with the same bi-weekly release cycle as the DevNet validators and RPC Server. To use the SDK in your project, simply run:

```bash
$ npm install @mysten/sui.js
```

You can also use your preferred npm client, such as yarn or pnpm.

## Working with local network

Note that the `latest` tag for the [published SDK](https://www.npmjs.com/package/@mysten/sui.js) might go out of sync with the RPC server on the `main` branch until the next release. If you're developing against a local network, we recommend using the `experimental`-tagged packages, which contain the latest changes from `main`.

```bash
npm install @mysten/sui.js@experimental
```

Refer to the [JSON RPC](https://github.com/MystenLabs/sui/blob/main/doc/src/build/json-rpc.md) topic for instructions about how to start a local network and local RPC server.

## Connecting to Sui Network

The `JsonRpcProvider` class provides a connection to the JSON-RPC Server and should be used for all read-only operations. The default URLs to connect with the RPC server are:

- local: http://127.0.0.1:9000
- DevNet: https://api.blockeden.xyz/sui/devnet/${apiAccessKey}

Don't have an access key? Create one at https://BlockEden.xyz/dash/.

```typescript
import { JsonRpcProvider, devnetConnection } from '@mysten/sui.js';
// connect to Devnet
const provider = new JsonRpcProvider(devnetConnection);
// get tokens from the DevNet faucet server
await provider.requestSuiFromFaucet(
  '0xbff6ccc8707aa517b4f1b95750a2a8c666012df3',
);
```

For local development, you can run `cargo run --bin sui-test-validator` to spin up a local network with a local validator, a fullnode, and a faucet server. Refer to [this guide](https://docs.sui.io/build/sui-local-network) for more information.

```typescript
import { JsonRpcProvider, localnetConnection } from '@mysten/sui.js';
// connect to local RPC server
const provider = new JsonRpcProvider(localnetConnection);
// get tokens from the local faucet server
await provider.requestSuiFromFaucet(
  '0xbff6ccc8707aa517b4f1b95750a2a8c666012df3',
);
```

You can also construct your own in custom connections, with your own URLs to your fullnode and faucet server

```typescript
import { JsonRpcProvider, Connection } from '@mysten/sui.js';
// Construct your connection:
const connection = new Connection({
  fullnode: 'https://fullnode.devnet.sui.io',
  faucet: 'https://faucet.devnet.sui.io/gas',
});
// connect to a custom RPC server
const provider = new JsonRpcProvider(connection);
// get tokens from a custom faucet server
await provider.requestSuiFromFaucet(
  '0xbff6ccc8707aa517b4f1b95750a2a8c666012df3',
);
```

## Writing APIs

For a primer for building transactions, refer to [this guide](https://docs.sui.io/build/prog-trans-ts-sdk).

### Transfer Object

```typescript
import {
  Ed25519Keypair,
  JsonRpcProvider,
  RawSigner,
  Transaction,
} from '@mysten/sui.js';
// Generate a new Ed25519 Keypair
const keypair = new Ed25519Keypair();
const provider = new JsonRpcProvider();
const signer = new RawSigner(keypair, provider);
const tx = new Transaction();
tx.transferObjects(
  [tx.object('0x5015b016ab570df14c87649eda918e09e5cc61e0')],
  tx.pure('0xd84058cb73bdeabe123b56632713dcd65e1a6c92'),
);
const result = await signer.signAndExecuteTransaction({ transaction: tx });
console.log({ result });
```

### Transfer Sui

To transfer `1000` SUI to another address:

```typescript
import {
  Ed25519Keypair,
  JsonRpcProvider,
  RawSigner,
  Transaction,
} from '@mysten/sui.js';
// Generate a new Keypair
const keypair = new Ed25519Keypair();
const provider = new JsonRpcProvider();
const signer = new RawSigner(keypair, provider);
const tx = new Transaction();
const coin = tx.splitCoin(tx.gas, tx.pure(1000));
tx.transferObjects([coin], tx.pure(keypair.getPublicKey().toSuiAddress()));
const result = await signer.signAndExecuteTransaction({ transaction: tx });
console.log({ result });
```

### Merge coins

```typescript
import {
  Ed25519Keypair,
  JsonRpcProvider,
  RawSigner,
  Transaction,
} from '@mysten/sui.js';
// Generate a new Keypair
const keypair = new Ed25519Keypair();
const provider = new JsonRpcProvider();
const signer = new RawSigner(keypair, provider);
const tx = new Transaction();
tx.mergeCoin(tx.object('0x5015b016ab570df14c87649eda918e09e5cc61e0'), [
  tx.object('0xcc460051569bfb888dedaf5182e76f473ee351af'),
]);
const result = await signer.signAndExecuteTransaction({ transaction: tx });
console.log({ result });
```

### Move Call

```typescript
import {
  Ed25519Keypair,
  JsonRpcProvider,
  RawSigner,
  Transaction,
} from '@mysten/sui.js';
// Generate a new Keypair
const keypair = new Ed25519Keypair();
const provider = new JsonRpcProvider();
const signer = new RawSigner(keypair, provider);
const packageObjectId = '0x...';
const tx = new Transaction();
tx.moveCall({
  target: `${packageObjectId}::nft::mint`,
  arguments: [tx.pure('Example NFT')],
});
const result = await signer.signAndExecuteTransaction({ transaction: tx });
console.log({ result });
```

### Publish Modules

To publish a package:

```typescript
import {
  Ed25519Keypair,
  JsonRpcProvider,
  RawSigner,
  Transaction,
  normalizeSuiObjectId,
} from '@mysten/sui.js';
const { execSync } = require('child_process');
// Generate a new Keypair
const keypair = new Ed25519Keypair();
const provider = new JsonRpcProvider();
const signer = new RawSigner(keypair, provider);
const compiledModulesAndDependencies = JSON.parse(
  execSync(
    `${cliPath} move build --dump-bytecode-as-base64 --path ${packagePath}`,
    { encoding: 'utf-8' },
  ),
);
const tx = new Transaction();
tx.publish(
  compiledModulesAndDeps.modules.map((m: any) => Array.from(fromB64(m))),
  compiledModulesAndDeps.dependencies.map((addr: string) =>
    normalizeSuiObjectId(addr),
  ),
);
const result = await signer.signAndExecuteTransaction({ transaction: tx });
console.log({ result });
```

## Reading APIs

### Get Owned Objects

Fetch objects owned by the address `0xbff6ccc8707aa517b4f1b95750a2a8c666012df3`

```typescript
import { JsonRpcProvider } from '@mysten/sui.js';
const provider = new JsonRpcProvider();
const objects = await provider.getOwnedObjects({
  owner: '0xbff6ccc8707aa517b4f1b95750a2a8c666012df3',
});
```

### Get Object

Fetch object details for the object with id `0xcff6ccc8707aa517b4f1b95750a2a8c666012df3`

```typescript
import { JsonRpcProvider } from '@mysten/sui.js';
const provider = new JsonRpcProvider();
const txn = await provider.getObject({
  id: '0xcff6ccc8707aa517b4f1b95750a2a8c666012df3',
  // fetch the object content field
  options: { showContent: true },
});
// You can also fetch multiple objects in one batch request
const txns = await provider.multiGetObjects({
  ids: [
    '0xcff6ccc8707aa517b4f1b95750a2a8c666012df3',
    '0xdff6ccc8707aa517b4f1b95750a2a8c666012df3',
  ],
  // only fetch the object type
  options: { showType: true },
});
```

### Get Transaction

Fetch transaction details from transaction digests:

```typescript
import { JsonRpcProvider } from '@mysten/sui.js';
const provider = new JsonRpcProvider();
const txn = await provider.getTransaction({
  digest: '6mn5W1CczLwitHCO9OIUbqirNrQ0cuKdyxaNe16SAME=',
  // only fetch the effects field
  options: { showEffects: true },
});
// You can also fetch multiple transactions in one batch request
const txns = await provider.multiGetTransactions({
  digests: [
    '6mn5W1CczLwitHCO9OIUbqirNrQ0cuKdyxaNe16SAME=',
    '7mn5W1CczLwitHCO9OIUbqirNrQ0cuKdyxaNe16SAME=',
  ],
  // fetch both the input transaction data as well as effects
  options: { showInput: true, showEffects: true },
});
```

### Get Coins

Fetch coins of type `0x168da5bf1f48dafc111b0a488fa454aca95e0b5e::usdc::USDC` owned by an address:

```typescript
import { JsonRpcProvider } from '@mysten/sui.js';
const provider = new JsonRpcProvider();
// If coin type is not specified, it defaults to 0x2::sui::SUI
const coins = await provider.getCoins({
  owner: '0xbff6ccc8707aa517b4f1b95750a2a8c666012df3',
  coinType: '0x168da5bf1f48dafc111b0a488fa454aca95e0b5e::usdc::USDC',
});
```

Fetch all coin objects owned by an address:

```typescript
import { JsonRpcProvider } from '@mysten/sui.js';
const provider = new JsonRpcProvider();
const allCoins = await provider.getAllCoins({
  owner: '0xbff6ccc8707aa517b4f1b95750a2a8c666012df3',
});
```

Fetch the total coin balance for one coin type, owned by an address:

```typescript
import { JsonRpcProvider } from '@mysten/sui.js';
const provider = new JsonRpcProvider();
// If coin type is not specified, it defaults to 0x2::sui::SUI
const coinBalance = await provider.getBalance({
  owner: '0xbff6ccc8707aa517b4f1b95750a2a8c666012df3',
  coinType: '0x168da5bf1f48dafc111b0a488fa454aca95e0b5e::usdc::USDC',
});
```

### Events API

Querying events created by transactions sent by account
`0xbff6ccc8707aa517b4f1b95750a2a8c666012df3`

```typescript
import { JsonRpcProvider } from '@mysten/sui.js';
const provider = new JsonRpcProvider();
const events = provider.queryEvents({
  query: { Sender: toolbox.address() },
  limit: 2,
});
```

Subscribe to all events created by transactions sent by account `0xbff6ccc8707aa517b4f1b95750a2a8c666012df3`

```typescript
import { JsonRpcProvider, SuiEvent } from '@mysten/sui.js';
const provider = new JsonRpcProvider();

// calls RPC method 'sui_subscribeEvent' with params:
// [ { Sender: '0xbff6ccc8707aa517b4f1b95750a2a8c666012df3' } ]
const subscriptionId = await provider.subscribeEvent({
  filter: { Sender: '0xbff6ccc8707aa517b4f1b95750a2a8c666012df3' },
  onMessage(event: SuiEvent) {
    // handle subscription notification message here. This function is called once per subscription message.
  },
});

// later, to unsubscribe
// calls RPC method 'sui_unsubscribeEvent' with params: [ subscriptionId ]
const subFoundAndRemoved = await provider.unsubscribeEvent({
  id: subscriptionId,
});
```

Subscribe to all events created by a package's `nft` module

```typescript
import { JsonRpcProvider, SuiEvent } from '@mysten/sui.js';
const provider = new JsonRpcProvider();

const package = '0x...';
const devnetNftFilter = {
    { MoveModule: { package, module: 'nft'} },
};
const devNftSub = await provider.subscribeEvent({
  filter: devnetNftFilter,
  onMessage(event: SuiEvent) {
    // handle subscription notification message here
  },
});
```