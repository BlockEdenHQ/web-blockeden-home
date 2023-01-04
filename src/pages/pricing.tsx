import Layout from "@theme/Layout";
import {Features} from "@site/src/components/features";
import {News} from "@site/src/components/news";
import {GetStarted} from "@site/src/components/get-started";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import {beConfig} from "../config";
import {CustomerReferences} from "@site/src/components/customer-references";
import {FaqItem} from "@site/src/components/faq-item";
import {useAos} from "@site/src/components/use-aos";
import {SeoHead} from "@site/src/components/seo-head";

export default function Pricing() {
  const {siteConfig} = useDocusaurusContext();
  useAos();
  return (
    <Layout
      title={"Pricing"}
      description={"Pricing plans for every team. Instant and reliable access to Aptos APIs, provided by BlockEden.xyz."}>
      <SeoHead/>

      <main>
        <>
          <section className="bg-primary-alt header-inner o-hidden">
            <div className="container">
              <div className="row my-3">
                <div className="col">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Pricing Plans
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="row py-6 text-center justify-content-center align-items-center">
                <div className="col-xl-8 col-lg-10">
                  <h1 className="display-4">Pricing plans for every team</h1>
                  <p className="lead mb-0">
                    Instant and reliable access to Aptos REST and GraphQL APIs and Sui Node, provided by BlockEden.xyz.
                  </p>
                </div>
              </div>
            </div>
            <div style={{height: "60px"}}/>
          </section>
          <section>
            <div className="container">
              <div className="row mb-4">
                <div className="col-md-3" data-aos="fade-up" data-aos-delay={100}>
                  <div className="card card-body align-items-center ">
                    <div className="pt-md-2">
                      <h4>Free</h4>
                    </div>
                    <div className="d-flex align-items-start pb-md-2">
                      <span className="h3">$</span>
                      <span className="display-4 mb-0">0</span>
                    </div>
                    <span className="text-small text-muted">per month</span>
                    <ul className="text-center list-unstyled my-2 my-md-4">
                      <li className="py-1">
                        <span>100,000 <Link href={"/docs/compute-unit/"}>CUs</Link> / day</span>
                      </li>
                      <li className="py-1">
                        <span>1 request / second</span>
                      </li>
                      <li className="py-1">
                        <span>1 project / network</span>
                      </li>
                      <li className="py-1">
                        <span>
                          Data analytics web portal
                        </span>
                      </li>
                      <li className="py-1">
                        <span>
                          No need to pay
                        </span>
                      </li>
                    </ul>
                    <a href="https://blockeden.xyz/dash/" className="btn btn-outline-primary">
                      Get started
                    </a>
                  </div>
                </div>
                <div className="col-md-3" data-aos="fade-up" data-aos-delay={200}>
                  <div className="card card-body align-items-center">
                    <div className="pt-md-2">
                      <h4>Pro</h4>
                    </div>
                    <div className="d-flex align-items-start pb-md-2">
                      <span className="h3">$</span>
                      <span className="display-4 mb-0">49</span>
                    </div>
                    <span className="text-small text-muted">per month</span>
                    <ul className="text-center list-unstyled my-2 my-md-4">
                      <li className="py-1">
                        <span>1,000,000 <Link href={"/docs/compute-unit/"}>CUs</Link> / day</span>
                      </li>
                      <li className="py-1">
                        <span>10 requests / second</span>
                      </li>
                      <li className="py-1">
                        <span>5 project / network</span>
                      </li>
                      <li className="py-1">
                        <span>
                          Data analytics web portal
                        </span>
                      </li>
                      <li className="py-1">
                        <span><Link href={"https://blockeden.xyz/dash/create-payment-subscription?planId=price_5UuXzatAZYDBJC2YZTKD&isCrypto=true"}>Pay with crypto</Link></span>
                      </li>
                    </ul>
                    <a href="https://blockeden.xyz/dash/create-payment-subscription"
                       className="btn btn-outline-primary">
                      Get started
                    </a>
                  </div>
                </div>
                <div className="col-md-3" data-aos="fade-up" data-aos-delay={300}>
                  <div className="card card-body align-items-center shadow-3d">
                    <span className="badge badge-top badge-dark">Most Popular</span>
                    <div className="pt-md-2">
                      <h4>Enterprise 50</h4>
                    </div>
                    <div className="d-flex align-items-start pb-md-2">
                      <span className="h3">$</span>
                      <span className="display-4 mb-0">200</span>
                    </div>
                    <span className="text-small text-muted">per month</span>
                    <ul className="text-center list-unstyled my-2 my-md-4">
                      <li className="py-1">
                        <span>4,320,000 <Link href={"/docs/compute-unit/"}>CUs</Link> / day</span>
                      </li>
                      <li className="py-1">
                        <span>50 requests / second</span>
                      </li>
                      <li className="py-1">
                        <span>25 project / network</span>
                      </li>
                      <li className="py-1">
                        <span>
                          Data analytics web portal
                        </span>
                      </li>
                      <li className="py-1">
                        <span><Link href={"https://blockeden.xyz/dash/create-payment-subscription?planId=price_Ve6AjMqzP6MdMUhdFk2u&isCrypto=true"}>Pay with crypto</Link></span>
                      </li>
                    </ul>
                    <a
                      href="https://blockeden.xyz/dash/create-payment-subscription?planId=price_1M0tNcEqsEqs2tLVbv29zQuk"
                      className="btn btn-primary">
                      Get started
                    </a>
                  </div>
                </div>
                <div className="col-md-3" data-aos="fade-up" data-aos-delay={400}>
                  <div className="card card-body align-items-center ">
                    <div className="pt-md-2">
                      <h4>custom</h4>
                    </div>
                    <div className="d-flex align-items-start pb-md-2">
                      <span className="display-4 mb-0">Custom</span>
                    </div>
                    <span className="text-small text-muted">per month</span>
                    <ul className="text-center list-unstyled my-2 my-md-4">
                      <li className="py-1">
                        <span>Customized</span>
                      </li>
                      <li className="py-1">
                        <span><Link href={"/docs/compute-unit/"}>CUs</Link> / day</span>
                      </li>
                      <li className="py-1">
                        <span>requests / second</span>
                      </li>
                      <li className="py-1">
                        <span>
                          Data analytics web portal
                        </span>
                      </li>
                      <li className="py-1">
                        <span>Pay with crypto</span>
                      </li>
                    </ul>
                    <a href={beConfig.supportUrl} className="btn btn-outline-primary">
                      Contact support
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
              <span>
                Interested in a custom plan? <a href={beConfig.supportUrl}>Get in touch</a>
              </span>
                </div>
              </div>
            </div>
          </section>


          <section className="pt-0">
            <div className="container text-center">
              <div className="row mb-5">
                <div className="col">
                  <h3>Team and advisors with a world-class background now at your service</h3>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9">
                  <ul className="d-flex flex-wrap justify-content-center list-unstyled">
                    <li className="mx-3 mb-5">
                      <img
                        className="icon icon-md"
                        src="https://tp-misc.b-cdn.net/blockeden/Google_2015_logo.svg.png"
                        alt="icon"

                      />
                    </li>
                    <li className="mx-3 mb-5">
                      <img
                        className="icon icon-md"
                        src="https://tp-misc.b-cdn.net/blockeden/Meta_lockup_positive%20primary_RGB.svg"
                        alt="icon"

                      />
                    </li>
                    <li className="mx-3 mb-5">
                      <img
                        className="icon icon-md"
                        src="https://tp-misc.b-cdn.net/blockeden/microsoft.svg"
                        alt="icon"
                      />
                    </li>
                    <li className="mx-3 mb-5">
                      <img
                        className="icon icon-md"
                        src="https://tp-misc.b-cdn.net/blockeden/Uber_Logo_Black.png"
                        alt="icon"

                      />
                    </li>
                    <li className="mx-3 mb-5">
                      <img
                        className="icon icon-md"
                        src="https://tp-misc.b-cdn.net/blockeden/yale-signature-sprite.svg"
                        alt="icon"

                      />
                    </li>
                    <li className="mx-3 mb-5">
                      <img
                        className="icon icon-md"
                        src="https://tp-misc.b-cdn.net/blockeden/NationalUniversityofSingapore.svg.png"
                        alt="icon"
                      />
                    </li>
                    <li className="mx-3 mb-5">
                      <img
                        className="icon icon-md"
                        src="https://tp-misc.b-cdn.net/blockeden/iotex-logo.png"
                        alt="icon"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>


          <CustomerReferences/>


          <section className="bg-primary-alt">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9">
                  <h3 className="h2">Frequently Asked Questions</h3>
                  <div className="my-4">
                    <FaqItem
                      delay={100}
                      question={"How do I start?"}
                      answer={
                        <div>You're only 5-minutes away from using the platform! BlockEden.xyz is open and self-serve,
                          so all you need to do is choose your tier, sign-up, then start using the developer platform!
                          To make getting started as easy as possible, we have a free tier and a simple,
                          step-by-step <Link href={"/docs/aptos/"}>Getting Started Guide</Link> on our docs.</div>
                      }
                    />

                    <FaqItem
                      delay={200}
                      question={"What is a compute unit (CU)?"}
                      answer={
                        <p>A compute unit measures how many resources an API method consumes, e.g., CPU, RAM, disk, etc.
                          For example, a simple REST request only consumes 1 CU, while a more complex GraphQL request
                          consumes 5 CUs. <Link href="/docs/compute-unit/" className="hover-arrow">
                            Learn more
                          </Link></p>
                      }
                    />

                    <FaqItem
                      delay={300}
                      question={"Can I pay with crypto?"}
                      answer={
                        <div>Yes, <a href={beConfig.supportUrl}>talk to us</a>.</div>
                      }
                    />

                  </div>

                  <span>
            Still have questions? <a href={beConfig.supportUrl}>Get in touch</a>
          </span>
                </div>
              </div>
            </div>
          </section>
        </>

      </main>
    </Layout>
  );
}
