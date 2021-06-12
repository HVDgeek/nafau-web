const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  // typescript: { reactDocgen: 'react-docgen' },
  "stories": [
    "../src/components/**/stories.tsx"
  ],
  "addons": [
    "@storybook/addon-essentials"
  ],
  // babel: async (options) => ({
  //   ...options,
  //   plugins: [...options.plugins,  require.resolve('@babel/plugin-transform-react-jsx')]
  // }),

  webpackFinal: async (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
}
