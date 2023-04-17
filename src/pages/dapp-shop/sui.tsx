import React from "react";
import projects from "../../projects-data.json";
import { DappGallery } from "@site/src/components/dapp-gallery";
import Layout from "@theme/Layout";

export default function Sui() {
  return (
    <Layout title={"dstoreSeo.title"} description={"dstoreSeo.description"}>
      <header>
        <section>
          <div className="d-flex justify-content-center">
            <h1 className="hero__title">{"Sui Ecosystem Projects"}</h1>
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
