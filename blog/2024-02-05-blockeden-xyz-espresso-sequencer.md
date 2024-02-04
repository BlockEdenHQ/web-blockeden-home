---
title: "Our view towards Espresso shared sequencer"
authors: [dora]
tags: [product]
description: "Ethereum L2 rollups are centralized. Espresso is trying to decentralize it, and BlockEden.xyz shares the excitement about this vision."
image: https://tp-misc.b-cdn.net/blockeden/64aeab361b9e2f29031dfabf_bronzemachine-inside-bw.png
---

## **Why Espresso sequencer?**

Ethereum L2 rollups are centralized. Take [Optimism Architecture](https://blockeden.xyz/blog/2023/04/15/optimism-architecture/) for example. The globally-single sequencer receives L2 transactions from L2 users, creates L2 blocks accordingly, and then submits to [data availability provider](https://tianpan.co/optimism-bedrock-specs/glossary.html#data-availability-provider) (via a [batcher](https://tianpan.co/optimism-bedrock-specs/glossary.html#batcher)). It also submits [output roots](https://tianpan.co/optimism-bedrock-specs/glossary.html#l2-output-root) to L1.

Espresso is trying to decentralize such sequencer and then achieve credible neutrality, enhance interoperability, mitigate the negative effects of MEV, and encourage long-term economic incentive alignment with L1 validators.

## **How does it work with rollups?**

Before the shared sequencer:

![](https://i.imgur.com/ls8rBQq.png)

After introducing the shared sequencer:

![](https://i.imgur.com/2Fcii43.png)


## **What is our motivation to join the Espresso Sequencer as an operator?**

1. Shared vision for solving the composability problem between rollups on Ethereum.
2. A passion for Yale alums's project.
3. Our partnership with token holders willing to stake with us and Espresso Sequencer.
4. Our business model ($45M staked and 21 chains' APIs supported) is built on the decentralization of L1s and L2s.
5. Our expertise with high availability infrastructure fits into the need.
6. We contribute to the ecosystem. e.g., Sui indexer, Aptos indexer, explorer, docs, community events, etc.

## **What differentiates us from our competitors?**

1. We use Ssilicon VValley standard techniques to run and monitor our infrastructure.
2. We started with Aptos with a 99.99% uptime and expanded to include Sui, Solana, and 12 EVM blockchains. Now, there are $45M staked and 21 chains' APIs supported.
3. We host community events with 10x.pub and offer educational sessions around blockchain system design.
4. We make ecosystem contributions and build SaaS or mobile apps to improve the user experience.

## **What slashing protection(s) do we offer?**

1. Uptime monitoring transparently with 7/24 hours of on-call rotation among our team.
2. Use on-call playbook and failover techniques to handle failures.
3. Use hot standby if necessary.
4. Committed to staying engaged with the community and upgrading service timely.

## **How do we secure our infrastructure?**

We proactively use AWS key management service, HTTPs, MFA with YubiKey for cloud accounts, Cloudflare for DDoS, rate limiter, authorization and access control, zero trust architecture, security by design when building our infra, etc. Our team comprises IoTeX founding members and security engineers from Uber and Google.
