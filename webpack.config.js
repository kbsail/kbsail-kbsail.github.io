module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  entry: "./webpack/entry.js",
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: "assets/javascripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel", // "babel-loader" is also a legal name to reference
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};
