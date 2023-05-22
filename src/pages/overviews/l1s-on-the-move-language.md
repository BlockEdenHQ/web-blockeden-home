# L1s with the Move Language

<head>
  <meta name="twitter:site" content="@BlockEdenHQ"/>
  <meta name="twitter:title" content="L1s with the Move Language"/>

  <meta name="twitter:description" content="In this extensive exploration, we delve into the world of blockchain technology and the role of Move language within it. From its fundamental features and flourishing ecosystem to the analysis of its major representative projects, the narrative takes a comprehensive look at the core of the blockchain innovation. "/>
  <meta name="og:description" content="In this extensive exploration, we delve into the world of blockchain technology and the role of Move language within it. From its fundamental features and flourishing ecosystem to the analysis of its major representative projects, the narrative takes a comprehensive look at the core of the blockchain innovation. "/>
  <meta
    property="og:image"
    content="https://tp-misc.b-cdn.net/blockeden/l1s-with-the-move-language.png"
  />
  <meta
    name="twitter:image"
    content="https://tp-misc.b-cdn.net/blockeden/l1s-with-the-move-language.png"
  />
</head>

In this extensive exploration, we delve into the world of blockchain technology and the role of Move language within it. From its fundamental features and flourishing ecosystem to the analysis of its major representative projects, the narrative takes a comprehensive look at the core of the blockchain innovation.

![L1s with the Move Language](https://tp-misc.b-cdn.net/blockeden/l1s-with-the-move-language.png "L1s with the Move Language")

## Move Smart Contract Language

Move language, a smart contract programming language inspired by Rust, has been making waves in the world of blockchain technology. Designed with a strong emphasis on security and privacy, Move leverages its compiler and runtime checks to prevent malicious manipulations of resources at the language level. This approach sets it apart from contracts written in Solidity, as Move encourages developers to pay more attention to property rights. The source code written in Move, known as Move IR (Move Intermediate Representation), is converted into bytecode by a compiler and executed on a virtual machine named MVM.

The unique features of Move language include prioritizing resources in such a way that the compiler not only checks the syntax, but also scrutinizes the logic of resource duplication, reuse, and destruction for possible flaws. It innovatively splits transaction scripts and modules to differentiate transaction logic from smart contracts, thereby reducing the risk of hacking and lowering audit costs. A key feature of Move is its easy adaptability for Rust developers, allowing for the typing of data (assets) and setting their scarcity. Official sources claim that the development speed using Move can reach 3 to 5 times that of Solidity.

Since the advent of Libra, numerous L1 public chains, including Aptos, Sui, Linera, 0Lnetwork, and more have opted for Move language. This adoption testifies to the growing influence and reach of Move within the blockchain ecosystem.

## Aptos

Aptos, an L1 public chain developed by Aptos Labs (Matonee Inc.), is a rising force within the blockchain industry. Spearheaded by CEO Mo Shaikh and CTO Avery Ching, both former contributors to the development of Diem and its ecosystem, Aptos stands as a testament to their experience and technological prowess.

Debuting publicly in February 2022, Aptos has made significant strides thanks to the knowledge and experience its team gathered during Diem's three-year-long development. The chain's technical layers have been designed for rapid iteration and scalability, aiming to cater to billions of users worldwide. Consequently, Aptos has garnered substantial attention from the capital market, raising an impressive $350 million through two rounds of financing in March and July 2022, with participation from prominent investors such as a16z, FTX Ventures, Coinbase Ventures, and Multicoin Capital.

Written in an enhanced version of Move language, Aptos enables granular control of resources, effectively stabilizing the cost of accessing and modifying data. Through creating tables in storage, it allows for the handling of large datasets per account, on-chain sharing, and independent account systems.

#### Interactive Security

Aptos mitigates risks inherent to on-chain interactions with a host of protective mechanisms:

1. **Transaction Feasibility Protection**: This restricts the executability of all transactions, safeguarding the signatory from inadvertently granting full operation permissions.

2. **Move-based Key Management**: This system rotates the user's private keys and can be executed by multiple custodians or third parties. It also deploys key management functions on-chain.

3. **Signature Content Transparency**: Prior to signing, transaction outcomes are presented in a readable format for user verification. Aptos also incorporates previous attack patterns and malicious contract information to prevent phishing incidents.

4. **Introduction of Light Client Protocol**: To establish trust between light clients and servers, Aptos enables wallet and light client validation of data submitted by third-party servers, implemented on top of the API provider's TLS/SSL certificates.

#### High Throughput, Low Latency

Aptos boasts parallel, batch-optimized, pipeline-executed on-chain transactions. The simultaneous processing and broadcasting of transactions allow for high throughput. Aptos employs a parallel execution engine named Block-STM for smart contract execution. It manages conflicts in the ordered sequence of transactions, enables efficient transaction processing parallelism in a given order, and validates through optimistic verification after execution. This technique, which doesn't require prior knowledge of the locations of data read and write operations, enables efficient handling of complex transactions, thereby improving transaction processing efficiency, reducing costs, and providing users with a low-latency transaction experience.

Moreover, Aptos employs DiemBFT v4 as its consensus algorithm, which guarantees validity (asynchronous safety) even under partially synchronous network conditions.

Aptos's ecosystem hosts a wealth of applications, a rapid expansion fueled by a large influx of developers. This surge is attributed to the developer-friendly nature of Move language, the oversupply of developers on the Solana chain due to the bear market, and the multi-chain nature of many Solana developers. The growth trajectory of Aptos mirrors that of Solana, with opportunities for rapid expansion due to substantial capital involvement and a high chance for monopolization due to its anti-forking stance.

Aptos's ecosystem hosts a variety of representative applications, including Martian (a leading hot wallet), Fewcha (a wallet with mobile development in progress), Aptos Name (a domain protocol allowing users to send transactions with owned domains), VIAL (a liquidity protocol planning to merge with Solana's Switchboard), Zaptos (a liquidity pledging and DeFi protocol), Topaz (a core NFT marketplace), Mobius (a lending protocol), DAOStarter (a multi-chain corresponding IDO platform supporting Aptos), and OmniBTC (a multi-chain financial platform providing swap and lending services and aiming to achieve cross-chain via LayerZero technology).

