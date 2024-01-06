---
title: "BlockEden.xyz launches new Aptos Indexer GraphQL Playground"
authors: [simlis8]
tags: [product, aptos]
image: /assets/images/aptos-graphql-step-3-7387a23ce715060e9485f92679b9d46e.png
description: Introducing Aptos Indexer GraphQL, a tailor-made high-performance GraphQL framework by blockeden.xyz for Aptos developers. Dive into the benefits, usage, and how to get started with this robust API development tool.
---

We are excited to announce some great news to the community: After a period of development, we have launched a GraphQL playground based on the Aptos API. This is designed to assist you in building Aptos applications faster and better.

It is widely known that in today's world of software development, building efficient, flexible, and scalable APIs is of paramount importance. APIs (Application Programming Interfaces) serve as the bridge for communication and data exchange between different software systems, making well-designed APIs crucial for the success of applications. GraphQL has already become the preferred tool for many developers in building flexible and powerful APIs.

Today, we are thrilled to announce Aptos Indexer GraphQL, a high-performance GraphQL framework designed specifically for Aptos developers. It is aimed at simplifying the development and management of Aptos APIs while delivering outstanding performance and scalability.

### What is GraphQL?

First, let's take a look at what GraphQL is all about. GraphQL is a query language and runtime environment for APIs that allows clients to precisely specify the data they need, instead of receiving data in fixed formats like traditional REST APIs. This flexibility makes GraphQL particularly well-suited for building client-driven applications, such as single-page applications (SPAs) and mobile apps.

The core idea of GraphQL is "only get the data you need." Clients can retrieve multiple resources through a single request and specify the fields they need for each resource. This reduces the issues of over-fetching or under-fetching data, thereby improving network efficiency.

### Why choose Aptos Indexer GraphQL?

Aptos Indexer GraphQL is a high-performance GraphQL API tailor-made for Aptos developers by [blockeden.xyz](https:). It aims to provide the following advantages to Aptos developers:

1. **Simplified development process**

   Aptos Indexer GraphQL simplifies the API development process by offering a clear and intuitive API definition language and tools. Developers can easily define data types, queries, mutations, and resolvers, making API construction highly intuitive.

2. **Outstanding performance**

   Aptos Indexer GraphQL is designed as a high-performance framework. It utilizes modern data-loading techniques to ensure that only necessary database queries are executed, thereby reducing response times and enhancing performance.

3. **Scalability**

   Aptos Indexer GraphQL can meet your needs regardless of the scale of your application. It supports a modular architecture, allowing for easy addition of new features and data types.

4. **Powerful utilities**

   Aptos Indexer GraphQL provides a set of GraphQL-based testing tools, including GraphiQL, which allows you to interactively validate the required data in real-time, making it easier for you to develop, test, and maintain the API.

### How to get started with Aptos Indexer GraphQL?

First, select the Aptos Indexer service in our API marketplace:

![blockeden.xyz api marketplace](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FkR9Td6tTD5hedRhH_597Z.png&w=3840&q=75)

blockeden.xyz api marketplace

Then, copy your `BLOCKEDEN_API_KEY` at https://blockeden.xyz/dash:

![BLOCKEDEN_API_KEY](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FC5H-pjlZCQdNnnC5eB5S2.png&w=3840&q=75)

BLOCKEDEN_API_KEY

After receiving a success message, you can start using the Aptos Indexer GraphQL service.

If you haven't created a `BLOCKEDEN_API_KEY` yet, you can still use the public API key: `8UuXzatAZYDBJC6YZTKD`.

Here is a simple example of using `React` to connect to the Aptos Indexer GraphQL service:

```tsx
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiEndpoint = 'https://api.blockeden.xyz/aptos/indexer/8UuXzatAZYDBJC6YZTKD/v1/graphql';

    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: `
              query {
                block_metadata_transactions(limit: 2) {
                  block_height
                }
              }
            `,
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result.data);

      } catch (error) {
        console.error('GraphQL Request Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Aptos Indexer GraphQL Example</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
```

You can also directly access our built-in GraphiQL service, located at the bottom of the https://blockeden.xyz/api-marketplace/aptos-indexer page.

![Aptos Indexer GraphQL service for blockeden.xyz](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2F9tFzqCI50Bnjcl4PgMsnW.png&w=3840&q=75)

Aptos Indexer GraphQL service for blockeden.xyz

Alternatively, you can directly access Aptos Indexer GraphQL using curl:

```
curl https://api.blockeden.xyz/aptos/indexer/8UuXzatAZYDBJC6YZTKD/v1/graphql \
-H 'Content-Type: application/json' \
-X POST \
-d '{"query":"query {block_metadata_transactions(limit: 2) {block_height}}"}'
```

### Conclusion

Aptos Indexer GraphQL is a powerful development service within the Aptos ecosystem, designed to streamline the development and management of Aptos APIs while delivering exceptional performance and scalability. We hope that developers can enhance their Aptos applications and enjoy a faster and more efficient development process through the use of Aptos Indexer GraphQL.

Thank you for your interest in our latest product release. If you have any questions or feedback, please feel free to contact our support team. We look forward to hearing from you and continually improving and enhancing Aptos Indexer GraphQL.

------

- Twitter: [https://twitter.com/BlockEdenHQ](https://twitter.com/BlockEdenHQ)
- Discord: [https://discord.gg/4Yfvs2HWey](https://discord.gg/4Yfvs2HWey)
- Source Link: https://blockeden.xyz/blog/2023/09/15/aptos-indexer-graphql-launch-for-efficient-api-development/
