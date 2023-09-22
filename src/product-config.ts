function shuffle(ar: any, seed = new Date().getDate()) {
  const random = (min: number, max: number) => {
    const x = Math.sin(seed++) * 10000;
    return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min;
  };

  for (let i = ar.length - 1; i > 0; i--) {
    const j = random(0, i);
    [ar[i], ar[j]] = [ar[j], ar[i]];
  }

  return ar;
}

const descs = [
  {
    id: "sui",
    desc: "Sui is an emerging blockchain platform focused on scalability and user-friendliness. Ideal for businesses and developers looking to leverage modern blockchain technologies.",
    name: "Sui",
  },

  {
    id: "aptos",
    desc: "Aptos is a versatile blockchain designed for enterprise solutions, offering robust security features and high transaction throughput.",
    name: "Aptos",
  },

  {
    id: "aptos-indexer",
    desc: "Aptos Indexer complements the Aptos blockchain by providing advanced data indexing and search capabilities, enhancing data retrieval and analytics.",
    name: "Aptos Indexer",
  },

  {
    id: "openai-chatgpt",
    desc: "OpenAI ChatGPT is a conversational AI model developed by OpenAI.",
    name: "OpenAI ChatGPT",
  },

  {
    id: "model-serve",
    desc: "BlockEden.xyz serves open-source machine learning models.",
    name: "AI Model Serve",
  },

  {
    id: "ethereum",
    desc: "Ethereum is a decentralized, open-source blockchain that features smart contract functionality. It is the pioneering platform for building decentralized applications.",
    name: "Ethereum",
  },

  {
    id: "iotex",
    desc: "IoTeX is a decentralized platform focused on Internet of Things (IoT) applications, providing tools and infrastructure for IoT solution developers.",
    name: "IoTeX",
  },

  {
    id: "solana",
    desc: "Solana is a high-performance blockchain supporting builders around the world in creating crypto apps that scale.",
    name: "Solana",
  },

  {
    id: "polygon",
    desc: "Polygon, formerly known as Matic Network, is a multi-chain scaling solution for Ethereum. It aims to provide faster and cheaper transactions on the Ethereum blockchain.",
    name: "Polygon",
  },

  {
    id: "polygon_zkevm",
    desc: "Polygon zkEVM is an advanced layer-2 solution under Polygon, leveraging zk-Rollups to increase throughput and reduce costs on the Ethereum network.",
    name: "Polygon zkEVM",
  },

  {
    id: "filecoin",
    desc: "Filecoin is a decentralized storage network designed to store humanity's most important information. It leverages blockchain technology to ensure files are stored with integrity.",
    name: "Filecoin",
  },

  {
    id: "harmony",
    desc: "Harmony is a blockchain platform designed for high throughput and low latency, with a focus on cross-chain compatibility.",
    name: "Harmony",
  },

  {
    id: "binance-smart-chain",
    desc: "Binance Smart Chain (BSC) is a blockchain platform developed by Binance. It offers a parallel chain to Binance Chain, allowing users to build decentralized apps and use smart contracts.",
    name: "Binance Smart Chain",
  },

  {
    id: "arbitrum",
    desc: "Arbitrum is a layer-2 scaling solution for Ethereum, enhancing its scalability through off-chain computation while ensuring the security of the Ethereum mainnet.",
    name: "Arbitrum",
  },

  {
    id: "optimism",
    desc: "Optimism provides a layer-2 scaling solution for Ethereum using Optimistic Rollups. It aims to increase the throughput of the Ethereum network without compromising on security.",
    name: "Optimism",
  },

  {
    id: "gnosis",
    desc: "Gnosis is known for its decentralized prediction markets, but it also offers a range of tools and platforms related to Ethereum-based software development.",
    name: "Gnosis",
  },

  {
    id: "arbitrum-nova",
    desc: "Arbitrum Nova is an upgraded version of the Arbitrum layer-2 solution, offering enhanced features and improved scalability options for Ethereum developers.",
    name: "Arbitrum Nova",
  },

  {
    id: "near",
    desc: "NEAR is a decentralized development platform built on a unique sharded and developer-friendly blockchain. It focuses on usability without sacrificing security.",
    name: "NEAR",
  },

  {
    id: "ethstorage-galileo",
    desc: "EthStorage Galileo is a dedicated storage solution for Ethereum-based data, ensuring fast, secure, and decentralized storage capabilities.",
    name: "EthStorage Galileo",
  },

  {
    id: "stellar-futurenet-soroban",
    desc: "Stellar Futurenet Soroban is an advanced iteration of the Stellar network, optimized for high-speed transactions and cross-border financial solutions.",
    name: "Stellar Futurenet Soroban",
  },
];

