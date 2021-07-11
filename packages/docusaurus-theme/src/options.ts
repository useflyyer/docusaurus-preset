import { FlyyerParams } from "@flyyer/flyyer";

export interface PluginFlyyerOptionItem<T>
  extends Pick<FlyyerParams<T>, "tenant" | "deck" | "template" | "version" | "extension"> {
  variables?: FlyyerParams<T>["variables"] | string[];
}
export interface PluginFlyyerOptions {
  main?: PluginFlyyerOptionItem<{ [key: string]: any }>;
  docs?: PluginFlyyerOptionItem<{ [key: string]: any }>;
  blog?: PluginFlyyerOptionItem<{ [key: string]: any }>;
}
