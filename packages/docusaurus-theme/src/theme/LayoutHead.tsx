/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/order */

import React, { useEffect } from "react";
import Debug from "debug";

import { useFlyyer } from "@flyyer/flyyer-hook";

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

  const flyyer = useFlyyer({
    ...options,
    path: location.pathname,
  });

  useEffect(() => {
    debug("flyyer url is: %s", flyyer?.href());
  }, [flyyer]);

  if (!flyyer) {
    return <InitialLayoutHead {...props} />;
  } else {
    return (
      <>
        <Head>
          <meta property="og:image" content={flyyer.href()} />
          <meta name="twitter:image" content={flyyer.href()} />
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
