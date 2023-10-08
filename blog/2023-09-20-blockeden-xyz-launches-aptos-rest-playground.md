---
title: BlockEden.xyz launches Aptos REST Playground
authors: [simlis8]
tags: [product, aptos]
description: "Explore the Aptos REST Playground: a state-of-the-art Web3 toolkit for developers. Dive into its features for interactive API testing, real-time data analysis, and user-friendly interface, all optimized for Aptos application development. Unveiled by Blockeden.xyz, it's the ultimate solution for efficient and seamless Aptos API exploration and understanding."
---

In modern software development, building robust APIs is crucial. APIs (Application Programming Interfaces) serve as the key for communication and data exchange between different software systems, and an API that is easy to use and test can greatly accelerate the development process. We are excited to announce that we have introduced a brand new feature for Aptos - Aptos REST Playground. This is a high-availability API toolkit based on Aptos development, designed to assist you in building Aptos applications faster and better.

## **What is Aptos REST Playground?**

Aptos REST Playground is an interactive Web3 application designed to assist developers in exploring, testing, and understanding the Aptos API with ease. It provides an intuitive [Swagger-based](https://swagger.io/) interactive interface that allows you to construct and send REST requests, view responses, and test to analyze data.

This tool enables Aptos developers to gain a better understanding of Aptos functionality and build exceptional Aptos applications more quickly and efficiently.

## **Why Choose Aptos REST Playground?**

Aptos REST Playground is a high-performance REST API customized specifically for Aptos developers by [Blockeden.xyz](https://blockeden.xyz/). It aims to provide the following advantages to Aptos developers:

1. **Interactive API Testing**

Aptos REST Playground allows you to conduct interactive API testing without leaving your browser. It is an interactive application built on [Swagger](https://swagger.io/). You can construct and customize requests, view real-time responses, and make adjustments as needed. This greatly simplifies the process of API testing and debugging.

2. **Real-time Data Analysis**

You can directly view the data in the API responses within Aptos REST Playground, without the need to write additional code or use third-party tools. This makes it easier for you to comprehend the information returned by the API, facilitating the development of better applications.

3. **User-Friendly**

The user interface of Aptos REST Playground is highly intuitive, requiring no complex setup or configuration. Whether you are an experienced developer or a beginner, you can easily get started and use it effectively.

## **How to Get Started with Aptos REST Playground?**

Enter our API marketplace and select the Aptos card:

![img](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FwHKJoqtjHOgP_LiNqxJLh.png&w=3840&q=75)

Inside the Aptos REST Playground interface, locate the `Test REST chain API` where you can see that we have integrated all the interfaces required for Aptos development:

![img](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FG0cNmuGv8kK8UA124qiIl.png&w=3840&q=75)

Here, you don't need any additional configuration; our playground is ready to use out of the box. Taking `Get Account` as an example, we will show you how to use Aptos REST Playground:

1. Expand the `/account/{address}` table; we have preconfigured some parameters for you. Of course, you can also set your own parameters.
2. Click the `Try it out` button, and you can access the interface using either our default parameters or any information you set yourself. You will immediately receive the data you need. Pay special attention to the data with an HTTP Code of `200`; it will be your primary focus. With this data, you can analyze any Aptos data request.

![img](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2F_GH8ccGTeYkPRxVkrB6bb.png&w=3840&q=75)

Sometimes, to test the speed and stability of the product, you may want to build a set of testing code on the frontend yourself. This is allowed and supported by us.

Before doing so, you need to first locate your BLOCKEDEN_API_KEY, which can be found at [https://blockeden.xyz/dash](https://blockeden.xyz/dash):

![img](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FJYYc1pr2bz-AKdwLSAvOa.png&w=3840&q=75)

If you haven't created your own `BLOCKEDEN_API_KEY` yet, you can still use the public API key we provide: `8UuXzatAZYDBJC6YZTKD`.

Now, let's create our own simple testing code based on React and the Aptos REST API:

```js
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const address = '0x0000000000000000000000000000000000000000000000000000000000dead';
    const apiEndpoint = `https://api.blockeden.xyz/aptos/8UuXzatAZYDBJC6YZTKD/v1/accounts/${address}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);

      } catch (error) {
        console.error('API Request Error:', error);
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

We also support `cURL` testing:

```plain
curl -L -X GET 'https://api.blockeden.xyz/aptos/8UuXzatAZYDBJC6YZTKD/v1/accounts/0x0000000000000000000000000000000000000000000000000000000000dead' \\
-H 'Accept: application/json'
```

Aptos REST Playground is a powerful development tool for Aptos, designed to simplify the process of Aptos development and testing. We hope it provides developers with a better working experience and contributes to the creation of exceptional applications. If you have any feedback or suggestions, please don't hesitate to contact us. Thank you for your attention!

------

- Twitter: [https://twitter.com/BlockEdenHQ](https://twitter.com/BlockEdenHQ)
- Discord: [https://discord.gg/4Yfvs2HWey](https://discord.gg/4Yfvs2HWey)
- Source Link: https://blockeden.xyz/blog/2023/09/20/blockeden-xyz-launches-aptos-rest-playground/
