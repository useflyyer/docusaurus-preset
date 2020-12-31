/* eslint-disable @typescript-eslint/no-shadow */

import * as path from "path";

import { Plugin, DocusaurusContext } from "@docusaurus/types";
import Debug from "debug";

import { PluginFlayyerOptions } from "./options";

const debug = Debug("flayyer:docusaurus-theme");

type IPluginFlayyer = Plugin<PluginFlayyerOptions, unknown>;

class PluginFlayyer implements IPluginFlayyer {
  name: IPluginFlayyer["name"] = "@flayyer/docusaurus-theme";

  constructor(public readonly context: DocusaurusContext, public readonly options: PluginFlayyerOptions) {
    debug("creating instance of PluginFlayyer with options: %O", options);
  }

  loadContent: IPluginFlayyer["loadContent"] = async () => {
    debug("executing loadContent and will return 'this.options'");
    return this.options;
  };

  contentLoaded: IPluginFlayyer["contentLoaded"] = async ({ content, actions }) => {
    debug("executing contentLoaded", content, actions);
    actions.setGlobalData(content);
  };

  postBuild: IPluginFlayyer["postBuild"] = async (props) => {
    debug("executing postBuild");
    if (props.headTags.includes("flayyer.io")) {
      debug("head has flayyer.io images");
    } else {
      debug("head has not flayyer.io images");
    }
  };

  // getTypeScriptThemePath: IPluginFlayyer["getTypeScriptThemePath"] = () => {};

  getThemePath: IPluginFlayyer["getThemePath"] = () => {
    const folder = path.resolve(__dirname, "..", "..", "src", "theme"); // TODO: improve
    debug("executing getThemePath", folder);
    return folder;
  };

  injectHtmlTags2: IPluginFlayyer["injectHtmlTags"] = () => {
    debug("injectHtmlTags");
    // const flayer = new Flayyer({
    //   tenant: "flayyer",
    //   deck: "flayyer-docs",
    //   template: "page",
    // });
    return {
      headTags: [
        // {
        //   tagName: "meta",
        //   attributes: { property: "og:image", content: flayer.href() },
        // },
      ],
    };
  };
}

export default function (context: DocusaurusContext, options: PluginFlayyerOptions) {
  debug("will create theme with options: %O", options);
  return new PluginFlayyer(context, options);
}
