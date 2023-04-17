import React from "react";
import projects from "../../projects-data.json";
import { DappGallery } from "@site/src/components/dapp-gallery";
import Layout from "@theme/Layout";

export default function Sui() {
  const title = "Sui Ecosystem Projects";

  return (
    <Layout
      title={title}
      description={
        "Sui is a decentralized permission smart contract platform biased towards low-latency management of assets."
      }
    >
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
            projects={projects.data.projects.filter((p) =>
              p?.tags?.some((t) => t.name === "Sui")
            )}
          />
        </div>
      </section>
    </Layout>
  );
}
