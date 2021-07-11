/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/order */

import React, { useEffect } from "react";
import Debug from "debug";

import { useFlyyer } from "@flyyer/flyyer-hook";

// @ts-ignore
import Head from "@docusaurus/Head";
// @ts-ignore
import InitialBlogPostItem from "@theme-init/BlogPostItem";
import type { Props } from "@theme/BlogPostItem";

import { CONVERT_VARIABLES, useOptions } from "../utils";

const debug = Debug("flyyer:docusaurus-theme:theme:BlogPostItem");

export default function BlogPostItem(props: Props) {
  const options = useOptions();

  useEffect(() => {
    debug("got from props.metadata: %O", props.metadata);
    debug("got from props.frontMatter: %O", props.frontMatter);
  }, [props.metadata, props.frontMatter]);

  const flyyer = useFlyyer({
    tenant: options.blog?.tenant,
    deck: options.blog?.deck,
    template: options.blog?.template,
    extension: options.blog?.extension,
    version: options.blog?.version,
    variables: CONVERT_VARIABLES(options.blog?.variables, props.metadata),
    meta: {
      id: props.metadata.permalink,
    },
  });

  useEffect(() => {
    debug("flyyer url is: %s", flyyer?.href());
  }, [flyyer]);

  if (!flyyer) {
    return <InitialBlogPostItem {...props} />;
  } else {
    return (
      <>
        <Head>
          <meta property="og:image" content={flyyer.href()} />
          <meta name="twitter:image" content={flyyer.href()} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <InitialBlogPostItem {...props} />
      </>
    );
  }
}
