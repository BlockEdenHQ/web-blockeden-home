import OriginalFooter from "@theme-original/Footer";
import React, { useTransition } from "react";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/core/lib/client/exports/useBaseUrl";

function Footer(props: {}) {
  const dogImg = useBaseUrl("/img/favicon.png");

  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div
              className="margin-top--lg"
              style={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <div style={{ flexGrow: 1 }}>
                <iframe
                  src="https://blockedenxyz.substack.com/embed"
                  width={"100%"}
                  height={320}
                  style={{ border: "0px solid #EEE", background: "#111827" }}
                  frameBorder={0}
                  scrolling="no"
                  title={translate({
                    message: "Newsletter iframe",
                    description: "The title for the newsletter iframe",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OriginalFooter {...props} />
    </div>
  );
}

export default Footer;
