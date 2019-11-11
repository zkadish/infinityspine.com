const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const jsonImporter = require('node-sass-json-importer');
const autoprefixer = require('autoprefixer');

const devMode = process.env.NODE_ENV !== 'production';
const mode = process.env.NODE_ENV;

// NOTE: to gain more control you can make separate
// webpack configs for the js and the css
// TODO: create entries for page specific js
// TODO: add postcss - autoprefixer - Verify its working
// TODO: add css minification
// TODO: add eslint-loader: https://medium.com/@jontorrado/working-with-webpack-4-es6-postcss-with-preset-env-and-more-93b3d77db7b2
// TODO: add styleLint: https://medium.com/@jontorrado/working-with-webpack-4-es6-postcss-with-preset-env-and-more-93b3d77db7b2

console.log('devMode:', devMode);
console.log('mode:', mode);
// console.log('process.env.NODE_ENV:', process.env.NODE_ENV);

module.exports = {
  mode,
  entry: {
    infinity: './src/index.js',
    home: './src/js/home.js',
    contact: './src/js/contact.js',
    'dr-thoma-articles': './src/js/dr-thoma-articles.js',
    'default-page': './src/js/default-page.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/js'),
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
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          // devMode ? 'style-loader'
          //   : {
          //     loader: MiniCssExtractPlugin.loader,
          //     options: {
          //       // publicPath: 'public/css',
          //       outputPath: 'css',
          //     },
          //   },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
              // options: {
              //   config: {
              //     path: `${__dirname} /postcss.config.js`,
              //   },
              // },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
              importer: jsonImporter(),
            },
          },
        ],
      },
      { // images are imported into src/js/index.js
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../img',
            },
          },
        ],
      },
      {
        test: /\.woff$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              // outputPath: devMode ? 'fonts' : '../fonts',
              outputPath: '../fonts',
            },
          },
        ],
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../forms',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      inject: false,
      template: path.resolve(__dirname, 'src/index.html'),
      title: 'Infinity Spine',
      javascript: '<script src="js/infinity.js"></script>',
      styles: mode === 'production' ? '<link rel="stylesheet" href="css/infinity.css">' : '',
    }),
    // css extraction is production build only
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    // quiet: true,
  },
};
