# zkEVM rollup

<head>
  <meta name="twitter:site" content="@BlockEdenHQ"/>
  <meta name="twitter:title" content="zkEVM rollup"/>

  <meta name="twitter:description" content="Welcome to this exploration into the intriguing world of Zero-Knowledge Proofs, Rollups, and the zkEVM - concepts that are rapidly redefining the landscape of blockchain technology. This overview is designed to take you on a journey through these advanced technological constructs, simplifying them into digestible, comprehensible pieces for you to appreciate their impact and potential."/>
  <meta name="og:description" content="Welcome to this exploration into the intriguing world of Zero-Knowledge Proofs, Rollups, and the zkEVM - concepts that are rapidly redefining the landscape of blockchain technology. This overview is designed to take you on a journey through these advanced technological constructs, simplifying them into digestible, comprehensible pieces for you to appreciate their impact and potential."/>
  <meta
    property="og:image"
    content="https://tp-misc.b-cdn.net/blockeden/zkevm-rollup.png"
  />
  <meta
    name="twitter:image"
    content="https://tp-misc.b-cdn.net/blockeden/zkevm-rollup.png"
  />
</head>

Welcome to this exploration into the intriguing world of Zero-Knowledge Proofs, Rollups, and the zkEVM - concepts that are rapidly redefining the landscape of blockchain technology. This overview is designed to take you on a journey through these advanced technological constructs, simplifying them into digestible, comprehensible pieces for you to appreciate their impact and potential.

Our objective is to bridge the gap between the theoretical and practical aspects of these advanced technologies, providing you with a well-rounded understanding of their real-world applications and potential impact. So, whether you are an enthusiast or a professional in the field, we hope this overview serves as a comprehensive guide to these transformative concepts in blockchain technology.

