import React from "react";
import Layout from "@theme/Layout";
import { Project } from "@site/src/components/dapp-shop-components/dapp-shop-types";
import { DappGallery } from "@site/src/components/dapp-gallery";
import { shuffle } from "@site/src/components/shuffle";
import Link from "@docusaurus/Link";
import { slugify } from "@site/src/components/slugify";
import projects from "../../projects-data.json";
import { SeoHead } from "@site/src/components/seo-head";

const DappTemplate: React.FC = () => {
  const project: Project = {"id":"rec8eVMGevbzrbzi9","name":"Arda","introduction":"Tools for institutions to manage risk in DeFi","website":"https://arda.finance/","twitter":"https://twitter.com/ardafinance","marketCap":null,"tokenSymbol":null,"logoUrl":null,"explorerUrl":null,"mediumUrl":null,"redditUrl":null,"githubUrl":null,"whitepaperUrl":null,"tags":[{"id":"recOb6SjNtgrJ8uvy","name":"Y Combinator"}],"chains":[]};

  return (
    <Layout title={project.name} description={project.introduction}>
      <SeoHead title={project.name} description={project.introduction} />

      <section className="bg-primary-alt header-inner">
        <div className="container">
          <div className="row my-3">
            <div className="col">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href={`/dapp/${slugify(project.tags[0].name)}`}>
                      {project.tags[0].name}
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href={`/dapp/${slugify(project.name)}`}>
                      {project.name}
                    </Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {project.logoUrl && (
            <div className="row justify-content-center my-4">
              <div className="col-auto">
                <img
                  src={project.logoUrl}
                  alt="Logo"
                  className="icon icon-lg"
                />
              </div>
            </div>
          )}

          <div className="row justify-content-center text-center">
            <div className="col-lg-9 col-xl-8">
              <h1>{project.name}</h1>
            </div>
          </div>
          <div className="row my-6 justify-content-between">
            <div className="col-lg-7 col-xl-8 mb-3 mb-lg-0">
              <img
                src="/assets/img/article-3.jpg"
                alt="Image"
                className="rounded"
              />
            </div>
            <div className="col-lg-4 col-xl-3">
              <div className="mb-3">
                <h6 className="mb-1">Description</h6>
                <p>{project.introduction}</p>
              </div>
              <div className="mb-3">
                <h6 className="mb-1">Chains</h6>
                <span>{project.chains.map((it) => it.name).join(", ")}</span>
              </div>

              {project.website && (
                <div className="mb-3">
                  <h6 className="mb-1">Website</h6>
                  <a href={project.website}>{project.website}</a>
                </div>
              )}

              {project.twitter && (
                <div className="mb-3">
                  <h6 className="mb-1">Twitter</h6>
                  <a href={project.twitter}>{project.twitter}</a>
                </div>
              )}
            </div>
          </div>
        </div>
        {/*<div className="divider">*/}
        {/*  <svg*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    xmlnsXlink="http://www.w3.org/1999/xlink"*/}
        {/*    width="100%"*/}
        {/*    height="96px"*/}
        {/*    viewBox="0 0 100 100"*/}
        {/*    version="1.1"*/}
        {/*    preserveAspectRatio="none"*/}
        {/*    className="injected-svg"*/}
        {/*    data-src="assets/img/dividers/divider-1.svg"*/}
        {/*  >*/}
        {/*    <path d="M0,0 C40,33 66,52 75,52 C83,52 92,33 100,0 L100,100 L0,100 L0,0 Z" />*/}
        {/*  </svg>*/}
        {/*</div>*/}
      </section>

      {/*<section className="p-0" data-reading-position="">*/}
      {/*  <div className="container">*/}
      {/*    <div className="row justify-content-center">*/}
      {/*      <div className="col-xl-7 col-lg-8 col-md-10">*/}
      {/*        <article className="article">*/}
      {/*          <p className="lead">*/}
      {/*            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut*/}
      {/*            fugit, sed quia consequuntur magni dolores eos qui ratione*/}
      {/*            voluptatem sequi nesciunt.*/}
      {/*          </p>*/}
      {/*          <p>*/}
      {/*            Sed ut perspiciatis unde omnis iste natus error sit voluptatem*/}
      {/*            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa*/}
      {/*            quae ab illo inventore veritatis et quasi architecto beatae vitae*/}
      {/*            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit*/}
      {/*            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores*/}
      {/*            eos qui ratione voluptatem sequi nesciunt.*/}
      {/*          </p>*/}
      {/*          <p>*/}
      {/*            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,*/}
      {/*            consectetur, adipisci velit, sed quia non numquam eius modi tempora*/}
      {/*            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut*/}
      {/*            enim ad minima veniam, quis nostrum exercitationem ullam corporis*/}
      {/*            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis*/}
      {/*            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam*/}
      {/*            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo*/}
      {/*            voluptas nulla pariatur?*/}
      {/*          </p>*/}
      {/*          <h4>A heading to shift focus</h4>*/}
      {/*          <p>*/}
      {/*            At vero eos et accusamus et iusto odio dignissimos ducimus qui*/}
      {/*            blanditiis praesentium voluptatum deleniti atque corrupti quos*/}
      {/*            dolores et quas molestias excepturi sint occaecati cupiditate non*/}
      {/*            provident, similique sunt in culpa qui officia deserunt mollitia*/}
      {/*            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis*/}
      {/*            est et expedita distinctio. Nam libero tempore, cum soluta nobis est*/}
      {/*            eligendi optio cumque nihil impedit quo minus id quod maxime placeat*/}
      {/*            facere possimus, omnis voluptas assumenda est, omnis dolor*/}
      {/*            repellendus.*/}
      {/*          </p>*/}
      {/*          <figure>*/}
      {/*            <img*/}
      {/*              src="assets/img/article-9.jpg"*/}
      {/*              alt="Image"*/}
      {/*              className="rounded"*/}
      {/*            />*/}
      {/*            <figcaption>A caption to describe the image</figcaption>*/}
      {/*          </figure>*/}
      {/*          <p>*/}
      {/*            Aliquid ex ea commodi consequatur? Quis autem vel eum iure*/}
      {/*            reprehenderit qui in ea voluptate velit esse quam nihil molestiae*/}
      {/*            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla*/}
      {/*            pariatur?*/}
      {/*          </p>*/}
      {/*          <blockquote className="bg-primary-alt">*/}
      {/*            <div className="h3 mb-2">*/}
      {/*              “We couldn’t have done it without the hard-working team from*/}
      {/*              Leap.”*/}
      {/*            </div>*/}
      {/*            <span className="text-small text-muted">*/}
      {/*        – Harvey Dent (via Tareq I.)*/}
      {/*      </span>*/}
      {/*            <a href="#" className="btn btn-primary btn-sm">*/}
      {/*              <svg*/}
      {/*                xmlns="http://www.w3.org/2000/svg"*/}
      {/*                role="img"*/}
      {/*                viewBox="0 0 24 24"*/}
      {/*                className="injected-svg icon"*/}
      {/*                data-src="assets/img/icons/social/twitter.svg"*/}
      {/*                xmlnsXlink="http://www.w3.org/1999/xlink"*/}
      {/*              >*/}
      {/*                <title>Twitter icon</title>*/}
      {/*                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />*/}
      {/*              </svg>*/}
      {/*              <span>Tweet</span>*/}
      {/*            </a>*/}
      {/*          </blockquote>*/}
      {/*          <p>*/}
      {/*            Sed ut perspiciatis unde omnis iste natus error sit voluptatem*/}
      {/*            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa*/}
      {/*            quae ab illo inventore veritatis et quasi architecto beatae vitae*/}
      {/*            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit*/}
      {/*            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores*/}
      {/*            eos qui ratione voluptatem sequi nesciunt.*/}
      {/*          </p>*/}
      {/*          <h5>A minor heading to summarise</h5>*/}
      {/*          <p>*/}
      {/*            Sed quia non numquam eius modi tempora incidunt ut labore et dolore*/}
      {/*            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis*/}
      {/*            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut*/}
      {/*            aliquid ex ea commodi consequatur?*/}
      {/*          </p>*/}
      {/*          <ul>*/}
      {/*            <li>*/}
      {/*              Ut enim ad minima veniam, quis nostrum exercitationem ullam*/}
      {/*              corporis suscipit laboriosam*/}
      {/*            </li>*/}
      {/*            <li>Corporis suscipit laboriosam</li>*/}
      {/*            <li>Aspernatur aut odit aut fugit eos qui ratione</li>*/}
      {/*            <li>Et quasi</li>*/}
      {/*          </ul>*/}
      {/*        </article>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*<section className="has-divider">*/}
      {/*  <div className="container pt-3">*/}
      {/*    <div className="row justify-content-center">*/}
      {/*      <div className="col-xl-7 col-lg-8 col-md-10">*/}
      {/*        <hr />*/}
      {/*        <div className="d-flex align-items-center">*/}
      {/*          <span className="text-small mr-1">Share this DApp:</span>*/}
      {/*          <div className="d-flex mx-2">*/}
      {/*            <a href="#" className="btn btn-round btn-primary mx-1">*/}
      {/*              <svg*/}
      {/*                xmlns="http://www.w3.org/2000/svg"*/}
      {/*                role="img"*/}
      {/*                viewBox="0 0 24 24"*/}
      {/*                className="injected-svg icon icon-sm"*/}
      {/*                data-src="assets/img/icons/social/twitter.svg"*/}
      {/*                xmlnsXlink="http://www.w3.org/1999/xlink"*/}
      {/*              >*/}
      {/*                <title>Twitter icon</title>*/}
      {/*                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />*/}
      {/*              </svg>*/}
      {/*            </a>*/}
      {/*            <a href="#" className="btn btn-round btn-primary mx-1">*/}
      {/*              <svg*/}
      {/*                xmlns="http://www.w3.org/2000/svg"*/}
      {/*                role="img"*/}
      {/*                viewBox="0 0 24 24"*/}
      {/*                className="injected-svg icon icon-sm"*/}
      {/*                data-src="assets/img/icons/social/facebook.svg"*/}
      {/*                xmlnsXlink="http://www.w3.org/1999/xlink"*/}
      {/*              >*/}
      {/*                <title>Facebook icon</title>*/}
      {/*                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />*/}
      {/*              </svg>*/}
      {/*            </a>*/}
      {/*            <a href="#" className="btn btn-round btn-primary mx-1">*/}
      {/*              <svg*/}
      {/*                xmlns="http://www.w3.org/2000/svg"*/}
      {/*                role="img"*/}
      {/*                viewBox="0 0 24 24"*/}
      {/*                className="injected-svg icon icon-sm"*/}
      {/*                data-src="assets/img/icons/social/linkedin.svg"*/}
      {/*                xmlnsXlink="http://www.w3.org/1999/xlink"*/}
      {/*              >*/}
      {/*                <title>LinkedIn icon</title>*/}
      {/*                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />*/}
      {/*              </svg>*/}
      {/*            </a>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <hr />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="divider">*/}
      {/*    <svg*/}
      {/*      xmlns="http://www.w3.org/2000/svg"*/}
      {/*      xmlnsXlink="http://www.w3.org/1999/xlink"*/}
      {/*      width="100%"*/}
      {/*      height="96px"*/}
      {/*      viewBox="0 0 100 100"*/}
      {/*      version="1.1"*/}
      {/*      preserveAspectRatio="none"*/}
      {/*      className="injected-svg bg-primary-alt"*/}
      {/*      data-src="assets/img/dividers/divider-1.svg"*/}
      {/*    >*/}
      {/*      <path d="M0,0 C40,33 66,52 75,52 C83,52 92,33 100,0 L100,100 L0,100 L0,0 Z" />*/}
      {/*    </svg>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <section className="bg-primary-alt">
        <div className="container">
          <div className="row mb-4">
            <h3 className="h2">Related DApps</h3>
          </div>

          <DappGallery
            projects={shuffle(
              projects.data.projects.filter(
                (p) =>
                  p?.tags?.some((t) => t?.id === project.tags[0]?.id) ||
                  p?.chains?.some((t) => t?.id === project.chains[0]?.id)
              )
            ).slice(0, 3)}
            viewMore={`/dapp/${slugify(project.tags[0].name)}/`}
          />
        </div>
      </section>
    </Layout>
  );
};

export default DappTemplate;
