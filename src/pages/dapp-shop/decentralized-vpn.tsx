import React from "react";
import projects from "../../projects-data.json";
import { DappGallery } from "@site/src/components/dapp-gallery";
import Layout from "@theme/Layout";

export default function DecentralizedVpn() {
  const title = "Decentralized VPNs";
  const description =
    "Sui is a decentralized permission smart contract platform biased towards low-latency management of assets.";
  const tag = "Decentralized VPN";

  return (
    <Layout title={title} description={description}>
      <header>
        <section>
          <div className="d-flex justify-content-center">
            <h1 className="hero__title">{title}</h1>
          </div>
        </section>
      </header>
      <section className="bg-primary-2-alt">
        <div className="container">
          <DappGallery
            projects={projects.data.projects.filter(
              (p) =>
                p?.tags?.some((t) => t.name === tag) ||
                p?.chains?.some((t) => t.name === tag)
            )}
          />
        </div>
      </section>
    </Layout>
  );
}
