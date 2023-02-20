---
title: BlockEden.xyz Is Marching into IoT Territory
authors: [jack]
tags: [product, iotex, json-rpc]
abstract: BlockEden.xyz supports IoTeX Mainnet JSON-RPC.
image: https://tp-misc.b-cdn.net/blockeden/iotex-and-blockeden-xyz.png
---

Recently Iotex and BlockEden.xyz [partnered](https://blockeden.xyz/blog/2023/01/27/blockeden-xyz-teams-up-with-iotex-to-simplify-decentralized-iot-application-development/) together to bring the revolutionary experience to IoT developers. We committed to this mission seriously, and today we want to share 2 exciting updates with ecosystem.

![BlockEden.xyz teams up with IoTeX to simplify decentralized IoT Application](https://tp-misc.b-cdn.net/blockeden/iotex-and-blockeden-xyz.png "BlockEden.xyz teams up with IoTeX to simplify decentralized IoT Application")

## IoTeX Delegate

We believe staking is one of most important things for blockchain, because it helps to ensure the integrity of the network by incentivizing participants to act in the best interest of the network.

One of the key benefits of staking is that it makes it more difficult and expensive for bad actors to attack the network. If a participant attempts to validate fraudulent transactions, they risk losing their staked cryptocurrency, as well as any rewards they have earned. This serves as a powerful deterrent to malicious behavior, as it aligns the incentives of participants with the overall health and security of the network.

Now BlockEden.xyz joined IoTeX delegate program, and **we have our running delegate**! [https://stake.iotex.io/delegate/blockedenxyz](https://stake.iotex.io/delegate/blockedenxyz) is our delegate profile. This is our reward plan:

- Hermes will distribute **88%** of the rewards to you automatically. Payout frequency is every day at midnight (UTC time).
- We take 12% to cover the server and development costs for our collaboration with IoTeX.

**Please vote for BlockEden.xyz today!** Your support is critical for us to continuously build in the IoTeX ecosystem!

![BlockEden.xyz joined IoTeX delegate program](iotex-delegate.png "BlockEden.xyz joined IoTeX delegate program")

## RPC Serivce

BlockEden.xyz's mission is to empower dApps, and we decided to bring this to IoT territory. In additon to the delegate program, we also suported JSON-RPC service for IoTeX. Therefore, if you're a dApp developer on IoTeX blockchain, you no longer need to setup your own IoTeX full node, and just [sign up](https://blockeden.xyz/dash/sign-up/) with us to start interacting with IoTeX blockchain **from free**.

![BlockEden.xyz supports IoTeX Mainnet JSON-RPC](iotex-rpc.png "BlockEden.xyz supports IoTeX Mainnet JSON-RPC")

### Why JSON-RPC first?

IoTeX blockchain provides 2 types of RPC endpoints: **gRPC** and **JSON-RPC**, and we choose to support **JSON-RPC** first because:
 - This RPC type could easily integrate with MetaMask for wallet service.
 - It's the RPC type of Ethereum blockchain and its L2 blockchains. It will be easier for an Ethereum developer to migrate to IoTeX. 


### gRPC vs JSON-RPC

There are some other deep thinking about **gRPC** and **JSON-RPC**. Please let us know your thoughts about whether you want **gRPC**.

| Criteria            | gRPC                                                        | JSON-RPC                                                     |
| ------------------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| Underlying protocol | HTTP/2                                                      | Can be used with various protocols, including HTTP and TCP   |
| Data serialization  | Protocol Buffers (binary format)                            | JSON (text format)                                           |
| Performance         | High performance with efficient multiplexing                | Lower performance compared to gRPC                           |
| Language support    | Wide range of languages, including Java, Python, and C++    | Wide range of languages, including Java, Python, and C++     |
| Streaming support   | Supports server-side and bidirectional streaming            | Supports only one-way streaming                              |
| Setup complexity    | More complex setup, especially with non-standard protocols  | Simple setup                                                 |
| Human-readability   | Less human-readable due to use of binary format             | More human-readable due to use of text format                |
| Learning curve      | Higher learning curve due to different programming paradigm | Lower learning curve due to simpler protocol and programming |
| Flexibility         | Limited flexibility in terms of transport protocols         | Can be used with various transport protocols                 |
| Service discovery   | Built-in support for service discovery and load balancing   | No built-in support for service discovery or load balancing  |

## What is IoTeX?

IoTeX is an open-source platform founded in 2017 with a vision of blockchain for the Internet of Trusted Things. The platform enables various machines and people to interact securely and trustingly with each other. In doing so, IoTeX ensures that everyday people and businesses own their devices and the data/value they generate from them. By connecting physical and digital worlds, IoTeX aims to democratize access to machine-backed DApps, assets, and services while delivering value to users and fueling the new machine economy.

## What is BlockEden.xyz?

BlockEden.xyz is a service infra for the developer’s next billion web3 customers. It strives to provide developers with all they need to create powerful applications quickly and scale faster. We have operated Aptos public full node since day 1 of its mainnet launch. We serve managed RPC services to 400+ clients (Scalp Empire NFT Analytics, HoustonSwap, Solaland NFT Toolkit, Fewcha Wallet, etc.) in the ecosystem with zero downtime. We are on our way to becoming a validator for Aptos, Sui, Shentu, and EthStorage.

**How to stay in the loop?**

For IoTeX, go to

- Twitter: https://twitter.com/iotex_io
- Discord: https://iotex.io/discord

For BlockEden.xyz, go to

- Twitter: https://twitter.com/BlockEdenHQ

- Discord: https://discord.gg/4Yfvs2HWey

Source Link: https://blockeden.xyz/blog/2023/02/20/iotex-validator-and-json-rpc/
