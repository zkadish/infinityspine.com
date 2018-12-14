const path = require('path');
const jsonImporter = require('node-sass-json-importer');


module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: 'css-loader' },
          { loader: 'style-loader' },
          {
            loader: 'sass-loader',
            options: {
              importer: jsonImporter(),
            }
          },
        ],
      }
    ]
  }
}
