/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/order */

import React, { useEffect } from "react";
import Debug from "debug";

import { Flyyer } from "@flyyer/flyyer";

// @ts-expect-error How to import?
import { useLocation } from "@docusaurus/router";
// @ts-expect-error How to import?
import Head from "@docusaurus/Head";
// @ts-expect-error How to import?
import InitialLayoutHead from "@theme-init/LayoutHead";
import type { Props } from "@theme/Layout";

import { useOptions } from "../utils";

const debug = Debug("flyyer:docusaurus-theme:theme:LayoutHead");

export default function LayoutHead(props: Props) {
  const options = useOptions();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const location = useLocation();

  useEffect(() => {
    debug("got from props: %O", props);
  }, [props]);

  let flyyerURL: string | null = null;
  try {
    if (options && options["flyyer"]) {
      const flyyer = new Flyyer({
        ...options["flyyer"],
        path: location.pathname,
      });
      flyyerURL = flyyer.href();
    } else {
      console.warn("Missing 'flyyer' config. Please check out https://docs.flyyer.io/guides/javascript/docusaurus");
    }
  } catch (err) {
    console.error("Failed to initialize Flyyer.io:", err);
  }

  useEffect(() => {
    debug("flyyer url is: %s", flyyerURL);
  }, [flyyerURL]);

  if (!flyyerURL) {
    return <InitialLayoutHead {...props} />;
  } else {
    return (
      <>
        <Head>
          <meta property="og:image" content={flyyerURL} />
          <meta name="twitter:image" content={flyyerURL} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="flyyer:title" content={props.title} />
          <meta property="flyyer:description" content={props.description} />
          <meta property="flyyer:default" content={props.image} />
        </Head>
        <InitialLayoutHead {...props} />
      </>
    );
  }
}
