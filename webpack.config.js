const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const jsonImporter = require('node-sass-json-importer');
const devMode = process.env.NODE_ENV !== 'production';

// TODO: add postcss - autoprefixer

console.log('debMode:', devMode);
console.log('process.env.NODE_ENV:', process.env.NODE_ENV);

module.exports = {
  mode: 'development',
  entry: {
    infinity: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "public"),
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
          // 'style-loader',
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: "public/css",
          //   }
          // },
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: devMode,
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],
  devServer: {
    // contentBase: path.join(__dirname, 'public'),
    // quiet: true,
  }
}
