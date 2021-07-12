/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useEffect } from "react";

// @ts-ignore
import { usePluginData } from "@docusaurus/useGlobalData";
import Debug from "debug";

import { PluginFlyyerOptions } from "./options";

const debug = Debug("flyyer:docusaurus-theme:utils");

export function useOptions() {
  const options: PluginFlyyerOptions = usePluginData("@flyyer/docusaurus-theme");

  useEffect(() => {
    debug("got from usePluginData: %O", options);
  }, [options]);

  return options;
}
