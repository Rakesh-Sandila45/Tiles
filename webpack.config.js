const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "https://main--snazzy-valkyrie-328f8e.netlify.app/", // Update with your Tile app's public URL
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "tileApp",
      filename: "remoteEntry.js",
      exposes: {
        "./tile": "./src/components/tile", // Expose Tile component
      },
      shared: ["react", "react-dom"], // Share React and React DOM
    }),
  ],
};
