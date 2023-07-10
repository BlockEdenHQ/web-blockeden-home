import {AllNews} from "@site/src/components/news/all-news";
import React from "react";
import {SeoHead} from "@site/src/components/seo-head";
import Layout from "@theme/Layout";
import {useAos} from "@site/src/components/use-aos";

export default function Blogs() {
  const title = "BlockEden.xyz Blogs";
  const description = "Articles by the BlockEden.xyz team and community";
  useAos();
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

      <main>

      <AllNews/>
      </main>
    </Layout>

  )
}
