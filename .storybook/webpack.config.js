const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");
const path = require("path");

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.module.rules.push({
    test: /\.(ts|tsx)?$/,
    exclude: /node_modules/,
    include: [/stories/, /src/],
    loader: "ts-loader"
  });
  config.resolve.extensions.push(".ts", ".tsx");

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve("./")
  ];

  return config;
};
