const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

// Function to read, translate, and write file content
async function addFrontMatterToFile(filePath) {
  try {
    // Read the file content
    const fileContent = await fs.readFile(filePath, "utf-8");
    console.log("File content read successfully.");

    // Extract file name without extension to use as id and slug
    const fileName = path.parse(filePath).name;

    // Call the OpenAI API to translate the content
    const processedContent = await updateText(fileContent, fileName);

    // Write the translated content back to the file
    await fs.writeFile(filePath, processedContent, "utf-8");
    console.log("File content translated and written back successfully.");
  } catch (error) {
    console.error("Error processing the file:", error.message);
  }
}

// Function to send content to OpenAI and get translation
async function updateText(text, fileName) {
  const openaiApiKey = process.env.OPENAI_API_KEY;

  if (!openaiApiKey) {
    throw new Error("Missing OpenAI API key in environment variables");
  }

  try {
    // OpenAI API call for text translation
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o", // You can change the model if required
        messages: [
          {
            role: "user",
            content: `[no prose]
Do not wrap response with code block.

I'm Dora Noda, founder of BlockEden.xyz, which publishes a blog dedicated to deep, forward-thinking analysis at the frontier of SaaS and tech innovation. I’ve brought you on as a world-class editor—think the intellectual rigor and cultural influence of The New Yorker, The Atlantic, Harper’s, The Economist, or modern industry voices like Stratechery or Pirate Wires—to help elevate our writing to the highest standard.

We want to maintain our blog’s distinctive voice and style, while sharpening the clarity, depth, and analytical rigor of every post. We aim to become the authoritative SaaS publication that smart, successful professionals trust to discover emerging technologies, market shifts, and the innovative companies shaping the future.

As our Managing Editor, you’ll challenge everything: tone, structure, logical coherence, the evidence behind our claims, and the freshness of our insights. If a similar analysis already exists elsewhere, encourage us to surpass it. Make sure our pieces remain approachable to a broad audience while delivering nuanced, fact-based evaluations that stir optimism about what’s next in SaaS.

Ultimately, our mission is to broaden our reach, spark informed optimism, and position BlockEden.xyz as the definitive voice in SaaS innovation coverage. I’m excited to collaborate with you and raise our blog to world-class status.

I want you to create or update the front matter for the article following the docusaurus-style example, in order to improve SEO and make it more reader-friendly. And then return the full article.

- the description field should be engaging and summarizing the article and optimizing for SEO. Avoid using jargon like "unleash", "explore", "discover", "This article summarizes", etc.
- image field should be https://web-dash-v2.onrender.com/api/og?title=:title, where title is the title of the article. If there is no such image in the content of the blog, add insert it to be after the first paragraph of the article.

the front matter example:
\`\`\`
---
title:
tags: []
keywords: []
description:
image:
---
\`\`\`

The article you are going to prepend or update the front matter:
\`\`\`
${text}
\`\`\`
`,
          },
        ],
        max_tokens: 16384, // Adjust based on your need
        temperature: 0.3,
        stream: false,
      },
      {
        headers: {
          Authorization: `Bearer ${openaiApiKey}`,
          "Content-Type": "application/json",
        },
      },
    );
    const translatedText = response.data.choices[0].message.content.trim();
    return translatedText;
  } catch (error) {
    console.error(
      "Error during OpenAI API request:",
      error.response ? error.response.data : error.message,
    );
    throw new Error("Failed to translate text.");
  }
}

// Ensure the file path is passed as arguments
const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide the path to the file.");
  process.exit(1);
}

// Resolve the file path relative to the current working directory
const resolvedFilePath = path.resolve(filePath);

// Execute the translation process
addFrontMatterToFile(resolvedFilePath);
