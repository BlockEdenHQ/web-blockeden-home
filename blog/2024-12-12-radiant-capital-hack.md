---
title: "The Radiant Capital Hack: How North Korean Hackers Used a Single PDF to Steal Hundreds of Millions"
tags: ["Cybersecurity", "DeFi", "North Korea", "Hacking", "Crypto"]
keywords: ["Radiant Capital", "cyber attack", "North Korean hackers", "DeFi security", "social engineering"]
description: "In a sophisticated cyber attack, North Korean hackers exploited social engineering tactics to steal $50 million from Radiant Capital. This incident highlights critical vulnerabilities in crypto security and the need for enhanced protective measures."
image: https://tp-misc.b-cdn.net/blockeden/2024-12-12-radiant-capital-hack.webp
---

# The Radiant Capital Hack: How North Korean Hackers Used a Single PDF to Steal Hundreds of Millions

In one of the most sophisticated cyber attacks of 2023, Radiant Capital, a decentralized cross-chain lending protocol built on LayerZero, lost approximately $50 million to hackers. The complexity and precision of this attack revealed the advanced capabilities of state-sponsored North Korean hackers, pushing the boundaries of what many thought possible in crypto security breaches.

![The Radiant Capital Hack: How North Korean Hackers Used a Single PDF to Steal Hundreds of Millions](https://tp-misc.b-cdn.net/blockeden/2024-12-12-radiant-capital-hack.webp "The Radiant Capital Hack: How North Korean Hackers Used a Single PDF to Steal Hundreds of Millions")

## The Perfect Social Engineering Attack

On September 11, 2023, a Radiant Capital developer received what seemed like an innocent Telegram message. The sender posed as a former contractor, claiming they had switched careers to smart contract auditing and wanted feedback on a project report. This type of request is commonplace in the remote-work culture of crypto development, making it particularly effective as a social engineering tactic.

The attackers went the extra mile by creating a fake website that closely mimicked the supposed contractor's legitimate domain, adding another layer of authenticity to their deception.

## The Trojan Horse

When the developer downloaded and unzipped the file, it appeared to be a standard PDF document. However, the file was actually a malicious executable called INLETDRIFT disguised with a PDF icon. Once opened, it silently installed a backdoor on the macOS system and established communication with the attackers' command server (atokyonews[.]com).

The situation worsened when the infected developer, seeking feedback, shared the malicious file with other team members, inadvertently spreading the malware within the organization.

## The Sophisticated Man-in-the-Middle Attack

With the malware in place, the hackers executed a precisely targeted "bait-and-switch" attack. They intercepted transaction data when team members were operating their Gnosis Safe multi-signature wallet. While the transaction appeared normal on the web interface, the malware replaced the transaction content when it reached the Ledger hardware wallet for signing.

Due to the blind signing mechanism used in Safe multi-sig transactions, team members couldn't detect that they were actually signing a transferOwnership() function call, which handed control of the lending pools to the attackers. This allowed the hackers to drain user funds that had been authorized to the protocol's contracts.

## The Swift Cleanup

Following the theft, the attackers demonstrated remarkable operational security. Within just three minutes, they removed all traces of the backdoor and browser extensions, effectively covering their tracks.

## Key Lessons for the Industry

1. **Never Trust File Downloads**: Teams should standardize on online document tools like Google Docs or Notion instead of downloading files. For example, OneKey's recruitment process only accepts Google Docs links, explicitly refusing to open any other files or links.

2. **Frontend Security is Critical**: The incident highlights how easily attackers can spoof transaction information on the frontend, making users unknowingly sign malicious transactions.

3. **Blind Signing Risks**: Hardware wallets often display oversimplified transaction summaries, making it difficult to verify the true nature of complex smart contract interactions.

4. **DeFi Protocol Safety**: Projects handling large amounts of capital should implement timelock mechanisms and robust governance processes. This creates a buffer period for detecting and responding to suspicious activities before funds can be moved.

The Radiant Capital hack serves as a sobering reminder that even with hardware wallets, transaction simulation tools, and industry best practices, sophisticated attackers can still find ways to compromise security. It underscores the need for constant vigilance and evolution in crypto security measures.

As the industry matures, we must learn from these incidents to build more robust security frameworks that can withstand increasingly sophisticated attack vectors. The future of DeFi depends on it.
