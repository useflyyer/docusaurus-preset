/* eslint-disable @typescript-eslint/no-shadow */

import path from "path";

import { Plugin, DocusaurusContext } from "@docusaurus/types";
import Debug from "debug";

import { PluginFlyyerOptions } from "./options";

const debug = Debug("flayyer:docusaurus-theme");

type IPluginFlyyer = Plugin<PluginFlyyerOptions, unknown>;

class PluginFlyyer implements IPluginFlyyer {
  name: IPluginFlyyer["name"] = "@flayyer/docusaurus-theme";

  constructor(public readonly context: DocusaurusContext, public readonly options: PluginFlyyerOptions) {
    debug("creating instance of PluginFlyyer with options: %O", options);
  }

  loadContent: IPluginFlyyer["loadContent"] = async () => {
    debug("executing loadContent and will return 'this.options'");
    return this.options;
  };

  contentLoaded: IPluginFlyyer["contentLoaded"] = async ({ content, actions }) => {
    debug("executing contentLoaded", content, actions);
    actions.setGlobalData(content);
  };

  postBuild: IPluginFlyyer["postBuild"] = async (props) => {
    debug("executing postBuild");
    if (props.headTags.includes("flayyer.io")) {
      debug("head has flayyer.io images");
    } else {
      debug("head has not flayyer.io images");
    }
  };

  // getTypeScriptThemePath: IPluginFlyyer["getTypeScriptThemePath"] = () => {};

  getThemePath: IPluginFlyyer["getThemePath"] = () => {
    const folder = path.resolve(__dirname, "theme");
    debug("executing getThemePath", folder);
    return folder;
  };

  injectHtmlTags2: IPluginFlyyer["injectHtmlTags"] = () => {
    debug("injectHtmlTags");
    // const flayer = new Flyyer({
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

export default function (context: DocusaurusContext, options: PluginFlyyerOptions) {
  debug("will create theme with options: %O", options);
  return new PluginFlyyer(context, options);
}
