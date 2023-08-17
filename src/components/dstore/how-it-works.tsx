import React, { useState } from "react";
import classNames from "classnames";

export const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container pt-3 pb-0">
      <div className="row justify-content-center text-center mb-6">
        <div className="col-xl-8 col-lg-9">
          <h2 className="display-3 mx-xl-6">How it works?</h2>
          <p className="lead">
            Login to our dashboard and drag and drop your files from your local
            to the distributed storage network. It’s easy like that - No need
            for private key or signatures.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
          <ul className="nav flex-column" role="tablist">
            <li className="nav-item">
              <a
                className={classNames("nav-link btn btn-light p-2 text-left", {
                  active: activeIndex === 0,
                })}
                href="@site/src/components/how-it-works.tsx#app-tab-1"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(0);
                }}
                data-toggle="tab"
                aria-controls="app-tab-1"
                aria-selected="true"
                role="tab"
              >
                <img
                  className="icon bg-primary"
                  src="/assets/img/icons/theme/design/subtract.svg"
                  alt="subtract icon"
                  data-inject-svg
                />
                Architecture
              </a>
            </li>
            <li className="nav-item">
              <a
                className={classNames("nav-link btn btn-light p-2 text-left", {
                  active: activeIndex === 1,
                })}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(1);
                }}
                href="@site/src/components/how-it-works.tsx#app-tab-2"
                data-toggle="tab"
                aria-controls="app-tab-2"
                aria-selected="false"
                role="tab"
              >
                <img
                  className="icon bg-primary"
                  src="/assets/img/icons/theme/design/pixels.svg"
                  alt="pixels icon"
                  data-inject-svg
                />
                Drag and drop
              </a>
            </li>
            <li className="nav-item">
              <a
                className={classNames("nav-link btn btn-light p-2 text-left", {
                  active: activeIndex === 2,
                })}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(2);
                }}
                href="@site/src/components/how-it-works.tsx#app-tab-3"
                data-toggle="tab"
                aria-controls="app-tab-3"
                aria-selected="false"
                role="tab"
              >
                <img
                  className="icon bg-primary"
                  src="/assets/img/icons/theme/design/saturation.svg"
                  alt="saturation icon"
                  data-inject-svg
                />
                Get links
              </a>
            </li>
          </ul>
        </div>
        <div className="col mb-lg-n7 layer-2">
          <div className="tab-content">
            <div
              className={classNames("tab-pane", {
                active: activeIndex === 0,
                show: activeIndex === 0,
              })}
              id="app-tab-1"
              role="tabpanel"
              aria-labelledby="app-tab-1"
            >
              <div className="popover-image">
                <img
                  src="https://tp-misc.b-cdn.net/blockeden/dstore-arch-pub-v2.png"
                  alt="Image"
                  className="rounded shadow-lg"
                />
              </div>
            </div>
            <div
              className={classNames("tab-pane", {
                active: activeIndex === 1,
                show: activeIndex === 1,
              })}
              id="app-tab-2"
              role="tabpanel"
              aria-labelledby="app-tab-2"
            >
              <div className="popover-image">
                <img
                  src="https://tp-misc.b-cdn.net/blockeden/dstore-drag-and-drop-1.png"
                  alt="Image"
                  className="rounded shadow-lg"
                />
              </div>
            </div>
            <div
              className={classNames("tab-pane", {
                active: activeIndex === 2,
                show: activeIndex === 2,
              })}
              id="app-tab-3"
              role="tabpanel"
              aria-labelledby="app-tab-3"
            >
              <div className="popover-image">
                <img
                  src="https://tp-misc.b-cdn.net/blockeden/dstore-menu.png"
                  alt="Image"
                  className="rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
