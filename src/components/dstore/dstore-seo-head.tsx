import React from "react";
import Head from "@docusaurus/Head";
import { beConfig } from "@site/src/config";

export const dstoreSeo = {
  previewImageUrl:
    "https://tp-misc.b-cdn.net/blockeden/dstore-drag-and-drop-1.png",
  title: `dStore - a managed decentralized storage solution for creators and developers from any blockchain`,
  description:
    "dStore is a managed storage solution for creators and developers from any blockchain. It's user-friendly, EVM-compatible, low-cost, and petabyte-level scale, all powered by EthStorage.",
};

export const DstoreSeoHead: React.FC = () => {
  return (
    <Head>
      <meta name="twitter:site" content="@BlockEdenHQ" />
      <meta name="twitter:image" content={dstoreSeo.previewImageUrl} />
      <meta name="twitter:title" content={dstoreSeo.title} />
      <meta name="twitter:description" content={dstoreSeo.description} />
      <meta property="og:description" content={dstoreSeo.description} />
      <meta
        property="og:image"
        name="og:image"
        content={dstoreSeo.previewImageUrl}
      />
    </Head>
  );
};
