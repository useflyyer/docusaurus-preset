import { Preset, DocusaurusContext } from "@docusaurus/types";
import Debug from "debug";

const debug = Debug("flyyer:docusaurus-preset");

export default function preset(context: DocusaurusContext, options: any): Preset {
  debug("creating preset with options: %O", options);
  return {
    themes: [[require.resolve("@flyyer/docusaurus-theme"), options]],
    plugins: [],
  };
}
