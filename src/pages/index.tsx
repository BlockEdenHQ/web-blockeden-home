import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hls from "hls.js";
import styles from "./index.module.css";
import { GetStarted } from "@site/src/components/get-started";
import { News } from "@site/src/components/news";
import { Features } from "@site/src/components/features";
import { beConfig } from "../config";
import { useAos } from "@site/src/components/use-aos";
import { SeoHead } from "@site/src/components/seo-head";
import { SlidingLogos } from "@site/src/components/sliding-logos";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const videoRef = useRef<HTMLVideoElement>();
  const sourceRef = useRef<HTMLSourceElement>();
  useAos();

  useEffect(() => {
    const videoSrc =
      "https://customer-wmy0lgubd5pjy3fx.cloudflarestream.com/ff109bde61cd702f3c42aeae450244b4/manifest/video.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(videoRef?.current);
    }
    // HLS.js is not supported on platforms that do not have Media Source
    // Extensions (MSE) enabled.
    //
    // When the browser has built-in HLS support (check using `canPlayType`),
    // we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video
    // element through the `src` property. This is using the built-in support
    // of the plain video element, without using HLS.js.
    //
    // Note: it would be more normal to wait on the 'canplay' event below however
    // on Safari (where you are most likely to find built-in HLS support) the
    // video.src URL must be on the user-driven white-list before a 'canplay'
    // event will be emitted; the last video event that can be reliably
    // listened-for when the URL is not on the white-list is 'loadedmetadata'.
    else if (
      videoRef.current &&
      videoRef.current.canPlayType("application/vnd.apple.mpegurl")
    ) {
      sourceRef.current.type = "application/x-mpegURL";
      videoRef.current.src = videoSrc;
      videoRef.current.setAttribute("playsinline", "true");
    }
  }, []);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <video
        className={styles.videoStream}
        autoPlay
        muted
        loop
        preload="true"
        poster="https://customer-wmy0lgubd5pjy3fx.cloudflarestream.com/ff109bde61cd702f3c42aeae450244b4/thumbnails/thumbnail.jpg"
        ref={videoRef}
      >
        <source ref={sourceRef} />
      </video>
      <div className={clsx("container", styles.heroContainer)}>
        <div className="row align-items-center min-vh-50">
          <div className="col-lg-6 text-center text-lg-left mb-lg-0 m-4">
            <h1 className="hero__title">{siteConfig.tagline}</h1>
            <div className="my-4">
              <p className="lead">{beConfig.description}</p>
            </div>

            <a
              className={clsx("btn btn-lg btn-primary", styles.noShadow)}
              href={beConfig.signUp}
            >
              Get started for free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={beConfig.title} description={siteConfig.tagline}>
      <SeoHead />

      <HomepageHeader />
      <main>
        <SlidingLogos />
        <Features />
        <News />
        <GetStarted />
      </main>
    </Layout>
  );
}