This thriving ecosystem is drawing developers from not just Solana but also the Polkadot environment, showing the increasingly expansive and integrative nature of the Aptos public chain.

## Sui

Sui is a public blockchain developed by Mysten Lab. Its co-founders, many of whom hail from Meta, have designed Sui, not based on Diem but inspired by multiple academic papers, making it an entirely original creation.

Compared to other public chains, Sui boasts superior scalability. As the number of nodes increases, its scalability linearly improves, also facilitating the parallel processing of multiple transactions. Because individual transactions can be examined, Sui also supports real-time settlements. Furthermore, breakthroughs in throughput and asset definition provide a robust foundation for introducing gaming and social protocols into Sui.

#### Interactive Security
Sui is based on Move language, which can effectively prevent the theft of user assets, re-entry attacks, and phishing incidents involving tokens with embedded smart contracts.

#### High Throughput, Low Latency
Similar to Aptos, Sui also supports parallel execution of transactions, including simple fund transfers and more complex transactions. Based on the ownership model of the Move language, Sui can clearly discern the dependencies between various transactions, thereby selecting mutually independent transactions for parallel execution. Concurrently, Sui employs a mechanism for independently verifying transactions, allowing for transaction completion even before a block is confirmed.

#### Infinite Expansion Capability
With the increase in the total processing capacity of nodes, Sui's network capacity can grow proportionately, resulting in a linear increase in throughput. This trait allows Sui to maintain the gas fee at the lowest level even in scenarios with massive network traffic, like during the DeFi boom. In March 2022, an unoptimized Sui single-task node running on an 8-core M1 MacBook Pro achieved a token transfer speed of 120,000 TPS. In Sui's mechanism design, throughput is proportional to the core, thus, in this case, the throughput per core would be 25,000 TPS.

#### New Token Paradigm
Sui possesses horizontally scalable on-chain storage, therefore, it can directly define assets with complex properties. This contributes to enhancing the transparency and composability of applications, making it easier to update and modify assets within applications, bringing new possibilities for asset-centric NFTs.

The current Sui ecosystem hosts relatively few applications, so much so that it's hard to describe it in terms of competitive landscape. This, however, provides enormous opportunities for developers, where each new player has the potential to become a market leader.

We've now understood the basics and current status of two popular public chains based on the Move language, Aptos and Sui. In comparison to mainstream public chains in terms of performance and ecosystem development, both chains have promising futures.

![](https://tp-misc.b-cdn.net/blockeden/Layer-1-Ecosystem-Map-1.png)

Due to the existence of the blockchain trilemma, no blockchain can achieve perfection, presenting opportunities for the development of emerging chains. With the high security and scalability brought by the Move language and the empowerment of venture capital, Aptos and Sui have the potential to become major players in the Layer 1 (L1) blockchain field. However, as evident from the table, even the currently popular L1 blockchains have made differentiating trade-offs to address the trilemma, yet the position of Ethereum (prior to its upgrade) remains largely unshaken.

|                  | Ethereum | Solana     | Aptos       | Sui         |
| ---------------- | -------- | ---------- | ----------- | ----------- |
| Throughput       | 15 tps   | 65,000 tps | 120,000 tps | 370,000 tps |
| Time to Finality | 15 mins  | 12.8 mins  | < 1s        | < 1s        |
| Consensus        | PoS      | PoH        | DAG+BFT     | DiemBFT v4  |
| Number of Nodes  | 10,000+  | 2000+      | 100+        | 100+        |
| TVL              | 26.81b   | 264.97m    | 48.89m      | 23.78m      |

While it's true that, in the context of the current Web3 discourse, Move has certain advantages over Solidity, it doesn't necessarily mean that blockchains built with Move are better than those built with Solidity. Nor does it imply that Move-based blockchains will replace Solidity-based ones as the primary players in the market. Currently, EVM chains boast a robust ecosystem and a vibrant user community, generating significant network effects. The key direction for the development of Layer 1 (L1) protocols will likely continue to be a multi-chain ecosystem centered around Ethereum, fostering mutual benefit and coexistence.



