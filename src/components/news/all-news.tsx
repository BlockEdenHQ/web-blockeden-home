import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "@site/src/components/news/news.module.css";
import React from "react";
import {BlogArchive} from "@site/src/components/news/blog-archive-types";

const blogArchive = require("../../../.docusaurus/docusaurus-plugin-content-blog/default/p/blog-archive-61f.json") as BlogArchive;
const blogPosts = blogArchive.archive.blogPosts;

export const AllNews = () => {
  const recent = blogPosts;
  return (
    <section className="bg-primary-2-alt">
      <div className="container">
        <div className="row">
          {recent.map((bp, i) => (
            <div
              key={bp.id}
              className="col-md-6 col-lg-4 d-flex"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="card">
                <Link href={bp.metadata.permalink}>
                  <img
                    src={
                      bp.metadata.frontMatter?.image ??
                      `/assets/img/article-${(((i) + 1) % 9) + 1}.jpg`
                    }
                    alt="Image"
                    className="card-img-top"
                  />
                </Link>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="text-small d-flex">
                      <div className={clsx("mr-2", styles.label)}>
                        {bp.metadata.tags && bp.metadata.tags.length > 0 ? (
                          <Link href={bp.metadata.tags[0].permalink}>
                            {bp.metadata.tags[0].label}
                          </Link>
                        ) : (
                          <span>Blog</span>
                        )}
                      </div>
                      <span className="text-muted">
                        {new Date(bp.metadata.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                  <Link href={bp.metadata.permalink}>
                    <h4 className={clsx(styles.cardTitle, styles.desc)}>
                      {bp.metadata.title}
                    </h4>
                  </Link>

                  <p className="flex-grow-1">
                    <Link href={bp.metadata.permalink} className={styles.desc}>
                      {bp.metadata.description}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
