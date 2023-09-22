import prodStyles from "./features-v2.module.css";
import clsx from "clsx";
import { productConfig } from "@site/src/product-config";
import React from "react";

export const FeaturesV2 = () => {
  return (
    <section className={prodStyles.apiCard}>
      <div className="container">
        <div className="row justify-content-center text-center mb-6">
          <div className="col-xl-8 col-lg-9">
            <h2 className={clsx("display-4 mx-xl-6", prodStyles.title)}>
              API with high availability
            </h2>
            <p className={clsx("lead", prodStyles.cont)}>
              Blockeden.xyz supports various forms of APIs for multiple
              blockchain networks.
            </p>
          </div>
        </div>
        <div className="row">
          {productConfig.map((prod) => (
            <div data-aos="fade-up" className={clsx("col-md-6 col-lg-3")}>
              <a
                href={`/api-marketplace/${prod.id}`}
                className={
                  "card card-sm card-body flex-row align-items-center hover-shadow-3d"
                }
              >
                <img
                  src={prod.avatarSrc}
                  alt=""
                  style={{ height: 48, width: 48 }}
                />
                <div className={"ml-3"}>
                  <h4 className={clsx("mb-0", prodStyles.smCardTitle)}>
                    {prod.name}
                  </h4>
                  {/* <strong>{prod.networkType}</strong> */}
                  <span className={prodStyles.smCardDesc}>
                    {prod.networkType}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
