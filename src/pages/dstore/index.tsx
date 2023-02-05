import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import { useAos } from "@site/src/components/use-aos";
import { jarallax } from "jarallax";
import SVGInjector from "svg-injector";
import { HowItWorks } from "@site/src/pages/dstore/how-it-works";

export default function Dstore() {
  useAos();
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
    SVGInjector(document.querySelectorAll("img[data-inject-svg]"));
  }, []);
  return (
    <Layout>
      <section className="bg-primary-3 text-light text-center has-divider header-desktop-app">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9">
              <h1 className="display-3">
                Drag and drop onto a decentralized storage
              </h1>
              <p className="lead">
                dStore is a managed storage solution for creators and
                developers. It's user-friendly, EVM-compatible, low-cost, and
                petabyte-level scale, all powered by EthStorage.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center mt-4">
                <a
                  href="#"
                  className="btn btn-lg btn-primary mx-2 mb-2 mb-sm-0"
                >
                  Get started for Free
                </a>
                <a href="#" className="btn btn-lg btn-outline-primary mx-2">
                  <span>Learn more</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center mt-6"
            data-aos="fade-up"
            data-delay={100}
          >
            <div className="col-lg-10">
              <img
                src="assets/img/desktop-app-4.png"
                alt="Image"
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="divider">
          <img
            src="assets/img/dividers/divider-2.svg"
            alt="graphical divider"
            data-inject-svg
          />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mb-4 text-center">
            <div className="col">
              <h2 className="h1 display-4">Why build with dStore?</h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="icon-round bg-primary mx-auto mb-4">
                <img
                  className="icon bg-primary"
                  src="assets/img/icons/theme/general/shield-protected.svg"
                  alt="icon"
                  data-inject-svg
                />
              </div>
              <h4 className={"display-6"}>Security</h4>
              <p className="lead mx-xl-3">Secure uploads with access control</p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
              <div className="icon-round bg-primary mx-auto mb-4">
                <img
                  className="icon bg-primary"
                  src="assets/img/icons/theme/code/code.svg"
                  alt="icon"
                  data-inject-svg
                />
              </div>
              <h4 className={"display-6"}>Scalability</h4>
              <p className="lead mx-xl-3">Scalable for any size project</p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
              <div className="icon-round bg-primary mx-auto mb-4">
                <img
                  className="icon bg-primary"
                  src="assets/img/icons/theme/shopping/box-2.svg"
                  alt="icon"
                  data-inject-svg
                />
              </div>
              <h4 className={"display-6"}>Speed</h4>
              <p className="lead mx-xl-3">Blazing fast with our global CDN</p>
            </div>
          </div>
        </div>
      </section>
      <section className="has-divider bg-primary-2-alt">
        <div className="divider flip-y">
          <img
            src="assets/img/dividers/divider-2.svg"
            alt="graphical divider"
            data-inject-svg
          />
        </div>

        <HowItWorks />

        <div className="divider flip-x">
          <img
            src="assets/img/dividers/divider-3.svg"
            alt="graphical divider"
            data-inject-svg
          />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-around o-hidden">
            <div
              className="col-md-6 col-lg-5 mb-4 mb-md-0"
              data-aos="fade-right"
            >
              <img
                src="assets/img/desktop-app-1.jpg"
                alt="Image"
                className="rounded shadow"
              />
            </div>
            <div className="col-lg-5 col-md-6" data-aos="fade-left">
              <h3 className="h2 display-5">Trust-centric Access Control</h3>
              <p className="lead">
                Eject the managed directory to your self-sovereign address
                anytime.
              </p>
              <a href="#" className="lead hover-arrow">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-around flex-row-reverse o-hidden">
            <div
              className="col-md-6 col-lg-5 mb-4 mb-md-0"
              data-aos="fade-left"
            >
              <img
                src="assets/img/desktop-app-2.jpg"
                alt="Image"
                className="rounded shadow"
              />
            </div>
            <div className="col-lg-5 col-md-6" data-aos="fade-right">
              <h3 className="h2 display-5">Programmable API</h3>
              <p className="lead">
                The solution is friendly to artists with a web portal and
                programmable to developers with APIs.
              </p>
              <a href="#" className="lead hover-arrow">
                Start building
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-primary-3 text-light has-divider jarallax"
        data-jarallax
        data-speed="0.2"
      >
        <div className="divider flip-y">
          <img
            src="assets/img/dividers/divider-2.svg"
            alt="graphical divider"
            data-inject-svg
          />
        </div>
        <img
          src="assets/img/event-1.jpg"
          alt="Image"
          className="jarallax-img opacity-20"
        />
        <div className="container">
          <div className="row justify-content-center text-center min-vh-50 align-items-center">
            <div className="col-xl-8 col-lg-9 col-md-10">
              <a
                data-fancybox
                href="https://vimeo.com/40842620"
                className="btn btn-xlg btn-primary btn-round mx-auto mb-4"
                data-aos="fade-up"
              >
                <img
                  className="icon"
                  src="img/discord.svg"
                  alt="play icon"
                  data-inject-svg
                />
              </a>
              <h4 className="display-3">More than a storage</h4>
              <p className="lead">
                We are a community of web3 builders that establish long-term
                relationships with protocols, investors, and developers. We host
                managed node services and API gateways to blockchains. We are
                open for collaborations and ecosystem contributions.
              </p>
            </div>
          </div>
        </div>
        <div className="divider">
          <img
            src="assets/img/dividers/divider-2.svg"
            alt="graphical divider"
            data-inject-svg
          />
        </div>
      </section>
      {/*<section className="bg-primary-3 o-hidden has-divider">*/}
      {/*  <div className="container pb-4 text-light">*/}
      {/*    <div className="row justify-content-center text-center mb-6">*/}
      {/*      <div className="col-xl-8 col-lg-9">*/}
      {/*        <h2 className="display-4 mx-xl-6">Customers love Leap</h2>*/}
      {/*        <p className="lead">*/}
      {/*          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="controls-light arrows-inside highlight-selected mb-6" data-flickity="{ &quot;autoPlay&quot;: true, &quot;imagesLoaded&quot;: true, &quot;wrapAround&quot;: true }">*/}
      {/*    <div className="carousel-cell col-xl-3 col-lg-4 col-md-5 col-9 pb-1">*/}
      {/*      <div className="card card-body">*/}
      {/*        <div className="mb-3 mb-md-4">*/}
      {/*          <img src="assets/img/avatars/male-1.jpg" alt="Avatar" className="avatar avatar-lg" />*/}
      {/*        </div>*/}
      {/*        <div className="flex-grow-1 pt-md-3">*/}
      {/*          <h4>*/}
      {/*            “I couldn’t have done it without the team from Leap.”*/}
      {/*          </h4>*/}
      {/*        </div>*/}
      {/*        <div className="avatar-author d-block mt-2">*/}
      {/*          <h6>Benjamin Cameron</h6>*/}
      {/*          <span>Designer</span>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="carousel-cell col-xl-3 col-lg-4 col-md-5 col-9 pb-1">*/}
      {/*      <div className="card card-body">*/}
      {/*        <div className="mb-3 mb-md-4">*/}
      {/*          <img src="assets/img/avatars/male-4.jpg" alt="Avatar" className="avatar avatar-lg" />*/}
      {/*        </div>*/}
      {/*        <div className="flex-grow-1 pt-md-3">*/}
      {/*          <h4>*/}
      {/*            “It covers all bases for a bootstrapped startup!”*/}
      {/*          </h4>*/}
      {/*        </div>*/}
      {/*        <div className="avatar-author d-block mt-2">*/}
      {/*          <h6>Marco Origez</h6>*/}
      {/*          <span>Developer</span>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="carousel-cell col-xl-3 col-lg-4 col-md-5 col-9 pb-1">*/}
      {/*      <div className="card card-body">*/}
      {/*        <div className="mb-3 mb-md-4">*/}
      {/*          <img src="assets/img/avatars/female-4.jpg" alt="Avatar" className="avatar avatar-lg" />*/}
      {/*        </div>*/}
      {/*        <div className="flex-grow-1 pt-md-3">*/}
      {/*          <h4>*/}
      {/*            “I fell in love with the design immediately, the best.”*/}
      {/*          </h4>*/}
      {/*        </div>*/}
      {/*        <div className="avatar-author d-block mt-2">*/}
      {/*          <h6>Helen Shultz</h6>*/}
      {/*          <span>Business Owner</span>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="carousel-cell col-xl-3 col-lg-4 col-md-5 col-9 pb-1">*/}
      {/*      <div className="card card-body">*/}
      {/*        <div className="mb-3 mb-md-4">*/}
      {/*          <img src="assets/img/avatars/female-3.jpg" alt="Avatar" className="avatar avatar-lg" />*/}
      {/*        </div>*/}
      {/*        <div className="flex-grow-1 pt-md-3">*/}
      {/*          <h4>*/}
      {/*            “The team were very helpful, thrilled with Leap.”*/}
      {/*          </h4>*/}
      {/*        </div>*/}
      {/*        <div className="avatar-author d-block mt-2">*/}
      {/*          <h6>Annabelle Porter</h6>*/}
      {/*          <span>Designer</span>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="carousel-cell col-xl-3 col-lg-4 col-md-5 col-9 pb-1">*/}
      {/*      <div className="card card-body">*/}
      {/*        <div className="mb-3 mb-md-4">*/}
      {/*          <img src="assets/img/avatars/female-2.jpg" alt="Avatar" className="avatar avatar-lg" />*/}
      {/*        </div>*/}
      {/*        <div className="flex-grow-1 pt-md-3">*/}
      {/*          <h4>*/}
      {/*            “A fully-fledged design toolkit. I love this theme.”*/}
      {/*          </h4>*/}
      {/*        </div>*/}
      {/*        <div className="avatar-author d-block mt-2">*/}
      {/*          <h6>Gabby Kidman</h6>*/}
      {/*          <span>Business Owner</span>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="carousel-cell col-xl-3 col-lg-4 col-md-5 col-9 pb-1">*/}
      {/*      <div className="card card-body">*/}
      {/*        <div className="mb-3 mb-md-4">*/}
      {/*          <img src="assets/img/avatars/male-5.jpg" alt="Avatar" className="avatar avatar-lg" />*/}
      {/*        </div>*/}
      {/*        <div className="flex-grow-1 pt-md-3">*/}
      {/*          <h4>*/}
      {/*            “A beautifully detailed product without compromise.”*/}
      {/*          </h4>*/}
      {/*        </div>*/}
      {/*        <div className="avatar-author d-block mt-2">*/}
      {/*          <h6>Andrew Kingsman</h6>*/}
      {/*          <span>Business Owner</span>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="divider">*/}
      {/*    <img src="assets/img/dividers/divider-2.svg" alt="graphical divider" data-inject-svg />*/}
      {/*  </div>*/}
      {/*</section>*/}
      <section>
        <div className="container">
          <div className="row justify-content-center text-center mb-6">
            <div className="col-xl-8 col-lg-9">
              <h2 className="display-3 mx-xl-6">Built for scale</h2>
              <p className="lead">
                From new web3 creators, rising artist, builder with a new app,
                advanced developers and companys, to large brands and media
                companies, we got you covered with plans of all sizes.
              </p>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="card card-body align-items-center ">
                <div className="pt-md-2">
                  <h4>Free</h4>
                </div>
                <div className="d-flex align-items-start pb-md-2">
                  <span className="h3">$</span>
                  <span className="display-4 mb-0">0</span>
                </div>
                <span className="text-small text-muted">
                  Per user, per month
                </span>
                <ul className="text-center list-unstyled my-2 my-md-4">
                  <li className="py-1">
                    <span>10k Visitors/mo</span>
                  </li>
                  <li className="py-1">
                    <span>10 Funnels, 50 Pages</span>
                  </li>
                  <li className="py-1">
                    <span>Unlimited Transactions</span>
                  </li>
                  <li className="py-1">
                    <span>Analytics</span>
                  </li>
                  <li className="py-1">
                    <span>Integrations</span>
                  </li>
                  <li className="py-1">
                    <span className="text-muted text-strikethrough">
                      Audience Data
                    </span>
                  </li>
                  <li className="py-1">
                    <span className="text-muted text-strikethrough">
                      Premium Templates
                    </span>
                  </li>
                  <li className="py-1">
                    <span className="text-muted text-strikethrough">
                      White Labelling
                    </span>
                  </li>
                </ul>
                <a href="#" className="btn btn-outline-primary">
                  Get Basic
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="card card-body align-items-center shadow-3d">
                <span className="badge badge-top badge-dark">Most Popular</span>
                <div className="pt-md-2">
                  <h4>Professional</h4>
                </div>
                <div className="d-flex align-items-start pb-md-2">
                  <span className="h3">$</span>
                  <span className="display-4 mb-0">49</span>
                </div>
                <span className="text-small text-muted">
                  Per user, per month
                </span>
                <ul className="text-center list-unstyled my-2 my-md-4">
                  <li className="py-1">
                    <span>10k Visitors/mo</span>
                  </li>
                  <li className="py-1">
                    <span>10 Funnels, 50 Pages</span>
                  </li>
                  <li className="py-1">
                    <span>Unlimited Transactions</span>
                  </li>
                  <li className="py-1">
                    <span>Analytics</span>
                  </li>
                  <li className="py-1">
                    <span>Integrations</span>
                  </li>
                  <li className="py-1">
                    <span>Audience Data</span>
                  </li>
                  <li className="py-1">
                    <span>Premium Templates</span>
                  </li>
                  <li className="py-1">
                    <span className="text-muted text-strikethrough">
                      White Labelling
                    </span>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Get Pro
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <span>
                Need more than the starter packs above?{" "}
                <a href="/pricing" className="hover-arrow">
                  Check full pricing plans
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container text-center">
          <div className="row mb-5">
            <div className="col">
              <h5>Trusted by over 30,000 of the world’s leading companies</h5>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9">
              <ul className="d-flex flex-wrap justify-content-center list-unstyled">
                <li className="mx-3 mb-5">
                  <img
                    className="icon icon-md bg-primary-3 opacity-20"
                    src="assets/img/logos/brand/apple.svg"
                    alt="icon"
                    data-inject-svg
                  />
                </li>
                <li className="mx-3 mb-5">
                  <img
                    className="icon icon-md bg-primary-3 opacity-20"
                    src="assets/img/logos/brand/buzzfeed.svg"
                    alt="icon"
                    data-inject-svg
                  />
                </li>
                <li className="mx-3 mb-5">
                  <img
                    className="icon icon-md bg-primary-3 opacity-20"
                    src="assets/img/logos/brand/intercom.svg"
                    alt="icon"
                    data-inject-svg
                  />
                </li>
                <li className="mx-3 mb-5">
                  <img
                    className="icon icon-md bg-primary-3 opacity-20"
                    src="assets/img/logos/brand/slack.svg"
                    alt="icon"
                    data-inject-svg
                  />
                </li>
                <li className="mx-3 mb-5">
                  <img
                    className="icon icon-md bg-primary-3 opacity-20"
                    src="assets/img/logos/brand/spotify.svg"
                    alt="icon"
                    data-inject-svg
                  />
                </li>
                <li className="mx-3 mb-5">
                  <img
                    className="icon icon-md bg-primary-3 opacity-20"
                    src="assets/img/logos/brand/target.svg"
                    alt="icon"
                    data-inject-svg
                  />
                </li>
                <li className="mx-3 mb-5">
                  <img
                    className="icon icon-md bg-primary-3 opacity-20"
                    src="assets/img/logos/brand/time.svg"
                    alt="icon"
                    data-inject-svg
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="pb-4 bg-primary-3 text-light" id="footer">
        <div className="container">
          <div className="row mb-5">
            <div className="col">
              <div className="card1 card-body border-0 o-hidden m-0 shadow-3d text-light bg-primary">
                <div className="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center">
                  <h3
                    className="h3 text-center mb-md-0"
                    style={{ fontSize: "28px" }}
                  >
                    Build the next big thing with dStore
                  </h3>
                  <a href="/brand-assets" className="btn btn-lg btn-white">
                    Get started
                  </a>
                </div>
                <div className="decoration layer-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="338"
                    height="277"
                    viewBox="0 0 338 277"
                    fill="none"
                    data-inject-url="https://blockeden.xyz/assets/img/decorations/deco-blob-1.svg"
                    className="bg-primary-2"
                    data-inject-svg="true"
                  >
                    <path
                      d="M136.018 0.775024C143.338 0.998024 150.311 2.86002 157.217 4.90402C161.951 6.30502 166.533 8.21602 171.238 9.72702C177.683 11.799 184.205 13.642 190.654 15.704C198.047 18.067 205.496 20.302 212.734 23.077C219.181 25.549 225.818 26.16 232.576 26.624C242.613 27.313 252.408 29.541 262.14 31.958C267.613 33.318 273.015 35.013 278.376 36.777C286.159 39.338 292.769 43.771 298.435 49.705C300.869 52.253 303.482 54.662 306.224 56.875C310.91 60.658 314.185 65.568 317.597 70.391C317.999 70.957 318.31 71.699 318.861 72.031C323.925 75.085 326.72 80.024 329.47 84.928C331.605 88.738 333.45 92.72 335.236 96.711C335.974 98.361 336.533 100.215 336.629 102.006C336.979 108.465 337.936 114.881 337.352 121.411C336.889 126.604 336.916 131.868 337.11 137.086C337.676 152.284 335.641 167.235 333.401 182.2C331.815 192.802 330.878 203.502 329.278 214.101C328.417 219.807 327.28 225.578 325.321 230.976C323.759 235.279 321.196 239.409 318.317 243.006C311.585 251.42 303.104 257.68 292.893 261.414C288.381 263.064 283.952 265.016 279.332 266.275C273.076 267.98 266.711 269.338 260.33 270.509C250.605 272.292 240.844 273.878 231.07 275.381C220.672 276.98 210.306 277.306 199.939 274.719C194.33 273.32 188.527 272.723 182.869 271.504C166.828 268.049 151.043 263.651 135.754 257.669C130.918 255.776 126.25 253.478 122.199 249.956C118.49 246.731 113.928 244.469 110.316 241.155C103.357 234.766 96.6579 228.074 90.1249 221.245C84.3729 215.231 79.0449 208.814 73.4259 202.671C71.6229 200.7 69.3989 199.121 67.5219 197.212C61.8789 191.478 56.3579 185.624 50.6959 179.909C48.0139 177.202 45.0629 174.763 42.3439 172.091C39.7309 169.523 37.2799 166.791 34.7229 164.164C30.1899 159.507 25.8419 154.642 21.0319 150.288C14.4459 144.325 9.29194 137.288 4.85794 129.733C1.90494 124.702 0.404932 119.126 0.994932 113.109C1.35393 109.453 1.56894 105.873 3.02594 102.364C4.82294 98.043 7.59594 94.544 11.0199 91.581C16.4609 86.871 22.0179 82.28 27.7129 77.881C34.4159 72.703 41.2719 67.718 48.1519 62.774C53.0819 59.232 58.3649 56.157 63.1269 52.411C72.1059 45.348 81.2339 38.467 89.4079 30.405C96.0349 23.868 102.898 17.54 110.002 11.527C115.279 7.06004 121.135 3.23104 128.049 1.65704C130.639 1.07104 133.357 1.05302 136.018 0.775024ZM19.8459 102.8C15.5139 101.001 13.7579 101.522 12.1429 105.364C13.5239 105.867 14.8829 106.363 16.5709 106.978C16.7739 105.683 16.8949 104.912 16.9929 104.287C17.9989 103.763 18.9229 103.281 19.8479 102.799C21.2859 101.622 23.0749 100.717 23.4099 98.469C20.4119 98.883 20.4119 98.883 19.8459 102.8ZM118.352 15.815C117.153 17.925 116.342 19.402 117.231 21.328C119.746 19.487 119.773 19.382 118.352 15.815ZM36.2909 86.69C35.4119 88.799 34.8089 90.248 34.0939 91.961C37.8889 90.785 37.8889 90.785 36.2909 86.69ZM129.395 162.873C128.641 162.383 128.006 161.799 127.858 161.903C127.292 162.306 126.881 162.927 126.413 163.468C126.843 163.712 127.337 164.224 127.684 164.138C128.211 164.009 128.639 163.465 129.395 162.873ZM137.797 163.645C137.248 164.305 136.658 164.709 136.697 165.036C136.763 165.591 137.228 166.097 137.525 166.623C137.986 166.255 138.761 165.928 138.818 165.505C138.881 165.033 138.287 164.477 137.797 163.645ZM137.221 207.492C137.242 207.855 137.264 208.219 137.285 208.582C138.129 208.456 138.973 208.33 139.816 208.205C139.787 207.967 139.757 207.73 139.73 207.492C138.895 207.492 138.057 207.492 137.221 207.492ZM110.674 30.56C110.768 30.297 110.862 30.035 110.957 29.772C110.123 29.451 109.291 29.13 108.457 28.809C108.357 29.097 108.256 29.386 108.154 29.674C108.994 29.969 109.834 30.265 110.674 30.56ZM116.773 160.416C116.58 160.891 116.285 161.258 116.357 161.528C116.435 161.827 116.851 162.037 117.121 162.285C117.336 161.902 117.652 161.535 117.713 161.129C117.736 160.968 117.193 160.722 116.773 160.416ZM124.658 162.574C123.793 162.347 123.324 162.142 122.863 162.152C122.707 162.156 122.562 162.708 122.414 163.009C122.768 163.15 123.127 163.408 123.473 163.392C123.754 163.381 124.02 163.036 124.658 162.574ZM133.973 165.672C133.819 165.484 133.664 165.297 133.51 165.11C133.348 165.387 133.151 165.654 133.059 165.954C133.039 166.011 133.434 166.196 133.637 166.322C133.748 166.105 133.861 165.89 133.973 165.672ZM115.15 24.039C114.955 23.876 114.759 23.714 114.566 23.552C114.468 23.778 114.254 24.034 114.302 24.223C114.353 24.418 114.656 24.549 114.849 24.708C114.949 24.486 115.051 24.263 115.15 24.039Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-2">
            <div className="col-auto">
              <ul className="nav">
                <li className="nav-item">
                  <a href="https://github.com/blockedenhq" className="nav-link">
                    <img
                      className="icon "
                      src="assets/img/icons/social/github.svg"
                      alt="github social icon"
                      data-inject-svg
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://twitter.com/BlockedenHQ"
                    className="nav-link"
                  >
                    <img
                      className="icon "
                      src="assets/img/icons/social/twitter.svg"
                      alt="twitter social icon"
                      data-inject-svg
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://medium.com/@BlockEden.xyz"
                    className="nav-link"
                  >
                    <img
                      className="icon "
                      src="assets/img/icons/social/medium.svg"
                      alt="medium social icon"
                      data-inject-svg
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <a
        href="#"
        className="btn back-to-top btn-primary btn-round"
        data-smooth-scroll
        data-aos="fade-up"
        data-aos-offset={2000}
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <img
          className="icon"
          src="assets/img/icons/theme/navigation/arrow-up.svg"
          alt="arrow-up icon"
          data-inject-svg
        />
      </a>
      {/* Required vendor scripts (Do not remove) */}
      {/* Optional Vendor Scripts (Remove the plugin script here and comment initializer script out of index.js if site does not use that feature) */}
      {/* AOS (Animate On Scroll - animates elements into view while scrolling down) */}
      {/* Clipboard (copies content from browser into OS clipboard) */}
      {/* Fancybox (handles image and video lightbox and galleries) */}
      {/* Flatpickr (calendar/date/time picker UI) */}
      {/* Flickity (handles touch enabled carousels and sliders) */}
      {/* Ion rangeSlider (flexible and pretty range slider elements) */}
      {/* Isotope (masonry layouts and filtering) */}
      {/* jarallax (parallax effect and video backgrounds) */}
      {/* jQuery Countdown (displays countdown text to a specified date) */}
      {/* jQuery smartWizard facilitates steppable wizard content */}
      {/* Plyr (unified player for Video, Audio, Vimeo and Youtube) */}
      {/* Prism (displays formatted code boxes) */}
      {/* ScrollMonitor (manages events for elements scrolling in and out of view) */}
      {/* Smooth scroll (animation to links in-page)*/}
      {/* SVGInjector (replaces img tags with SVG code to allow easy inclusion of SVGs with the benefit of inheriting colors and styles)*/}
      {/* TwitterFetcher (displays a feed of tweets from a specified account)*/}
      {/* Typed text (animated typing effect)*/}
      {/* Required theme scripts (Do not remove) */}
      {/* Removes page load animation when window is finished loading */}
    </Layout>
  );
}
