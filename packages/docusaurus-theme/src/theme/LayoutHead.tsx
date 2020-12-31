/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/order */

import React, { useEffect } from "react";
import Debug from "debug";

import { useFlayyer } from "@flayyer/flayyer-hook";

// @ts-ignore
import Head from "@docusaurus/Head";
// @ts-ignore
import InitialLayoutHead from "@theme-init/LayoutHead";
import type { Props } from "@theme/Layout";

import { CONVERT_VARIABLES, useOptions } from "../utils";

const debug = Debug("flayyer:docusaurus-theme:theme:LayoutHead");

export default function LayoutHead(props: Props) {
  const options = useOptions();

  useEffect(() => {
    debug("got from props: %O", props);
  }, [props]);

  const flayyer = useFlayyer({
    tenant: options.main?.tenant,
    deck: options.main?.deck,
    template: options.main?.template,
    extension: options.main?.extension,
    version: options.main?.version,
    variables: CONVERT_VARIABLES(options.main?.variables, props),
    meta: {
      id: props.title,
    },
  });

  useEffect(() => {
    debug("flayyer url is: %s", flayyer?.href());
  }, [flayyer]);

  if (!flayyer) {
    return <InitialLayoutHead {...props} />;
  } else {
    return (
      <>
        <Head>
          <meta property="og:image" content={flayyer.href()} />
          <meta name="twitter:image" content={flayyer.href()} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <InitialLayoutHead {...props} />
      </>
    );
  }
}
