import clsx from "clsx";
import styles from "./index.module.css";
import React from "react";
import { useAos } from "@site/src/components/use-aos";

export function DappGallery({ projects }) {
  useAos();
  return (
    <>
      <section className="bg-primary-2-alt">
        <div className="container">
          <div className="row">
            {projects
              .filter((it) => !!it)
              .map((bp, i) => (
                <div
                  key={bp.id}
                  className="col-md-6 col-lg-4 d-flex"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="card w-100">
                    {/*<img*/}
                    {/*  src={`/assets/img/article-1.jpg`}*/}
                    {/*  alt="Image"*/}
                    {/*  className="card-img-top"*/}
                    {/*/>*/}
                    <div className="card-body d-flex flex-column">
                      <h4 className={clsx(styles.cardTitle, styles.desc)}>
                        {bp.name}
                      </h4>

                      <p className="flex-grow-1">{bp.introduction}</p>

                      <div className="d-flex justify-content-between mb-3">
                        <div className="text-small d-flex">
                          <div className={clsx("mr-2", styles.label)}>
                            {bp?.tags?.at(0)?.name}
                          </div>
                          <span className="text-muted"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
