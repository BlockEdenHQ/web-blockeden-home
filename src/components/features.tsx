import React from "react";
import { beConfig } from "@site/src/config";
import Link from "@docusaurus/Link";
import styles from "./features.module.css";

export const Features = () => {
  return (
    <section className="c-features">
      <div className="container">
        <div className="row justify-content-center text-center mb-6">
          <div className="col-xl-8 col-lg-9">
            <h2 className="display-4 mx-xl-6">API with high availability</h2>
            <p className="lead">
              BlockEden.xyz scales with dedicated distributed systems, and
              maintains data correctness in real-time.
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div
            className="col-md-6 col-lg-3 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <img src="/img/aptos-pure-logo.svg" alt="Image" className="mb-4" />
            <h4 className={styles.h4}>Aptos</h4>
            <p className="px-xl-4">
              Build upon Aptos blockchain RPC, GraphQL. Get coin and NFT data
              analytics in 3 minutes. Scale with your users.
            </p>
            <Link href="/aptos" className="hover-arrow">
              Learn more
            </Link>
          </div>

          <div
            className="col-md-6 col-lg-3 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <img src="/img/sui-logo.svg" alt="Image" className="mb-4" />
            <h4 className={styles.h4}>Sui</h4>
            <p className="px-xl-4">
              Build upon Reliable TestNet JSON RPC and websocket. Scale your
              DApp and get prepared for the mainnet launch.
            </p>
            <Link href="/sui/" className="hover-arrow">
              Learn more
            </Link>
          </div>

          <div
            className="col-md-6 col-lg-3 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <img
              src="/assets/img/saas-sketch-5.svg"
              alt="Image"
              className="mb-4"
            />
            <h4 className={styles.h4}>EVM Blockchains</h4>
            <p className="px-xl-4">
              Ethereum, IoTeX, Solana, Filecoin, Harmony, BSC,
              Arbitrum, Optimism, Gnosis, Arbitrum Nova, EthStorage, etc.
            </p>
            <Link className="hover-arrow" href={beConfig.apis}>
              Explorer APIs
            </Link>
          </div>

          <div
            className="col-md-6 col-lg-3 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <img src="/img/discord.svg" alt="Image" className="mb-4" />
            <h4 className={styles.h4}>Superior support</h4>
            <p className="px-xl-4">
              Partner engineers at your service now. Singapore Time (SGT) Mon -
              Fri 7am - 3pm. Stay connected with the community.
            </p>
            <a href={beConfig.supportUrl} className="hover-arrow">
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
