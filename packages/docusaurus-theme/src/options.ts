import { FlyyerParams } from "@flyyer/flyyer";

export type PluginFlyyerOptions = Pick<FlyyerParams<any>, "project" | "extension" | "version" | "variables">;
