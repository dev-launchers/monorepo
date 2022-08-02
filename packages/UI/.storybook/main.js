// use `mergeConfig` to recursively merge Vite options
const { mergeConfig } = require("vite");
module.exports = {
  core: { builder: "@storybook/builder-vite" },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-next-router",
  ],
  framework: "@storybook/react",

  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: { foo: "bar" },
      },
    });
  },
  // ... other options here
};
