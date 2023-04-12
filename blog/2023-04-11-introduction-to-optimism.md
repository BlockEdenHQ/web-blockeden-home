---
title: "Introduction to Optimism: Scaling Ethereum with Optimistic Rollup"
authors: [dora]
tags: [engineering]
image: https://tp-misc.b-cdn.net/blockeden/optimism-blockeden-xyz.png
---

Optimism is an optimistic rollup protocol that provides a solution for scaling Ethereum without sacrificing security or decentralization. The protocol achieves this by increasing the computation and storage capacity of Ethereum, while remaining maximally compatible with existing Ethereum infrastructure.

![Introduction to Optimism: Scaling Ethereum with Optimistic Rollup](https://tp-misc.b-cdn.net/blockeden/optimism-blockeden-xyz.png "Introduction to Optimism: Scaling Ethereum with Optimistic Rollup")

## Basics

### What is Ethereum scalability?

Ethereum scalability refers to the ability of the Ethereum network to process a greater number of useful transactions. The current limited resources of Ethereum, specifically bandwidth, computation, and storage, make it challenging to process a high volume of transactions. Computation and storage are the most significant bottlenecks, leading to extremely high fees. To scale Ethereum and reduce fees, it is necessary to better utilize bandwidth, computation, and storage.

### What is an Optimistic Rollup?

Optimistic rollup is a layer 2 scalability technique that allows for off-chain execution of transactions while maintaining security and decentralization. Transaction data is submitted on-chain, but executed off-chain. In case of an error in the off-chain execution, a fault proof can be submitted on-chain to correct the error and protect user funds. This approach is similar to going to court only if there is a dispute, and executing transactions on-chain only if there is an error.

### What is EVM Equivalence?

EVM Equivalence refers to complete compliance with the state transition function described in the Ethereum yellow paper, which is the formal definition of the Ethereum protocol. An EVM equivalent rollup protocol adheres to the Ethereum standard across EVMs, ensuring that smart contract developers can write code once and deploy it anywhere. This means that any smart contract written for the Ethereum mainnet can be deployed to an EVM equivalent rollup protocol with little to no modification.

### Optimism = EVM equivalent + optimistic rollup + scaling Ethereum

Optimism is an EVM equivalent optimistic rollup protocol designed to scale Ethereum while maintaining maximum compatibility with existing Ethereum infrastructure.

## Security

To scale Ethereum without sacrificing security, Optimism preserves three critical properties of Ethereum layer 1: liveness, availability, and validity.

1. Liveness - Anyone can extend the rollup chain by sending transactions at any time.
   - Transactions can be sent to the rollup chain via the sequencer or directly on layer 1. The sequencer provides low latency and low-cost transactions, while sending transactions directly to layer 1 provides censorship resistance.
2. Availability - Anyone can download the rollup chain.
   - All information required to derive the chain is embedded into layer 1 blocks. Thus, as long as the layer 1 chain is available, so is the rollup.
3. Validity - All transactions are correctly executed, and all withdrawals are correctly processed.
   - The rollup state and withdrawals are managed on an L1 contract called the L2OutputOracle, which is guaranteed to only finalize correct (i.e., valid) rollup block hashes given a single honest verifier assumption. If an invalid block hash is asserted on layer 1, an honest verifier will prove it is invalid and win a bond.

Optimism enforces validity of a rollup through fault proofs. Validity proofs can also be plugged in once they become feasible.

## Network Participants

There are three actors in Optimism: users, sequencers, and verifiers.

![Optimism Network Participants](https://tianpan.co/optimism-bedrock-specs/assets/network-participants-overview.svg "Optimism Network Participants")

### Users

At the core of the network are users who can deposit or withdraw arbitrary transactions on L2 by sending data to a contract on Ethereum mainnet. They can use EVM smart contracts on layer 2 by sending transactions to the sequencers and view the status of transactions using block explorers provided by network verifiers.

### Sequencers

The sequencer is the primary block producer. There may be one sequencer or many using a consensus protocol. For 1.0.0, there is just one sequencer, currently operated under the oversight of the Optimism Foundation. In general, specifications may use "the sequencer" to be a stand-in term for the consensus protocol operated by multiple sequencers.

The sequencer

1. accepts user off-chain transactions,
2. observes on-chain transactions (primarily, deposit events coming from L1),
3. consolidates both kinds of transactions into L2 blocks with a specific ordering, and propagates consolidated L2 blocks to L1 by submitting two things as calldata to L1:
   1. the pending off-chain transactions accepted in step 1, and
   2. sufficient information about the ordering of the on-chain transactions to successfully reconstruct the blocks from step 3, purely by watching L1.

The sequencer also provides access to block data as early as step 3 so that users may access real-time state in advance of L1 confirmation if they so choose.

### Verifiers

Verifiers serve two purposes:

1. serving rollup data to users and
2. verifying rollup integrity and disputing invalid assertions.

To maintain network security, there must be at least one honest verifier who can verify the integrity of the rollup chain and serve blockchain data to users.

## Key Interaction Diagrams

The following diagrams demonstrate how protocol components are utilized during key user interactions to provide context when diving into any particular component specification.

### Depositing and Sending Transactions

Users often begin their L2 journey by depositing ETH from L1. Once they have ETH to pay fees, they start sending transactions on L2. The following diagram demonstrates this interaction and all key Optimism components, which are or should be utilized:

![Depositing and Sending Transactions](https://tianpan.co/optimism-bedrock-specs/assets/sequencer-handling-deposits-and-transactions.svg "Optimism Depositing and Sending Transactions")

### Withdrawing

Withdrawals are initiated by normal transactions on L2 but completed using a transaction on L1 after the dispute period has elapsed.

![Diagram of Withdrawing](https://tianpan.co/optimism-bedrock-specs/assets/user-withdrawing-to-l1.svg)

## Conclusion

Optimism is an optimistic rollup protocol designed to scale Ethereum while maintaining maximum compatibility with existing Ethereum infrastructure. By increasing the computation and storage capacity of Ethereum, it provides a solution for processing a greater number of useful transactions without sacrificing security or decentralization. If you want to learn more about Optimism, please go to their [official specs](https://github.com/ethereum-optimism). With its adherence to Ethereum's core principles and compatibility with existing infrastructure, Optimism is poised to be a key player in Ethereum's journey to become a more scalable and efficient network.

Are you tired of spending countless hours setting up and maintaining your node for Optimism rollup? Do you wish there was an easier way to connect to the network? With BlockEden.xyz Optimism RPC, you can connect to the Optimism rollup in just minutes! Say goodbye to the frustrating and time-consuming process of setting up and maintaining your node.

BlockEden.xyz Optimism RPC simplifies the process of connecting to the Optimism rollup, allowing you to focus on what really matters - developing your project. With our easy-to-use platform, you can quickly and effortlessly connect to the network, saving you valuable time and resources.

Our platform provides a hassle-free solution for developers who want to take advantage of the benefits of Optimism Rollup without the time-consuming setup and maintenance. Our team of experts ensures that the technology is always up-to-date, so you can be confident in the stability and reliability of your application.

Don't let the complexities of Optimism Rollup hold you back from creating the best possible application. Let BlockEden.xyz Optimism RPC take care of the technical details so you can focus on what you do best - innovating and creating. [Sign up for BlockEden.xyz](https://blockeden.xyz/dash/sign-up/) or [try it out](https://blockeden.xyz/keys) today and experience the benefits of seamless connectivity and increased efficiency!

- Twitter: https://twitter.com/BlockEdenHQ
- Discord: https://discord.gg/4Yfvs2HWey
- Source Link: https://blockeden.xyz/blog/2023/04/11/introduction-to-optimism/
