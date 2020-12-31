import { FlayyerParams } from "@flayyer/flayyer";

export interface PluginFlayyerOptionItem<T>
  extends Pick<FlayyerParams<T>, "tenant" | "deck" | "template" | "version" | "extension"> {
  variables?: FlayyerParams<T>["variables"] | string[];
}
export interface PluginFlayyerOptions {
  main?: PluginFlayyerOptionItem<{ [key: string]: any }>;
  docs?: PluginFlayyerOptionItem<{ [key: string]: any }>;
  blog?: PluginFlayyerOptionItem<{ [key: string]: any }>;
}
