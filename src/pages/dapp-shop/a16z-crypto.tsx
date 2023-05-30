import React from "react";
import projects from "../../projects-data.json";
import { DappGallery } from "@site/src/components/dapp-gallery";
import Layout from "@theme/Layout";

export default function A16zCrypto() {
  const title = "a16z crypto";
  const tag = "a16z crypto";
  const myProjects = projects.data.projects.filter(
    (p) =>
      p?.tags?.some((t) => t.name === tag) ||
      p?.chains?.some((t) => t.name === tag)
  );
  const description = `List of ${myProjects.length} a16z crypto projects. a16z crypto is a venture capital fund that invests in crypto and web3 startups.`;

  return (
    <Layout title={title} description={description}>
      <header>
        <section>
          <div className="d-flex justify-content-center align-content-center align-items-center flex-column">
            <h1 className="hero__title">{title}</h1>
            <p>{description}</p>
          </div>
        </section>
      </header>
      <section className="bg-primary-2-alt">
        <div className="container">
          <DappGallery projects={myProjects} />
        </div>
      </section>
    </Layout>
  );
}