![zkEVM rollup](https://tp-misc.b-cdn.net/blockeden/zkevm-rollup.png "zkEVM rollup")

## What is ZK?

"Zero knowledge" typically refers to a concept in cryptography known as a "zero-knowledge proof." This is a method by which **one party (the prover) can prove to another party (the verifier) that they know a value x, without conveying any information apart from the fact that they know the value x**.

The term originates from the fact that the verifier gains zero knowledge about the proof's details beyond the validity of the assertion. For example, if you were trying to prove that you know the password to an account, a zero-knowledge proof could confirm that you know the password without ever revealing what the password actually is.

The idea of zero-knowledge proofs is significant in privacy-enhancing technologies. For instance, it's a fundamental component of some cryptocurrencies and other systems where it's crucial to balance the need for verification and the necessity of privacy.

## The proof in ZK

In the context of computer science and cryptography, a **proof** is a process or method that confirms the validity of a claim without revealing any extra information. The claim could be as simple as proving you know a password without revealing what the password is.

* ZK-SNARK (Zero-Knowledge Succinct Non-interactive Argument of Knowledge): This is a form of zero-knowledge proof that is particularly efficient in terms of computation and the amount of data that needs to be stored or transmitted. "Succinct" means that the proofs are **small and fast to verify**, and "Non-interactive" means that **no back-and-forth communication is required**. ZK-SNARKs are used in privacy-preserving blockchain systems, like Zcash.

* ZK-STARK (Zero-Knowledge Scalable Transparent Argument of Knowledge): This is another form of zero-knowledge proof. While they also provide efficiency, ZK-STARKs offer the additional advantage of requiring **no trusted setup** (hence the "Transparent" part of the acronym). However, ZK-STARKs are more computationally intensive and produce larger proofs than ZK-SNARKs. ZK-STARK is used in Fractal、SuperSonic, StarkWare, Polygon Miden, etc.

## Why do we need ZK in a blockchain?

As blockchain networks like Bitcoin and Ethereum have grown in popularity, the number of transactions being processed on these networks has increased dramatically. This is a positive sign of adoption, but it also brings with it some challenges. Blockchains, by their design, are not inherently scalable, which leads to problems like slow transaction times and high fees.

Why is scaling  necessary?

1. Limited transaction throughput: Each block in a blockchain has a limited capacity, and there's a new block every few minutes (about 10 minutes for Bitcoin and roughly 15 seconds for Ethereum as of my last update in 2021). This limits the number of transactions that can be processed per second. For example, Bitcoin can handle around 3-7 transactions per second (tps), and Ethereum can handle around 15 tps. This is far less than what traditional systems like Visa can handle (thousands of tps).

2. High fees: When the network is congested, users often need to pay higher fees to prioritize their transactions.

3. Slow confirmations: During times of high demand, transactions can take a long time to be confirmed because there are more transactions than the network can process quickly.

How to scale?

There are generally two approaches to scaling a blockchain - Layer 1 (on-chain) scaling and Layer 2 (off-chain) scaling.

1. Layer 1 scaling involves changes to the blockchain protocol itself. This might involve increasing the block size (allowing each block to hold more transactions), decreasing the block time, or implementing sharding (dividing the network into smaller pieces, or "shards," each capable of processing its own transactions and smart contracts).

2. Layer 2 scaling involves building a secondary layer on top of the existing blockchain. Transactions are processed off-chain and then settled on-chain. Examples of Layer 2 solutions include **state channels, Plasma chains, and rollups (Optimistic Rollups and ZK-Rollups)**. These solutions essentially move most transactions off the main chain, reducing congestion.

Scaling a blockchain is a balance between maintaining its decentralized nature (which can be compromised by some Layer 1 solutions) and increasing its capacity to handle more transactions quickly and cheaply. Different blockchains may opt for different scaling solutions based on their specific goals and constraints.

ZK technology is applied in the rollup scaling solutions.

## What is rollup?

"Rollups" are Layer 2 solutions designed to **increase the throughput of a blockchain**, like Ethereum, without having to alter its underlying protocol or "Layer 1." They aim to solve scalability problems that many blockchains face as they become more popular.

Here's a simplified way to understand how they work:

1. Off-chain Aggregation: Transactions are collected and processed off the main chain in a "sidechain" or "rollup chain." This aggregation happens off-chain to avoid congesting the main chain.

2. Computation and Storage: The data associated with these transactions is processed and stored off-chain. This reduces the computational burden on the main chain.

3. Submission to Main Chain: Once the rollup of transactions is ready, a proof of the aggregated transactions (this can be a cryptographic proof like a SNARK or a STARK, or simply a hash of the data) is submitted to the main chain. This proof is much smaller in size than the full list of individual transactions would be.

4. Verification: The validators on the main chain verify this proof. Once it's verified, the bundled transactions are considered to be confirmed.

There are two primary types of rollups: Optimistic Rollups and ZK-Rollups.

1. **Optimistic Rollups**: These rely on a system of "fraud proofs." Essentially, they assume that the rollup of transactions is correct unless someone proves it to be fraudulent.

2. **ZK-Rollups**: These use zero-knowledge proofs to validate the correctness of each rollup of transactions. ZK-Rollups have the advantage of not requiring a waiting period for confirmation, as they don't rely on fraud proofs.

Both solutions help to increase the number of transactions that can be processed per second on the blockchain, leading to improved scalability. Here are their differences:

|                        | Optimistic Rollup | ZK-Rollup                           |
| ---------------------- | ----------------- | ----------------------------------- |
| Throughput Estimation  | ~500 TPS          | ✅ >2000 TPS                         |
| Fund withdrawal period | Weeks             | ✅ Minutes to hours                  |
| Privacy                | Expensive         | ✅ Cheap                             |
| EVM Compatible         | ✅                 | ⚠️ need to adjust your Solidity code |
| Costs                  | ✅ low             | ❌ high                              |



## ZK-Rollup vs. zkEVM

ZK-Rollup and zkEVM are both Layer 2 scaling solutions that use zero-knowledge proofs for Ethereum, but they target different levels of functionality.

1. **ZK-Rollup**: This is a specific type of Layer 2 solution that bundles or "rolls up" many transactions into a single transaction, significantly increasing the number of transactions that can be handled per second. Each ZK-Rollup contains a state transition and a proof that the transition is correct. However, traditionally, ZK-Rollups have been limited in the complexity of the computations they can handle, mainly being used for simple transfers.
2. **zkEVM** (zk Ethereum Virtual Machine): This is a more recent development that brings the power of zero-knowledge proofs to the Ethereum Virtual Machine (EVM). The EVM is the environment in which all the smart contracts on Ethereum are run. zkEVM allows for more complex smart contract interactions to be rolled up using zero-knowledge proofs, not just simple transfers. In other words, zkEVM is aiming to make any arbitrary computation verifiable in zero-knowledge, effectively allowing the entirety of Ethereum's smart contract capabilities to be scaled via ZK-Rollups.

## zkEVM vs EVM

The EVM is the runtime environment for smart contracts in Ethereum. It's a powerful system that enables developers to write complex scripts, in the form of smart contracts, which are then executed as transactions occur on the Ethereum network. EVM compatibility, therefore, means that the Layer 2 solution can execute the same smart contracts in the same way the EVM does.

Here are some general levels of compatibility:

1. EVM-Equivalent: This is the highest level of compatibility. An EVM-equivalent solution can run any smart contract that can be run on the Ethereum main chain without any changes. It fully replicates the capabilities of the EVM. zkSync 2.0, for example, claims to offer EVM-equivalent functionality in a ZK-Rollup.
2. EVM-Compatible: An EVM-compatible solution can run many, but not necessarily all, of the same smart contracts as the EVM. Some adjustments might be needed to the smart contracts to make them work within the Layer 2 solution.
3. Non-EVM-Compatible: A non-EVM-compatible solution offers functionality that's different from what's available on the Ethereum main chain. It might be able to process simple transactions but not complex smart contracts, for example.

The goal of zkEVM projects is to develop ZK-Rollups that offer full, or near-full, EVM-equivalent functionality. This allows developers to port their decentralized applications to these Layer 2 solutions without significant changes, thereby benefiting from the improved scalability without sacrificing the functionality offered by the EVM.

## zkEVM solutions on the market

### Scroll

The Scroll team, established in 2021, has been committed to developing a ZK Rollup that is equivalent to Ethereum's EVM (Ethereum Virtual Machine) as part of their continuous efforts to scale Ethereum. In collaboration with the Privacy and Scaling Explorations team and other open-source contributors, Scroll has devoted the last two years to publicly construct a bytecode-compatible zkEVM (Zero-Knowledge Ethereum Virtual Machine).

Scroll announced at the end of February that its Alpha testnet is now live on the Goerli network. The Alpha testnet, open to all users for technical testing without permission, has an average block time of three seconds. To date, it has facilitated over 20 million transactions, generated over 1.5 million blocks, and boasts over four million interactive addresses. Additionally, on April 11, Scroll opened its website ecosystem interface.

Recent disclosures indicate that Scroll is consistently progressing on the path of Type 2 EVM equivalence. They have successfully completed compatibility development for all EVM operation codes and are currently undergoing audit processes. Their next objective is to ensure compatibility with EIP2718 transactions.

From a technical standpoint, Scroll’s architecture is relatively traditional. Its primary focus is the zkEVM, responsible for verifying the correctness of EVM execution on Layer 2 (L2). However, to transform the zkEVM into a comprehensive ZK Rollup on Ethereum, a complete L2 architecture is necessary. Specifically, the existing Scroll Alpha testnet consists of the Scroll Node, Bridge Contract, and Rollup Contract.

**The Scroll Node is composed of a Sequencer, a Relayer, and a Coordinator**. The Sequencer, known as the orderer, exposes JSON-RPC to users and applications, reads transactions from the transaction pool, and generates L2 blocks and state roots. Currently, Scroll's Sequencer nodes are centralized, with plans to progressively decentralize in future upgrades.

![Scroll Architecture](https://tp-misc.b-cdn.net/blockeden/scroll-architecture.png "Scroll Architecture")

The Coordinator handles communication between the Roller and Scroll Node, selecting a Roller randomly from the pool to generate proof whenever a new block is created in the Sequencer. The Relayer monitors the Bridge Contract and Rollup Contract on both Ethereum and Scroll chains. The Rollup Contract guarantees L2 data availability at the Layer 1 (L1) level and ensures the recovery of L2 blocks at the L1 level. The Bridge Contract is responsible for inter-chain communication during cross-chain operations, facilitating bi-directional message transmission and asset collateralization and extraction operations.

Lastly, the Roller Network plays a crucial role. The Roller, embedded with zkEVM, acts as a prover in the network, generating validity proofs for the ZK Rollup. The Roller initially converts the execution trace received from the Coordinator into circuit witnesses. It then generates proofs for each zkEVM circuit, eventually aggregating these proofs from multiple ZK circuits.

This sophisticated architectural design signifies Scroll’s unwavering dedication to enhancing Ethereum's scalability through zkEVM rollups. With their public and transparent development practices, they are a shining example of the possibilities that collaboration within the open-source community can yield.

### StarkWare

StarkWare is pushing the boundaries in blockchain technology by offering a STARK-based scaling solution that ensures safety, speed, and seamless user experiences on Layer 2 (L2). They support multiple data availability modes, with their offerings including StarkNet and StarkEx.

StarkNet is their L2 network, while StarkEx is a Rollup verification service designed for enterprise users. DApps (Decentralized Applications) can be built on top of the StarkEx service. However, the service currently only supports custom circuit writing for specific DApps and not a universal zkEVM Rollup. StarkEx also includes several plug-and-play services, such as NFT minting and trading, and derivatives trading. In terms of ecosystem, dYdX, a decentralized futures contract trading platform, is a loyal user of StarkWare.

Strictly speaking, StarkNet can be described as a zkVM (Zero-Knowledge Virtual Machine). It does not use ZK circuits for Ethereum opcodes. Instead, it employs a more ZK-friendly assembly language, AIR (Algebraic Intermediate Representation), and the high-level language, Cairo. Although StarkNet itself is not compatible with EVM, compatibility with Ethereum can be achieved through methods like Kakarot, a zkEVM written in Cairo and a bytecode-equivalent EVM. In terms of centralized characteristics, StarkNet is somewhat centralized and cannot upgrade its security in line with Ethereum. Therefore, it requires concentrated efforts from developers to bolster its security features and keep pace with Ethereum in adapting new protocols.

StarkNet employs STARK as its proof system, which presents more innovation compared to SNARK. Unlike SNARK, STARK does not rely on a "trusted setup". Moreover, it offers simpler cryptographic assumptions, eliminating the need for elliptic curves, pairings, and exponential knowledge assumptions. Instead, it relies purely on hash and information theory, making it more resilient to quantum attacks. Overall, STARK is safer than SNARK. In terms of scalability, STARK has substantial marginal effects, with larger proofs leading to lower total costs.

However, there are architectural concerns. Currently, the system only has one Sequencer, controlled by StarkWare, and one Prover, responsible for generating ZK Proofs. This Prover not only generates proofs for StarkNet but also for all other applications running on their own StarkEx rollup. This concentration of control may pose potential risks in the long term.

In conclusion, StarkWare is steering the development of L2 solutions with their STARK-based scaling architecture. However, as with all technologies, its future success will depend on how well it addresses the issues of centralization and maintains a balance between security, speed, and user experience.

### zkSync

Similar to StarkNet, zkSync has been steadfast in opting for a high-level language equivalent zkVM, attracting a lot of attention, with a remarkably high heat and locked value. Launched on the Ethereum mainnet on June 15, 2020, zkSync 1.0 (also known as zkSync Lite) achieved a transaction throughput of about 300 TPS (Transactions Per Second) but was not compatible with Ethereum's EVM (Ethereum Virtual Machine). zkSync 2.0 (also referred to as zkSync Era) was launched on March 24, 2023.

The objective of zkSync Era is to generate proofs more rapidly by optimizing their custom-built VM, rather than pursuing EVM compatibility. It supports Solidity, Vyper, Yul, and Zinc (the rollup's internal programming language) through a powerful LLVM compiler, thereby implementing most smart contract functionalities. As it adopts an in-house VM, zkSync Era supports native account abstraction, allowing any account to pay fees using any token.

Furthermore, the application of the zkPorter protocol, which combines ZK Rollups and sharding technology, has led to exponential growth in network throughput, reaching over 20,000 TPS (similar to Volitions' data availability switching).

Overall, zkSync stands as an L2 project with a rich ecosystem, garnering the attention of both developers and investors. While there have been recent cases of projects failing completely on zkSync, there remains a question as to whether developers can have a good development and migration experience on the high-level language equivalent zkVM. Currently, there is a lack of definitive usage reports from developers. If the developer experience is favorable, it raises the question of the relevance of other types of efforts to align zkVM with EVM. More time and observation are needed to answer these questions.

In conclusion, zkSync, with its adherence to a high-level language equivalent zkVM, presents an exciting evolution in the world of Ethereum's Layer 2 scaling solutions. As the project continues to mature, its impact on blockchain development and the user experience will become clearer, contributing to our understanding of the future of Layer 2 technology.

### Polygon zkEVM

On March 27, Polygon launched the Beta version of its zkEVM Rollup mainnet, an Ethereum-equivalent virtual machine, and open-sourced all of its zkEVM code. While the locked value in Polygon's zkEVM is significantly lower compared to zkSync, it hosts a variety of intriguing and vibrant projects within its ecosystem.

Polygon stands distinct from Scroll in its Rollup design, as it employs a Proof of Efficiency (PoE) model to incentivize Sequencers and Aggregators, tackling challenges related to decentralization and permissionless validators. In this permissionless Sequencer-Aggregator two-step model, any Sequencer can propose batch packaging applications to earn packaging fees, but it must pay for Layer 1 (L1) Gas charges and deposit a certain amount of Tokens. At the same time, Aggregators are required to set their own goals to maximize profit per proof generation. Additionally, Polygon exhibits deep compatibility with Volition (a blend of ZK Rollup and Validium) in its data availability model, offering users various levels of service.

Polygon has also invested substantial effort in its ZK protocols, yielding notable results. They have summarized their technological advantages in their documentation, which primarily includes:

1. Enhanced Compatibility: Polygon consistently adheres to an EVM equivalent zkVM, aiming to reduce the costs for developers migrating decentralized applications (dApps). Despite Polygon Miden utilizing the ZK-STARK protocol, it still supports the execution of Solidity contracts.
2. Easier Verification: ZK Rollup often faces criticism due to the requirement for expensive specialized hardware to generate validity proofs. These costs are then transferred to the users by the manufacturers operating the hardware. Polygon ZK Rollup (such as Polygon Zero) aims to simplify the proof scheme, enabling lower-grade devices to participate. For instance, the Plonky2 proof generation test performed on a consumer-grade PC.
3. Faster Proof Generation and Verification Process: Polygon Zero can generate a 45kb proof within 170 milliseconds.

To sum up, Polygon's launch of zkEVM Rollup mainnet's Beta version signifies a crucial step in the evolution of Ethereum's Layer 2 technology. With its robust ecosystem and continuous commitment towards enhancing compatibility, easier verification, and faster proof generation, Polygon is establishing a compelling narrative in the blockchain space.

## Summary

This overview revolved around zk, rollup, and zkEVM, which are  prominent aspects of blockchain technology. We also compared solutions provided by Scroll, StarkWare, zkSync, and Polygon, etc.

Nevertheless, there is no silver bullet. The main problems we discussed regarding zkEVM include centralization, expensiveness, and complexity.

* Centralization is primarily related to the control of Sequencers and Provers, potentially limiting the scope of decentralization.
* Complexity is another significant challenge, largely due to the intricate coding requirements and the need for specialized expertise to generate and verify proofs.
* The costliness of zkEVM arises from the considerable resources necessary to generate validity proofs, often passed onto the users. However, strides are being made to simplify proof generation and reduce costs, suggesting potential solutions to these issues.



