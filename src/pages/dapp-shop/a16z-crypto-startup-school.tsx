import React from "react";
import projects from "../../projects-data.json";
import { DappGallery } from "@site/src/components/dapp-gallery";
import Layout from "@theme/Layout";

export default function A16zCryptoStartupSchool() {
  const title = "a16z crypto startup school";
  const tag = "a16z crypto startup school";
  const myProjects = projects.data.projects.filter(
    (p) =>
      p?.tags?.some((t) => t.name === tag) ||
      p?.chains?.some((t) => t.name === tag)
  );
  const description = `List of ${myProjects.length} projects from a16z crypto startup school. a16z crypto is a venture capital fund that invests in crypto and web3 startups. a16z Crypto Startup School is a twelve-week accelerator program designed around the specific needs of web3 startups.`;

  return (
    <Layout title={title} description={description}>
      <header>
        <section>
          <div className="d-flex align-items-center flex-column">
            <h1 className="hero__title" style={{textAlign:"center"}}>{title}</h1>
            <p className="mx-5" style={{textAlign:"center", maxWidth: "620px"}}>{description}</p>
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
