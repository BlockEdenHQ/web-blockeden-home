---
title: "Why Sui Blockchain is a Promising Platform for Fast and Efficient Processing of Transactions"
authors: [dora]
tags: [engineering, sui]
image: https://tp-misc.b-cdn.net/blockeden/sui-blockeden-xyz.png
---

In the world of blockchain, speed and efficiency are vital for the success of any platform. Enter Sui Blockchain, a platform that promises to deliver low latency transaction processing and smart contract execution.

![Sui and BlockEden.xyz](https://tp-misc.b-cdn.net/blockeden/sui-blockeden-xyz.png "Sui and BlockEden.xyz")

One of the unique features of Sui Blockchain is its ability to distinguish between different kinds of object ownership. Unlike other blockchain platforms where every contract and object is mutably shared, Sui allows an object to be owned by an address and can be mutably owned, immutably owned, or mutably shared. This feature is leveraged for parallel execution of smart contracts and asset management.

Sui uses a decentralized permissionless smart contract platform, biased towards low-latency management of assets. It uses the Move programming language to define assets as objects that may be owned by an address. The platform is maintained by a permissionless set of authorities that play a role similar to validators or miners in other blockchain systems.

To achieve low latency, Sui separates transaction processing into two phases: 1) acquiring distributed locks at the granularity of objects and 2) executing the transaction and committing its effects.

Phase one is performed through a reliable broadcast primitive that requires no global synchronization within the authority, allowing for scalability through sharding. For transactions involving shared objects, sequencing is required using a consensus protocol.

Sui aggressively reduces bottlenecks and points of synchronization requiring global locks within authorities, allowing for quasi-linear scaling with increased resources. The platform also allows for parallel execution of smart contracts, with Move virtual machines on multiple cores or physical machines reading versioned input objects, executing, and writing resulting objects from and to stores.

The consistency requirements on stores for objects and transactions are very loose, allowing scalable distributed key-value stores to be used internally by each authority. Sui uses a Byzantine consistent broadcast protocol between authorities to ensure the safety of common operations on assets, ensuring lower latency and better scalability as compared to Byzantine agreement.

Overall, Sui Blockchain's design choices and optimizations make it a promising platform for applications that require fast and efficient processing of transactions. Its ability to 1) distinguish between different kinds of object ownership, 2) acquiring distributed locks at the granularity of objects, and 3) parallel execution of smart contracts are key features that set it apart from other blockchain platforms. With Sui Blockchain, the future of fast and efficient transaction processing is here.


- Twitter: https://twitter.com/BlockEdenHQ
- Discord: https://discord.gg/4Yfvs2HWey
- Source Link: https://blockeden.xyz/blog/2023/04/11/what-s-unique-from-sui/
