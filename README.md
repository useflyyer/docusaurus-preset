# Flayyer x Docusaurus

To create dynamic image previews please refer to [docs.flayyer.com](http://docs.flayyer.com/).

**This plugin required [Docusaurus v2](https://v2.docusaurus.io/).** There is no support for v1.

## Install

```bash
yarn add @flayyer/docusaurus-preset

# or with npm
npm install --save @flayyer/docusaurus-preset
```

On your `docusaurus.config.js` add `@flayyer/docusaurus-preset` at the end of your `presets` array:

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
            title: "{{id}} - {{title}}",
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

## Development

Clone this repository with:

```bash
git clone https://github.com/flayyer/docusaurus-preset.git
cd docusaurus-preset
```

Install dependencies and bootstrap [Lerna](https://github.com/lerna/lerna/):

```bash
yarn install
yarn run bootstrap
```

Build packages:

```bash
yarn run build
```

## Publishing

Create a new [Lerna version](https://github.com/lerna/lerna/tree/main/commands/version#readme):

```bash
yarn run lerna version
```

Publish packages:

```bash
yarn run lerna publish from-git --yes
```
