# Sui Indexer

Sui Indexer is a collection of REST-ful APIs to NFT and coins on Sui Network.

## How to Create a BlockEden.xyz Access Key

**Step 1**: Visit https://blockeden.xyz/dash/. If you're new to our platform, please complete the sign-up process.

**Step 2**: Specify a unique name for your API key, and click on '+ Create key'.

**Step 3**: After creation, click on the provided access key to copy it to your clipboard for future referencing.

**Step 4**: Incorporate the copied access key into your project as demonstrated below. Ensure you replace `<access_key>` with your personal access key.



**Connection to Sui Indexer using `CURL`:**

```bash
curl --request GET \
  --url 'https://api.blockeden.xyz/sui-indexer/<access_key>/account/coins?account=0xe335d84c489084474aac4322fb9ac5173369d27487c404558e99c7c5ec608075'
```

**Connection to Sui using TypeScript SDK:**

```js
var axios = require("axios").default;

async function fetchCoins() {
    var options = {
        method: 'GET',
        url: 'https://api.blockeden.xyz/sui-indexer/<access_key>/account/coins',
        params: { account: '0xe335d84c489084474aac4322fb9ac5173369d27487c404558e99c7c5ec608075' }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

fetchCoins();
```



## Sui Indexder API Reference

1. **[Account's Coin API](https://blockeden.xyz/api-marketplace/sui-indexer)**
   The **Account's Coin API** permits detailed exploration of coin assets held in a specified Sui Network account. It allows access to critical coin features, including distinct types, per-coin balances, rich metadata, and their valuation in USD. This API is crucial for deep analysis and visualization of an individual's cryptocurrency portfolio in the Sui environment.
2. **[Account's NFTs API](https://blockeden.xyz/api-marketplace/sui-indexer)**
   This **Account's NFT API** provides access to detailed information about NFT assets linked to a particular Sui account. It discloses key information such as the NFTs' intrinsic metadata, collection IDs, and recent sale prices. Additionally, it differentiates between standard and Kiosk NFTs, providing a full view of a user’s digital art collection.
3. **[Account's NFT Collections API](https://blockeden.xyz/api-marketplace/sui-indexer)**
   This API enables the extraction of NFT collection data associated with a given account address. It grants the ability to gather critical data including the collection's visual representation, title, unique identifier, inventory count, and associated package ID.
4. **[A Single Collection Detail API](https://blockeden.xyz/api-marketplace/sui-indexer)**
   This API offers a deep dive into individual NFT collections based on user-defined collection types. Users receive vital data such as the collection's visual elements, title, descriptive content, identification number, holder count, package ID, and total available items, providing a full perspective on the collection's characteristics and appeal.
5. **[Collection Top Holders API](https://blockeden.xyz/api-marketplace/sui-indexer)**
   The **Collection Top Holders API** is designed to uncover the main holders of a specified NFT collection. Utilizing the collection ID, it generates a list detailing the holders' addresses and their held quantities, revealing the prominent participants of the collection.
6. **[Collection Activity API](https://blockeden.xyz/api-marketplace/sui-indexer)**
   The **Collection Activity API** empowers users with detailed transactional data linked to a specific NFT collection. It provides comprehensive information on transaction histories, event sequences, related NFT object IDs, types of events, functionalities, involved marketplaces, participant addresses, prices, currency formats, and timing, crucial for strategic planning and market analysis.
7. **[Collection NFT List API](https://blockeden.xyz/api-marketplace/sui-indexer)**
   The **Collection NFT List API** is a tool for accessing a complete list of NFTs from a chosen collection. It delivers intricate details of each NFT, including images, names, descriptions, standards (originByte or None), current owners, and object IDs, thus facilitating an in-depth examination of NFTs within a collection.
8. **[NFT History Owner API](https://blockeden.xyz/api-marketplace/sui-indexer)**
   The **NFT History Owner API** provides a method to track the previous owners of an NFT. Entering the NFT's object ID yields past ownership data, including account addresses and time records, invaluable for analyzing the NFT's trading history and market movements.
9. **[NFT Activity API](https://blockeden.xyz/api-marketplace/sui-indexer)**
   The **NFT Activity API** is tailored for users and developers to observe and scrutinize events linked to specific NFTs. Providing the object ID of an NFT fetches detailed event data, including transaction identifiers, event sequences, associated NFT object IDs, event categories, functions, participating marketplaces, participant addresses, pricing, currency types, and timestamps, enabling comprehensive NFT research and informed decision-making.