const original = [
  {
    id: "sui",
    name: "Sui",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/sui.svg",

    urls: [
      {
        name: "mainnet",
        networkType: "JSON RPC + Indexer",
        templateUrl: "https://api.blockeden.xyz/sui/${accessKey}",
      },
      {
        name: "mainnet wss",
        networkType: "WebSocket",
        templateUrl: "wss://api.blockeden.xyz/sui/${accessKey}",
      },
      {
        name: "testnet",
        networkType: "JSON RPC",
        templateUrl: "https://api.blockeden.xyz/sui/testnet/${accessKey}",
      },
      {
        name: "testnet wss",
        networkType: "WebSocket",
        templateUrl: "wss://api.blockeden.xyz/sui/testnet/${accessKey}",
      },
      {
        name: "devnet",
        networkType: "JSON RPC",
        templateUrl: "https://api.blockeden.xyz/sui/devnet/${accessKey}",
      },
      {
        name: "devnet wss",
        networkType: "WebSocket",
        templateUrl: "wss://api.blockeden.xyz/sui/devnet/${accessKey}",
      },
    ],

    docUrl: "https://blockeden.xyz/docs/sui/sui-api-reference/",
    costs: "100 CUs / req",
  },
  {
    id: "aptos",
    name: "Aptos",
    networkType: "REST Chain API",
    avatarSrc: "assets/img/product/aptos-logo.png",

    urls: [
      {
        name: "mainnet",
        templateUrl: "https://api.blockeden.xyz/aptos/${accessKey}",
        testTemplateUrl: "https://api.blockeden.xyz/aptos/${accessKey}/v1",
        databaseUrl: "https://blockeden.xyz/analytics/browse/2/schema/public",
      },
      {
        name: "testnet",
        templateUrl: "https://api.blockeden.xyz/aptos/testnet/${accessKey}",
        testTemplateUrl:
          "https://api.blockeden.xyz/aptos/testnet/${accessKey}/v1",
      },
    ],

    docUrl: "https://blockeden.xyz/aptos-api-reference/get-ledger-info/",
    costs: "100 CUs / req",
  },
  {
    id: "aptos-indexer",
    name: "Aptos Indexer",
    networkType: "GraphQL API",
    avatarSrc: "assets/img/product/aptos-logo.png",

    urls: [
      {
        name: "mainnet",
        templateUrl:
          "https://api.blockeden.xyz/aptos/indexer/${accessKey}/v1/graphql",
        testTemplateUrl:
          "https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fapi.blockeden.xyz%2Faptos%2Findexer%2F${accessKey}%2Fv1%2Fgraphql",
        databaseUrl: "https://blockeden.xyz/analytics/browse/2/schema/public",
      },
    ],
    docUrl: "https://blockeden.xyz/docs/aptos/analytics-and-graphql/",
    costs: "500 CUs / req",
  },
  {
    id: "openai-chatgpt",
    name: "OpenAI ChatGPT",
    networkType: "HTTP API",
    avatarSrc: "assets/img/product/openai-logo.svg",

    urls: [
      {
        name: "api",
        templateUrl:
          "https://api.blockeden.xyz/openai/${accessKey}/v1/chat/completions",
        testTemplateUrl:
          "https://blockeden.xyz/chat/?endpoint=https%3A%2F%2Fapi.blockeden.xyz%2Fopenai%2F${accessKey}%2Fv1%2Fchat%2Fcompletions",
      },
    ],

    docUrl:
      "https://blockeden.xyz/blog/2023/07/19/unveiling-integration-openai-api-blockeden-api-marketplace/",
    costs: "10,000 CUs / req",
  },
  // {
  //   id: "model-serve",
  //   name: "AI Model Serve",
  //   networkType: "JSON RPC",
  //   avatarSrc: "/keys-assets/favicon.svg",

  //   urls: [
  //     {
  //       name: "api",
  //       templateUrl:
  //         "https://api.blockeden.xyz/model-serve/${accessKey}",
  //       testTemplateUrl:
  //         "",
  //     },
  //   ],

  //   docUrl:
  //     "",
  //   costs: "10,000 CUs / req",
  // },
  {
    id: "ethereum",
    name: "Ethereum",
    avatarSrc: "assets/img/product/ethereum-logo.png",
    networkType: "JSON RPC",

    urls: [
      {
        name: "mainnet",
        networkType: "JSON RPC",
        templateUrl: "https://api.blockeden.xyz/eth/${accessKey}",
        testTemplateUrl: "",
      },
      {
        name: "mainnet wss",
        networkType: "Websocket",
        templateUrl: "wss://api.blockeden.xyz/eth/${accessKey}",
        testTemplateUrl: "",
      },
      {
        name: "goerli",
        templateUrl: "https://api.blockeden.xyz/eth/goerli/${accessKey}",
        testTemplateUrl: "",
      },
      {
        name: "goerli wss",
        templateUrl: "wss://api.blockeden.xyz/eth/goerli/${accessKey}",
        testTemplateUrl: "",
      },
    ],

    costs: "200 CUs / req",
  },
  {
    id: "iotex",
    name: "IoTeX",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/iotex-logo.png",

    urls: [
      {
        name: "mainnet",
        templateUrl: "https://api.blockeden.xyz/iotex/${accessKey}",
        testTemplateUrl: "",
      },
    ],

    costs: "100 CUs / req",

    chainConfig: {
      chainId: 4689,
      chainName: "IoTeX Mainnet",
      symbol: "IOTX",
      rpcUrls: [
        "https://api.blockeden.xyz/iotex/8UuXzatAZYDBJC6YZTKD",
        "https://babel-api.mainnet.iotex.io",
      ],
      decimals: 18,
      blockExplorerUrls: ["https://iotexscan.io/"],
    },
  },

  {
    id: "solana",
    name: "Solana",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/solana-logo.png",
    urls: [
      {
        name: "mainnet",
        templateUrl: "https://api.blockeden.xyz/solana/${accessKey}",
        testTemplateUrl: "",
      },
    ],
    costs: "200 CUs / req",
  },

  {
    id: "polygon",
    name: "Polygon",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/polygon-logo.png",
    urls: [
      {
        name: "mainnet",
        templateUrl: "https://api.blockeden.xyz/polygon/${accessKey}",
        testTemplateUrl: "",
      },
    ],
    costs: "200 CUs / req",
    chainConfig: {
      chainId: 137,
      chainName: "Polygon Mainnet",
      symbol: "MATIC",
      rpcUrls: [
        "https://api.blockeden.xyz/polygon/8UuXzatAZYDBJC6YZTKD",
        "https://polygon-rpc.com",
      ],
      decimals: 18,
      blockExplorerUrls: ["https://polygonscan.com/"],
    },
  },

  {
    id: "polygon_zkevm",
    name: "Polygon zkEVM",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/polygon-logo.png",
    urls: [
      {
        name: "mainnet",
        templateUrl: "https://api.blockeden.xyz/polygon_zkevm/${accessKey}",
        testTemplateUrl: "",
      },
    ],
    costs: "200 CUs / req",
    chainConfig: {
      chainId: 1101,
      chainName: "Polygon zkEVM",
      symbol: "ETH",
      rpcUrls: [
        "https://api.blockeden.xyz/polygon_zkevm/8UuXzatAZYDBJC6YZTKD",
        "https://zkevm-rpc.com",
      ],
      decimals: 18,
      blockExplorerUrls: ["https://zkevm.polygonscan.com/"],
    },
  },

  {
    id: "filecoin",
    name: "Filecoin",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/filecoin-logo.png",
    urls: [
      {
        name: "mainnet",
        templateUrl: "https://api.blockeden.xyz/filecoin/${accessKey}",
        testTemplateUrl: "",
      },
    ],
    costs: "200 CUs / req",
  },
  {
    id: "harmony",
    name: "Harmony",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/harmony-logo.png",
    urls: [
      {
        name: "mainnet",
        templateUrl: "https://api.blockeden.xyz/harmony/${accessKey}",
        testTemplateUrl: "",
      },
    ],
    costs: "200 CUs / req",

    chainConfig: {
      chainId: 1666600000,
      chainName: "Harmony",
      symbol: "ONE",
      rpcUrls: [
        "https://api.blockeden.xyz/harmony/8UuXzatAZYDBJC6YZTKD",
        "https://api.harmony.one",
      ],
      decimals: 18,
      blockExplorerUrls: ["https://explorer.harmony.one/"],
    },
  },
  {
    id: "binance-smart-chain",
    name: "Binance Smart Chain",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/binance-logo.png",
    urls: [
      {
        name: "mainnet",
        templateUrl: "https://api.blockeden.xyz/bsc/${accessKey}",
        testTemplateUrl: "",
      },
    ],
    costs: "200 CUs / req",
    chainConfig: {
      chainId: 56,
      chainName: "Binance Smart Chain",
      symbol: "BNB",
      rpcUrls: [
        "https://api.blockeden.xyz/bsc/8UuXzatAZYDBJC6YZTKD",
        "https://bsc-dataseed.binance.org",
      ],
      decimals: 18,
      blockExplorerUrls: ["https://bscscan.com"],
    },
  },
  // {
  //   id: "fantom",
  //   name: "Fantom",
  //   networkType: "JSON RPC",
  //   avatarSrc: "/keys-assets/fantom-logo.png",
  //   urls: [
  //     {
  //       name: "mainnet",
  //       templateUrl: "https://api.blockeden.xyz/fantom/${accessKey}",
  //       testTemplateUrl: "",
  //     },
  //   ],
  //   costs: "100 CUs / req",
  //   chainConfig: {
  //     chainId: 250,
  //     chainName: "Fantom Opera",
  //     symbol: "FTM",
  //     rpcUrls: ["https://api.blockeden.xyz/fantom/8UuXzatAZYDBJC6YZTKD"],
  //     decimals: 18,
  //     blockExplorerUrls: ["https://ftmscan.com/"],
  //   },
  // },
  {
    id: "arbitrum",
    name: "Arbitrum",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/arbitrum-logo.png",
    urls: [
      {
        name: "mainnet",
        templateUrl: "https://api.blockeden.xyz/arbitrum/${accessKey}",
        testTemplateUrl: "",
      },
    ],
    costs: "200 CUs / req",
    chainConfig: {
      chainId: 42161,
      chainName: "Arbitrum",
      symbol: "ETH",
      rpcUrls: ["https://arb1.arbitrum.io/rpc"],
      decimals: 18,
      blockExplorerUrls: ["https://arbiscan.io"],
    },
  },
  {
    id: "optimism",
    name: "Optimism",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/optimism-logo.png",
    urls: [
      {
        name: "mainnet",
        templateUrl: "https://api.blockeden.xyz/optimism/${accessKey}",
        testTemplateUrl: "",
      },
    ],
    costs: "200 CUs / req",
    chainConfig: {
      chainId: 10,
      chainName: "Optimism",
      symbol: "OP",
      rpcUrls: [
        "https://api.blockeden.xyz/optimism/8UuXzatAZYDBJC6YZTKD",
        "https://mainnet.optimism.io",
      ],
      decimals: 18,
      blockExplorerUrls: ["https://optimistic.etherscan.io"],
    },
  },
  {
    id: "gnosis",
    name: "Gnosis",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/gnosis-logo.svg",
    urls: [
      {
        name: "mainnet",
        templateUrl: "https://api.blockeden.xyz/gnosis/${accessKey}",
        testTemplateUrl: "",
      },
    ],
    costs: "200 CUs / req",
    chainConfig: {
      chainId: 100,
      chainName: "Gnosis",
      symbol: "XDAI",
      rpcUrls: [
        "https://api.blockeden.xyz/gnosis/8UuXzatAZYDBJC6YZTKD",
        "https://rpc.gnosischain.com",
      ],
      decimals: 18,
      blockExplorerUrls: ["https://gnosisscan.io"],
    },
  },
  // {
  //   id: "celo",
  //   name: "Celo",
  //   networkType: "JSON RPC",
  //   avatarSrc: "/keys-assets/celo-logo.png",
  //   urls: [
  //     {
  //       name: "mainnet",
  //       templateUrl: "https://api.blockeden.xyz/celo/${accessKey}",
  //       testTemplateUrl: "",
  //     },
  //   ],
  //   costs: "100 CUs / req",
  //   chainConfig: {
  //     chainId: 42220,
  //     chainName: "Celo Mainnet",
  //     symbol: "CELO",
  //     rpcUrls: [
  //       "https://api.blockeden.xyz/celo/8UuXzatAZYDBJC6YZTKD",
  //       "https://forno.celo.org",
  //     ],
  //     decimals: 18,
  //     blockExplorerUrls: ["https://explorer.celo.org"],
  //   },
  // },
  {
    id: "arbitrum-nova",
    name: "Arbitrum Nova",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/arbitrum-nova.png",
    urls: [
      {
        name: "mainnet",
        templateUrl: "https://api.blockeden.xyz/arbitrumnova/${accessKey}",
        testTemplateUrl: "",
      },
    ],
    costs: "200 CUs / req",
  },
  // {
  //   id: "moonbeam",
  //   name: "Moonbeam",
  //   networkType: "JSON RPC",
  //   avatarSrc: "/keys-assets/moonbeam-logo.png",
  //   urls: [
  //     {
  //       name: "mainnet",
  //       templateUrl: "https://api.blockeden.xyz/moonbeam/${accessKey}",
  //       testTemplateUrl: "",
  //     },
  //   ],
  //   costs: "100 CUs / req",
  //   chainConfig: {
  //     chainId: 1284,
  //     chainName: "Moonbeam",
  //     symbol: "GLMR",
  //     rpcUrls: [
  //       "https://api.blockeden.xyz/moonbeam/8UuXzatAZYDBJC6YZTKD",
  //       "https://rpc.api.moonbeam.network",
  //     ],
  //     decimals: 18,
  //     blockExplorerUrls: ["https://moonscan.io/"],
  //   },
  // },
  // {
  //   id: "tron",
  //   name: "Tron",
  //   networkType: "JSON RPC",
  //   avatarSrc: "/keys-assets/tron-logo.png",
  //   urls: [
  //     {
  //       name: "mainnet",
  //       templateUrl: "https://api.blockeden.xyz/tron/${accessKey}",
  //       testTemplateUrl: "",
  //     },
  //   ],
  //   costs: "100 CUs / req",
  // },
  {
    id: "near",
    name: "NEAR",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/near-logo.png",
    urls: [
      {
        name: "mainnet",
        templateUrl: "https://api.blockeden.xyz/near/${accessKey}",
        testTemplateUrl: "",
      },
    ],
    costs: "100 CUs / req",
  },
  // {
  //   id: "klaytn",
  //   name: "Klaytn",
  //   networkType: "JSON RPC",
  //   avatarSrc: "/keys-assets/klaytn-logo.png",
  //
  //   urls: [
  //     {
  //       name: "mainnet",
  //       templateUrl: "https://api.blockeden.xyz/klaytn/${accessKey}",
  //       testTemplateUrl: "",
  //     },
  //   ],
  //
  //   costs: "100 CUs / req",
  // },
  // {
  //   id: "bttc",
  //   name: "BTTC",
  //   networkType: "JSON RPC",
  //   avatarSrc: "/keys-assets/bttc-logo.png",
  //
  //   urls: [
  //     {
  //       name: "mainnet",
  //       templateUrl: "https://api.blockeden.xyz/bttc/${accessKey}",
  //       testTemplateUrl: "",
  //     },
  //   ],
  //
  //   costs: "100 CUs / req",
  // },
  //
  // {
  //   id: "syscoin",
  //   name: "Syscoin",
  //   networkType: "JSON RPC",
  //   avatarSrc: "/keys-assets/syscoin-logo.png",
  //
  //   urls: [
  //     {
  //       name: "mainnet",
  //       templateUrl: "https://api.blockeden.xyz/syscoin/${accessKey}",
  //       testTemplateUrl: "",
  //     },
  //   ],
  //
  //   costs: "100 CUs / req",
  // },
  //
  // {
  //   id: "heco",
  //   name: "HECO",
  //   networkType: "JSON RPC",
  //   avatarSrc: "/keys-assets/heco-logo.png",
  //
  //   urls: [
  //     {
  //       name: "mainnet",
  //       templateUrl: "https://api.blockeden.xyz/heco/${accessKey}",
  //       testTemplateUrl: "",
  //     },
  //   ],
  //
  //   costs: "100 CUs / req",
  // },
  //
  // {
  //   id: "metis",
  //   name: "Metis",
  //   networkType: "JSON RPC",
  //   avatarSrc: "/keys-assets/metis-logo.png",
  //
  //   urls: [
  //     {
  //       name: "mainnet",
  //       templateUrl: "https://api.blockeden.xyz/metis/${accessKey}",
  //       testTemplateUrl: "",
  //     },
  //   ],
  //
  //   costs: "100 CUs / req",
  // },
  //
  // {
  //   id: "polkadot",
  //   name: "Polkadot",
  //   networkType: "JSON RPC",
  //   avatarSrc: "/keys-assets/polkadot-logo.png",
  //
  //   urls: [
  //     {
  //       name: "mainnet",
  //       templateUrl: "https://api.blockeden.xyz/polkadot/${accessKey}",
  //       testTemplateUrl: "",
  //     },
  //   ],
  //
  //   costs: "100 CUs / req",
  // },
  //
  // {
  //   id: "kusama",
  //   name: "Kusama",
  //   networkType: "JSON RPC",
  //   avatarSrc: "/keys-assets/kusama-logo.png",
  //
  //   urls: [
  //     {
  //       name: "mainnet",
  //       templateUrl: "https://api.blockeden.xyz/kusama/${accessKey}",
  //       testTemplateUrl: "",
  //     },
  //   ],
  //
  //   costs: "100 CUs / req",
  // },
  {
    id: "ethstorage-galileo",
    name: "EthStorage Galileo",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/ethstorage-logo.png",

    urls: [
      {
        name: "Galileo",
        templateUrl:
          "https://api.blockeden.xyz/ethstorage/galileo/${accessKey}",
        testTemplateUrl: "",
      },
    ],

    costs: "100 CUs / req",
    chainConfig: {
      chainId: 3334,
      chainName: "Web3Q Galileo",
      symbol: "W3Q",
      rpcUrls: ["https://galileo.web3q.io:8545"],
      decimals: 18,
      blockExplorerUrls: [
        "https://api.blockeden.xyz/ethstorage/galileo/8UuXzatAZYDBJC6YZTKD",
        "https://explorer.galileo.web3q.io",
      ],
    },
  },

  {
    id: "stellar-futurenet-soroban",
    name: "Stellar Futurenet Soroban",
    networkType: "JSON RPC",
    avatarSrc: "assets/img/product/stellar-logo.png",

    urls: [
      {
        name: "Futurenet",
        templateUrl:
          "https://api.blockeden.xyz/stellar/futurenet/soroban/${accessKey}/",
        testTemplateUrl: "https://sorobandev.com/tools/remote/get-account",
      },
    ],

    costs: "2,000 CU / req",
  },
].map((it) => ({
  ...it,
  intro: descs.find((networkType) => networkType.id === it.id)?.desc,
}));

const FROZEN_FIRST_N = 4;

export const productConfig = [
  ...original.slice(0, FROZEN_FIRST_N),
  ...shuffle(original.slice(FROZEN_FIRST_N)),
];
