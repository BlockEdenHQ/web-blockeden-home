## What's unique about Sui blockchain?

One unique feature of the Sui blockchain is its ability to distinguish between different kinds of ownership, which is not found in other blockchain platforms. In other platforms, every contract and object is mutably shared, but in Sui, **an object can be owned by an address and can be mutably owned, immutably owned, or mutably shared**. This feature is leveraged for parallel execution of smart contracts and asset management.

Additionally, Sui uses a decentralized permissionless smart contract platform biased towards **low-latency** management of assets, and it uses the Move programming language to define assets as objects that may be owned by an address. Sui is maintained by a permissionless set of authorities that play a role similar to validators or miners in other blockchain systems, and it uses a Byzantine consistent broadcast protocol between authorities to ensure the safety of common operations on assets, ensuring lower latency and better scalability as compared to Byzantine agreement.

## Low latency

The Sui blockchain achieves low latency through several design choices and optimizations. One key feature is the separation of transaction processing into two phases: (1) acquiring distributed locks at the granularity of objects, and (2) executing the transaction and committing its effects.

Phase (1) is performed through a reliable broadcast primitive that requires no global synchronization within the authority, allowing for scalability through sharding. For transactions involving shared objects, sequencing is required using a consensus protocol, but recent advances in high-throughput consensus protocols demonstrate that sequencing is not the bottleneck in state machine replication.

Additionally, Sui aggressively reduces bottlenecks and points of synchronization requiring global locks within authorities, allowing for quasi-linear scaling with increased resources. The platform also allows for **parallel execution** of smart contracts, with Move virtual machines on multiple cores or physical machines reading versioned input objects, executing, and writing resulting objects from and to stores. The consistency requirements on stores for objects and transactions are very loose, allowing scalable distributed key-value stores to be used internally by each authority.

Furthermore, Sui uses a permissionless set of authorities that play a role similar to validators or miners in other blockchain systems, and it uses a Byzantine consistent broadcast protocol between authorities to ensure the safety of common operations on assets, ensuring lower latency and better scalability as compared to Byzantine agreement.

Overall, these design choices and optimizations allow Sui to achieve low latency in transaction processing and smart contract execution, making it a promising platform for applications that require fast and efficient processing of transactions.
