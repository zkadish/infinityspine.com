const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const jsonImporter = require('node-sass-json-importer');

const devMode = process.env.NODE_ENV !== 'production';
const mode = process.env.NODE_ENV;

console.log(devMode);

// NOTE: to gain more control you can make separate
// webpack configs for the js and the css
// TODO: add postcss - autoprefixer - Verify its working
// TODO: add css minification
// TODO: add eslint-loader: https://medium.com/@jontorrado/working-with-webpack-4-es6-postcss-with-preset-env-and-more-93b3d77db7b2
// TODO: add styleLint: https://medium.com/@jontorrado/working-with-webpack-4-es6-postcss-with-preset-env-and-more-93b3d77db7b2

// console.log('debMode:', devMode);
// console.log('process.env.NODE_ENV:', process.env.NODE_ENV);

module.exports = {
  mode,
  entry: {
    infinity: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              options: {
                config: {
                  path: `${__dirname} /postcss.config.js`,
                },
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              importer: jsonImporter(),
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: devMode,
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    // quiet: true,
  },
};
