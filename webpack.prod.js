const webpack = require('webpack'),
      merge = require('webpack-merge'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CompressionPlugin = require('compression-webpack-plugin'),
      MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
      common = require('./webpack.common.js');

module.exports = merge(common, {

  output: {
    //publicPath: '/',
    filename: '[name]-[hash:6].bundle.min.js'
  },
  module: {
     rules: [
       {
         test:  /\.(sass|scss)$/,
         use: [
           {
             loader: MiniCssExtractPlugin.loader
           },{
             loader: "css-loader"
           },{
             loader: "postcss-loader",
             options: {
               autoprefixer: require('autoprefixer')()
             }
           },{
             loader: "sass-loader"
           }
         ]
       }
     ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      "FIREBASE_URL": JSON.stringify("https://myapp-production.firebaseio.com"),
      "DOMAIN": JSON.stringify("https://custo.furniture")
    }),
    new HtmlWebpackPlugin({
       hash: true,
       template: './src/index.ejs',
       filename: './index.html',
       excludeChunks: ['base'],
       minify: {
         collapseWhitespace: true,
         collapseInlineTagWhitespace: true,
         removeComments: true,
         removeRedundantAttributes: true
       }
     }),
     new MiniCssExtractPlugin({
      filename: "assets/css/[name].[hash].min.css",
      chunkFilename: "[id].[hash].css"
    }),
    new OptimizeCssAssetsPlugin({}),
    new CompressionPlugin({
      test: /\.(js|css)$/
    }),
  ]

});
