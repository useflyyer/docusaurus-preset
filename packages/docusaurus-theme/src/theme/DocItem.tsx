/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/order */

import React, { useEffect } from "react";
import Debug from "debug";

import { useFlayyer } from "@flayyer/flayyer-hook";

// @ts-ignore
import Head from "@docusaurus/Head";
// @ts-ignore
import InitialDocItem from "@theme-init/DocItem";
import type { Props } from "@theme/DocItem";

import { CONVERT_VARIABLES, useOptions } from "../utils";

const debug = Debug("flayyer:docusaurus-theme:theme:DocItem");

export default function DocItem(props: Props) {
  const options = useOptions();

  useEffect(() => {
    debug("got from props.content: %O", props.content);
  }, [props.content]);

  const flayyer = useFlayyer({
    tenant: options.docs?.tenant,
    deck: options.docs?.deck,
    template: options.docs?.template,
    extension: options.docs?.extension,
    version: options.docs?.version,
    variables: CONVERT_VARIABLES(options.docs?.variables, props.content.metadata),
    meta: {
      id: props.content.frontMatter.id,
    },
  });

  useEffect(() => {
    debug("flayyer url is: %s", flayyer?.href());
  }, [flayyer]);

  if (!flayyer) {
    return <InitialDocItem {...props} />;
  } else {
    return (
      <>
        <Head>
          <meta property="og:image" content={flayyer.href()} />
          <meta name="twitter:image" content={flayyer.href()} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <InitialDocItem {...props} />
      </>
    );
  }
}
