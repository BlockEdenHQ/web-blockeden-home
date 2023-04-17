import clsx from "clsx";
import styles from "./index.module.css";
import React, { useEffect } from "react";
import { useAos } from "@site/src/components/use-aos";
import Link from "@docusaurus/Link";
import { useSvg } from "@site/src/components/hooks/use-svg";

export function DappGallery({ projects, viewMore }) {
  useAos();
  useSvg();
  return (
    <>
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

                  <div className="d-flex justify-content-between">
                    <div className="text-small d-flex">
                      <div className={clsx("mr-2", styles.label)}>
                        {bp?.tags?.at(0)?.name}
                      </div>
                      <span className="text-muted"></span>
                    </div>
                  </div>

                  <br />

                  <Link href={bp.website}>
                    <div>
                      <img
                        className="icon bg-primary"
                        src="/assets/img/icons/theme/general/attachment-1.svg"
                        alt="subtract icon"
                        data-inject-svg
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      {viewMore && (
        <div className="row">
          <div className="col">
            <Link href={viewMore} className="hover-arrow">
              View more
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
