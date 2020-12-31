import { Preset, DocusaurusContext } from "@docusaurus/types";
import Debug from "debug";

const debug = Debug("flayyer:docusaurus-preset");

export default function preset(context: DocusaurusContext, options: any): Preset {
  debug("creating preset with options: %O", options);
  return {
    themes: [[require.resolve("@flayyer/docusaurus-theme"), options]],
    plugins: [],
  };
}
