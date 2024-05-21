const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    assetModuleFilename: 'assets/[name][ext]',
    // filename: 'bundle.js',
    // path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/i,
      //   use: {
      //     loader: 'html-loader',
      //   }
      // },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(webp|png|jpg|svg|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2|woff)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      minify: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    watchFiles: {
      paths: 'src/**/*',
    },
  },
};
