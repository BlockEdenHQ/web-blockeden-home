import React from "react";
import Head from "@docusaurus/Head";
import { beConfig } from "@site/src/config";

export const sorobanSeo = {
  previewImageUrl:
    "https://tp-misc.b-cdn.net/blockeden/BlockEden-xyz-image.png",
  title: `Stellar Soroban Indexer and GraphQL`,
  description:
    "All-in-one Standard Soroban RPC, indexer GraphQL API and data analytics web portal, built by BlockEdn.xyz for developers.",
};

export const StellarSorobanSeoHead: React.FC = () => {
  return (
    <Head>
      <meta name="twitter:site" content="@BlockEdenHQ" />
      <meta name="twitter:image" content={sorobanSeo.previewImageUrl} />
      <meta name="twitter:title" content={sorobanSeo.title} />
      <meta name="twitter:description" content={sorobanSeo.description} />
      <meta property="og:description" content={sorobanSeo.description} />
      <meta
        property="og:image"
        name="og:image"
        content={sorobanSeo.previewImageUrl}
      />
    </Head>
  );
};
