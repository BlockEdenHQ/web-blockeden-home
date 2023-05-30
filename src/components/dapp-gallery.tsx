import clsx from "clsx";
import styles from "./index.module.css";
import React, { useEffect } from "react";
import { useAos } from "@site/src/components/use-aos";
import Link from "@docusaurus/Link";
import { useSvg } from "@site/src/components/hooks/use-svg";
import { Project } from "./dapp-shop-components/dapp-shop-types";
import { beConfig } from "@site/src/config";

type Props = { projects: Project[]; viewMore?: string };

export function DappGallery({ projects, viewMore }: Props) {
  useAos();
  useSvg();
  if (!viewMore) {
    projects.splice(5, 0, {
      id: "ad",
      name: "",
      introduction: "",
      website: "",
      twitter: "",
      marketCap: 0,
      tokenSymbol: "",
      explorerUrl: "",
      mediumUrl: "",
      redditUrl: "",
      githubUrl: "",
      whitepaperUrl: "",
      tags: [],
      chains: [],
    });
  }
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
              {bp.id === "ad" ? (
                <div className="card w-100">
                  <div className="card-body d-flex flex-column">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p style={{ fontSize: "32px" }}>
                      Get free RPC services and developer tools
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <a className="btn btn-primary-2" href={beConfig.signUp}>
                      Claim now
                    </a>
                  </div>
                </div>
              ) : (
                <div className="card w-100">
                  <div className="card-body d-flex flex-column">
                    <div className="icon-round mb-3 mb-md-4 bg-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        className="injected-svg icon bg-primary"
                        data-src="assets/img/icons/theme/shopping/wallet-3.svg"
                      >
                        <title>Icon For Wallet#3</title>
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect
                            opacity={0}
                            x={0}
                            y={0}
                            width={24}
                            height={24}
                          />
                          <path
                            d="M4,4 L20,4 C21.1045695,4 22,4.8954305 22,6 L22,18 C22,19.1045695 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.1045695 2,18 L2,6 C2,4.8954305 2.8954305,4 4,4 Z"
                            fill="#000000"
                            opacity="0.3"
                          />
                          <path
                            d="M18.5,11 L5.5,11 C4.67157288,11 4,11.6715729 4,12.5 L4,13 L8.58578644,13 C8.85100293,13 9.10535684,13.1053568 9.29289322,13.2928932 L10.2928932,14.2928932 C10.7456461,14.7456461 11.3597108,15 12,15 C12.6402892,15 13.2543539,14.7456461 13.7071068,14.2928932 L14.7071068,13.2928932 C14.8946432,13.1053568 15.1489971,13 15.4142136,13 L20,13 L20,12.5 C20,11.6715729 19.3284271,11 18.5,11 Z"
                            fill="#000000"
                          />
                          <path
                            d="M5.5,6 C4.67157288,6 4,6.67157288 4,7.5 L4,8 L20,8 L20,7.5 C20,6.67157288 19.3284271,6 18.5,6 L5.5,6 Z"
                            fill="#000000"
                          />
                        </g>
                      </svg>
                    </div>

                    <h4 className={clsx(styles.cardTitle, styles.desc)}>
                      {bp.name}
                    </h4>

                    <p className="flex-grow-1">{bp.introduction}</p>

                    {(bp.website || bp.twitter) && (
                      <div className={"d-flex flex-row"}>
                        <Link href={bp.website}>
                          <div className="mr-1">
                            <img
                              className="icon bg-primary"
                              src="/assets/img/icons/theme/general/attachment-1.svg"
                              alt="subtract icon"
                              data-inject-svg
                            />
                          </div>
                        </Link>

                        <Link href={bp.twitter}>
                          <div>
                            <img
                              className="icon bg-primary"
                              src="/assets/img/icons/theme/social/twitter.svg"
                              alt="subtract icon"
                              data-inject-svg
                            />
                          </div>
                        </Link>
                      </div>
                    )}

                    <div className="d-flex justify-content-between">
                      <div className="text-small d-flex">
                        <div className={clsx("mr-2", styles.label)}>
                          {bp?.tags?.at(0)?.name}
                        </div>
                        <span className="text-muted"></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
