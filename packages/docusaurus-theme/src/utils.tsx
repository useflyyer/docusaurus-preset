/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useEffect } from "react";

// @ts-ignore
import { usePluginData } from "@docusaurus/useGlobalData";
import { Metadata } from "@theme/DocItem";
import Debug from "debug";
import pick from "lodash/pick";
import templite from "templite";

import { PluginFlayyerOptions } from "./options";

const debug = Debug("flayyer:docusaurus-theme:utils");

/**
 * Convert meta data from the markdown files to Flayyer variables.
 * @example
 * ---
 * id: 123
 * title: This is metadata
 * ---
 * @example
 * const variables = CONVERT_VARIABLES(["title"], props.content.metadata);
 * const variables = CONVERT_VARIABLES({ title: "{{id}} - {{title}}" }, props.content.metadata);
 */
export function CONVERT_VARIABLES(variables: any, meta: Metadata): any {
  if (!variables) {
    debug("variables where empty: %O", variables);
    return {};
  } else if (Array.isArray(variables)) {
    debug("variables is a list with keys: %o", variables);
    // Use `variables` as a whilelist for values coming from `meta`.
    return pick(meta, variables);
  } else {
    debug("variables is an object and will use 'templite' for replacement: %o", variables);
    const object: any = {};
    for (const [key, value] of Object.entries(variables)) {
      object[key] = templite(value, meta);
    }
    return object;
  }
}

export function useOptions() {
  const options: PluginFlayyerOptions = usePluginData("@flayyer/docusaurus-theme");

  useEffect(() => {
    debug("got from usePluginData: %O", options);
  }, [options]);

  return options;
}
