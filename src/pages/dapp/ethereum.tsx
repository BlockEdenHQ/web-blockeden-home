import React from "react";
import projects from "../../projects-data.json";
import { DappGallery } from "@site/src/components/dapp-gallery";
import Layout from "@theme/Layout";
import { SeoHead } from "@site/src/components/seo-head";

export default function DappListTemplate() {
  const {name: title, description: intro} = {"id":"rece94Ok0M65eqMog","name":"Ethereum","description":"Ethereum is an open-source blockchain platform that supports smart contracts. It provides a decentralized global infrastructure, allowing developers to build and deploy a variety of applications."};
  const tag = title;
  const myProjects = projects.data.projects.filter(
    (p) =>
      p?.tags?.some((t) => t.name === tag) ||
      p?.chains?.some((t) => t.name === tag)
  );
  const description = `List of ${myProjects.length} ${tag} projects. ${intro}`;

  return (
    <Layout title={title} description={description}>
      <SeoHead title={title} description={description} />
      <header>
        <section>
          <div className="d-flex align-items-center flex-column">
            <h1 className="hero__title" style={{ textAlign: "center" }}>
              {title}
            </h1>
            <p
              className="mx-5"
              style={{ textAlign: "center", maxWidth: "620px" }}
            >
              {description}
            </p>
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
