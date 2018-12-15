const path = require('path');
const jsonImporter = require('node-sass-json-importer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// TODO: add postcss - autoprefixer

module.exports = {
  mode: 'production',
  entry: {
    infinity: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "public/js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          // { loader: 'style-loader' },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPathx: "public/css",
            }
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              importer: jsonImporter(),
            }
          },
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],
}
