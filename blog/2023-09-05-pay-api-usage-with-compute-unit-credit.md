---
title: "Introducing Pay-As-You-Go Pricing and Changes in Pricing Plans"
authors: [dora]
tags: [product]
image: https://tp-misc.b-cdn.net/blockeden/introducing-pay-as-you-go-pricing-and-plan-changes.png
description: Learn about BlockEden.xyz's updated pricing plans and the introduction of our Pay-As-You-Go option with Compute Unit Credit (CUC). We're committed to providing cost-effective and flexible solutions tailored to DeFi, wallet, and analytics developers. Discover our expanded API offerings, high availability, robust security, and more. Join our community of over 4000 web3 innovators today.
---

# Introducing Pay-As-You-Go Pricing and Changes in Pricing Plans

> **💵 TL;DR**
>
> 1. We plan to increase the rate limit by 5x.
> 2. For improved granularity, 1 CU has been updated to 100 CU.
> 3. Announcing our new "Basic" plan priced at $19.99.
> 4. CUs are now denominated in CUC and are refreshed daily. Monitor your balance at [blockeden.xyz/dash/account](blockeden.xyz/dash/account).
> 5. With our updated plans, extra CUCs beyond those plans allow you to access extra API calls using a pay-as-you-go system every day.



BlockEden.xyz is committed to providing cost-effective and efficient solutions to DeFi, wallet, and analytics developers. Our customer feedback revealed a few key insights:

1. A requirement for an intermediate tier between the Free and Pro plans.
2. A desire for a more flexible 'pay-as-you-go' option.
3. An opportunity for us to accommodate more requests through a more efficient infrastructure.

Based on these insights, we're excited to announce the introduction of a pay-as-you-go feature using Compute Unit Credit (CUC), and to share details about modifications to our pricing plans.

## **Understanding Compute Units and Compute Unit Credit**

A **Compute Unit** (CU) serves as a standard measurement that quantifies the computational expense incurred during an API call. It's akin to how AWS charges for compute usage. The computational cost varies depending on the intensity of the queries – some are lightweight and fast (e.g., eth_blockNumber) while others can be more demanding (e.g., large eth_getLogs queries). The cost in CU for each request across different products can be found in our[ API marketplace](https://blockeden.xyz/api-marketplace).

**Compute Unit Credits** (CUC) are like credit card rewards on our platform to serve as royalty points. Those points are identical to compute units. Developers could spend CUC on our platform to get extra quotas for API calls.

## **Implementing Pay-As-You-Go with CUC**

We'll set up a reward account for each customer. Customers can load this account with CUC, which will then be consumed as per their API usage.

- For the Free tier, we ensure a minimum balance of 0.3 CUC at the start of each month.
- For the paid tiers (Basic, Pro, Enterprise 50), we will credit the account on each subscription or renewal.

We do not allow customer to withdraw CUC for now.

The credits on BlockEden.xyz will be reconciled daily and also each time a withdrawal or deposit is made. **BlockEden.xyz maintains the rights to the Compute Units (CU) on our platform, along with the authority to clarify the application of the API and the usage of credits**.

## **Pricing Plan Modifications**

Below are the changes to our pricing plans. The original pricing structure was as follows:

|                    | **Free**    | **Pro**   | **Enterprise 50** | **Enterprise 500** |
| ------------------ | ----------- | --------- | ----------------- | ------------------ |
| Price              | 0           | 49.99     | 200               | 1999               |
| CU / day           | 0.1 Million | 1 Million | 4.32 Million      | 50 Million         |
| Price / Million CU | 0           | 1.66      | 1.54              | 1.33               |
| Ratelimit req/s    | 1           | 10        | 50                | 500                |
| Project allowed    | 15          | 30        | 100               | 300                |

In response to customer feedback, we've made the following adjustments:

1. The "Enterprise 500" tier has been discontinued, and a "Basic" tier has been introduced to offer indie developers more flexibility.
2. Rate limits have been increased five-fold for almost all plans.

Here is our updated pricing structure:

| **Plan**           | **Free**   | **Basic**  | **Pro**     | **Enterprise 50** |
| ------------------ | ---------- | ---------- | ----------- | ----------------- |
| Price              | 0          | 19.99      | 49.99       | 199.99            |
| CU / day           | 10 Million | 40 Million | 100 Million | 513.33 Million    |
| Price / Million CU | 0          | 0.0167     | 0.0167      | 0.0130            |
| Ratelimit CU/s     | 1,000      | 10,000     | 10,000      | 500,000           |
| Ratelimit req/s    | 5          | 50         | 50          | 250               |
| Project allowed    | 15         | 30         | 100         | 300               |

## **Why Choose BlockEden.xyz**

BlockEden.xyz is a industry leading marketplace in Move, Rust, and EVM Blockchain Web3 APIs to  developers. Founded in 2022, we have secured 45 million US dollar staking assets and serving 18 blockchains to 3000+ customers, making us a trusted choice in the web3 service middleware sector.

> At *BlockEden.xyz*, we simplify blockchain data access and dev experience for web3 businesses, helping them save time and boost productivity with just a few clicks.

How is BlockEden.xyz different from other API vendors?

- We are the infura for move (aptos, sui) developers.
- Permissionless access to decentralized marketplace with 20 APIs via crypto tokens.
- Exceptional 24/7 customer support.

In conclusion, BlockEden.xyz's revised pricing plans and the introduction of the pay-as-you-go option, underlined by our Compute Unit Credit (CUC) system, embodies our unwavering dedication to the evolving needs of our customers. We've always stood by the philosophy of "start with customers," believing that understanding and addressing their challenges is the foundation for our success. 

------

- Twitter:[ https://twitter.com/BlockEdenHQ](https://twitter.com/BlockEdenHQ)
- Discord:[ https://discord.gg/4Yfvs2HWey](https://discord.gg/4Yfvs2HWey)
- Source Link: https://blockeden.xyz/blog/2023/08/13/pay-api-usage-with-compute-unit-credit/



