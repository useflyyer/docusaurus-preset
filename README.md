# Flayyer x Docusaurus

To create dynamic image previews please refer to [docs.flayyer.com](http://docs.flayyer.com/).

**This plugin required [Docusaurus v2](https://v2.docusaurus.io/).** There is no support for v1.

## Install

```bash
yarn add @flayyer/docusaurus-preset

# or with npm
npm install --save @flayyer/docusaurus-preset
```

On your `docusaurus.config.js` add `@flayyer/docusaurus-preset` at the end of your `preset` array:

```js
{
  // ...
  presets: [
    // ...
    [
      "@flayyer/docusaurus-preset",
      {
        // Use this for the root "/"
        main: { tenant: "flayyer", deck: "flayyer-docs", template: "page" },
        // Use this flayyer for individual documentation pages
        docs: {
          tenant: "flayyer",
          deck: "flayyer-docs",
          template: "page",
          variables: {
            // Enable variable replacement
            title: "{{id}} - {{description}}",
            description: "{{description}}",
            static: "Plain hardcoded string",
          },
        },
        // Use this flayyer for individual blogpost pages
        blog: {
          tenant: "flayyer",
          deck: "flayyer-docs",
          template: "page",
          // Pick values form the context
          variables: ["title", "description"],
        },
      },
    ],
  ],
}
```
