# Intro to Sui Move

Welcome to the tutorial! The Sui Move is a variant of the Move programming language.

Move is a programming language that was developed by Facebook specifically for use on the Libra blockchain. It is a relatively new language that was first introduced in 2019, so there is still a lot to learn about it. Here are some key points to help build intuition about Move:

1. Move is designed for safety: One of the main goals of Move is to ensure the safety of transactions on the Libra blockchain. Move accomplishes this through a combination of features like static typing, resource ownership, and automated checks for correct usage.
2. Move is a high-level language: Despite being designed for safety, Move is a high-level programming language that is easy to use and read. It features a syntax similar to Rust or Swift, with support for modules, functions, and types.
3. Move is focused on smart contracts: Move is primarily designed for developing smart contracts on the Libra blockchain. This means that it includes features like a native asset management system, support for custom data structures, and a built-in interpreter for running contracts.
4. Move has a unique ownership model: Move uses a unique ownership model that allows developers to track the ownership and movement of resources within their contracts. This model helps prevent errors like double-spending and ensures that resources are always used correctly.
5. Move is still evolving: Because Move is a relatively new language, it is still evolving rapidly. Facebook and the broader Move community are actively working to improve the language, add new features, and make it easier to use.

All code snippets in this guide assume you're utilizing Sui Move, which can be installed using the following command:

```bash
$ cargo install --locked --git https://github.com/MystenLabs/sui.git --branch "main" sui
```

Remember that the branch is set to main. If you're working with our devnet, follow the provided instructions to install Sui instead.
