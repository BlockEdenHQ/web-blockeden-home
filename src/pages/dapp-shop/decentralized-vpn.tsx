import React from "react";
import projects from "../../projects-data.json";
import { DappGallery } from "@site/src/components/dapp-gallery";
import Layout from "@theme/Layout";
import { SeoHead } from "@site/src/components/seo-head";

export default function DecentralizedVpn() {
  const title = "Decentralized VPNs";
  const description =
    "Decentralized VPNs are virtual private networks that utilize blockchain technology to distribute network management across multiple nodes, thereby enhancing privacy and security by preventing any single entity from having complete control over users' data.";
  const tag = "Decentralized VPN";

  return (
    <Layout title={title} description={description}>
      <SeoHead title={title} description={description} />
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
