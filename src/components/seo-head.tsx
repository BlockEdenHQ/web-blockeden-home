import React from "react";
import Head from "@docusaurus/Head";
import { beConfig } from "@site/src/config";

export type Props = { title?: string; description?: string };

export const SeoHead: React.FC<Props> = ({ title, description }) => {
  return (
    <Head>
      <meta name="twitter:site" content="@BlockEdenHQ" />
      <meta name="twitter:image" content={beConfig.previewImageUrl} />
      <meta name="twitter:title" content={title ?? beConfig.title} />
      <meta
        name="twitter:description"
        content={description ?? beConfig.description}
      />
      <meta
        property="og:description"
        content={description ?? beConfig.description}
      />
      <meta
        property="og:image"
        name="og:image"
        content={beConfig.previewImageUrl}
      />
    </Head>
  );
};
