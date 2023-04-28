import React from "react";
import clsx from "clsx";
import styles from "@site/src/components/HomepageFeatures/styles.module.css";


const recentPosts = require("../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

export const RecentNews = () => {
  return (
    <section className={styles.features}>

      <div className="container">
        <div className="row">
          <div className={clsx('col col--9')}>
            <article>
              <h2>Welcome</h2>

              <ul>
                <li>Focus on building unique dapps instead of running nodes.</li>
                  <li>Performant, dynamically scalable infrastructure.</li>
                  <li>Superior support when you need it.</li>
              </ul>
            </article>
          </div>
          <div className={clsx('col col--3')}>
            <h2>Recent News</h2>
            <ul>
              {recentPosts.items.slice(0, 5).map((item, index) => (
                <li key={index}>
                  <a href={`${item.permalink}`}>{item.title}</a>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}
