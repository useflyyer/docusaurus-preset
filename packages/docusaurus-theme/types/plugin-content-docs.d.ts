/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable camelcase */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/ban-types */

/// <reference types="@docusaurus/module-type-aliases" />
/// <reference types="@docusaurus/plugin-content-blog" />
/// <reference types="@docusaurus/plugin-content-docs" />
/// <reference types="@docusaurus/plugin-content-pages" />

/**
 * @see https://github.com/facebook/docusaurus/blob/master/packages/docusaurus-plugin-content-docs/src/plugin-content-docs.d.ts
 */
declare module "@docusaurus/plugin-content-docs-types" {
  export type PermalinkToSidebar = {
    [permalink: string]: string;
  };

  export type PropVersionMetadata = {
    pluginId: string;
    version: string;
    label: string;
    isLast: boolean;
    docsSidebars: PropSidebars;
    permalinkToSidebar: PermalinkToSidebar;
  };

  type PropsSidebarItemBase = {
    customProps?: object;
  };

  export type PropSidebarItemLink = PropsSidebarItemBase & {
    type: "link";
    href: string;
    label: string;
  };

  export type PropSidebarItemCategory = PropsSidebarItemBase & {
    type: "category";
    label: string;
    items: PropSidebarItem[];
    collapsed?: boolean;
  };

  export type PropSidebarItem = PropSidebarItemLink | PropSidebarItemCategory;

  export type PropSidebars = {
    [sidebarId: string]: PropSidebarItem[];
  };
}

declare module "@theme/DocItem" {
  import type { TOCItem } from "@docusaurus/types";

  export type DocumentRoute = {
    readonly component: () => JSX.Element;
    readonly exact: boolean;
    readonly path: string;
  };

  export type FrontMatter = {
    readonly id: string;
    readonly title: string;
    readonly image?: string;
    readonly keywords?: readonly string[];
    readonly hide_title?: boolean;
    readonly hide_table_of_contents?: boolean;
  };

  export type Metadata = {
    readonly description?: string;
    readonly title?: string;
    readonly permalink?: string;
    readonly editUrl?: string;
    readonly lastUpdatedAt?: number;
    readonly lastUpdatedBy?: string;
    readonly version?: string;
    readonly previous?: { readonly permalink: string; readonly title: string };
    readonly next?: { readonly permalink: string; readonly title: string };
  };

  export type Props = {
    readonly route: DocumentRoute;
    readonly content: {
      readonly frontMatter: FrontMatter;
      readonly metadata: Metadata;
      readonly toc: readonly TOCItem[];
      (): JSX.Element;
    };
  };

  const DocItem: (props: Props) => JSX.Element;
  export default DocItem;
}

declare module "@theme/DocPage" {
  import type { PropVersionMetadata } from "@docusaurus/plugin-content-docs-types";
  import type { DocumentRoute } from "@theme/DocItem";

  export type Props = {
    readonly location: { readonly pathname: string };
    readonly versionMetadata: PropVersionMetadata;
    readonly route: {
      readonly path: string;
      readonly component: () => JSX.Element;
      readonly routes: readonly DocumentRoute[];
    };
  };

  const DocPage: (props: Props) => JSX.Element;
  export default DocPage;
}

// declare module "@theme/BlogPostItem" {
//   export { Props } from "@theme/DocItem";

//   const BlogPostItem: (props: Props) => JSX.Element;
//   export default BlogPostItem;
// }

declare module "@theme/BlogPostItem" {
  import type { FrontMatter, Metadata } from "@theme/BlogPostPage";

  export type Props = {
    readonly frontMatter: FrontMatter;
    readonly metadata: Metadata;
    readonly truncated?: string | boolean;
    readonly isBlogPostPage?: boolean;
    readonly children: JSX.Element;
  };

  const BlogPostItem: (props: Props) => JSX.Element;
  export default BlogPostItem;
}

declare module "@theme/Layout" {
  import type { ReactNode } from "react";

  export type Props = {
    children: ReactNode;
    title?: string;
    noFooter?: boolean;
    description?: string;
    image?: string;
    keywords?: string[];
    permalink?: string;
    wrapperClassName?: string;
    searchMetadatas?: {
      version?: string;
      tag?: string;
    };
  };

  const Layout: (props: Props) => JSX.Element;
  export default Layout;
}
