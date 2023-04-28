---
title: "297k TPS! Sui Network's Impressive Performance Update: A Look at Throughput and Time to Finality"
authors: [dora]
tags: [engineering, sui]
image: https://tp-misc.b-cdn.net/blockeden/sui-blockeden-xyz.png
---

The Sui Foundation recently conducted a series of tests to determine the current peak throughput and time to finality for various workloads on the Sui network. A year after its announcement, the Sui network has made significant strides in performance, becoming a promising decentralized protocol for the future.

## Key Findings

* The Sui network, consisting of 100 globally distributed validators, achieved peak throughput ranging from 10,871 TPS to 297,000 TPS on different workloads.
* Sui's time to finality is approximately 480 milliseconds, providing rapid transaction confirmations.

## Performance Evaluation

To measure the performance of the Sui protocol, the foundation used a globally-distributed setup that closely mirrors the mainnet in terms of hardware configurations, number of validators, geographic distribution, and voting power distribution. The tests were conducted using 100 validators, 24-core AMD hardware, 256GB memory, and 25Gbps NIC.

## Measuring Throughput with Programmable Transaction Blocks (PTB)

Sui's core developer primitive, PTB, allows for a complex and composable sequence of transactions. Chained transactions in a PTB can execute and fail atomically, providing increased efficiency and expressivity. Each PTB can support up to 1024 transactions, enabling Sui to handle large workloads and reduce transaction fees for users.

## The Challenge of Measuring Throughput

Transactions Per Second (TPS) is a commonly used metric to measure a blockchain protocol's capacity. However, measuring the number of PTBs executed per second doesn't accurately reflect Sui's computational capacity. As the average PTB size increases, Sui's throughput increases, but the PTB/second metric would remain unchanged. Therefore, the foundation has chosen to measure the number of individual transactions within a PTB executed per second as a more consistent and practical metric.

## Time to Finality
Finality in blockchain refers to the point where a transaction is considered irrevocable and cannot be modified or reverted. For this performance update, the Time to Finality measures the point in the transaction lifecycle where both the transaction itself and its effects are final and can be used in subsequent transactions. Sui's Time to Finality is approximately 480 milliseconds, with a 95th percentile latency of around 550 milliseconds.

## Future Optimization and Scalability

The Sui protocol has made significant progress in its performance, but there are still many opportunities for optimization and scalability. In the near future, the Sui Foundation plans to refine the following aspects:

* Scalability and coverage of benchmark tooling
* Horizontal scalability to support intra-validator scaling across multiple machines
* Resilience to under-performance of individual validators

As the Sui protocol evolves and its performance improves, the Sui Foundation will continue to share updates with the community for feedback and consideration. With its impressive throughput and time to finality, the Sui network is poised to make a significant impact in the world of decentralized systems.



