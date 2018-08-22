const webpack = require('webpack'),
merge = require('webpack-merge'),
UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
CompressionPlugin = require('compression-webpack-plugin'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
MiniCssExtractPlugin = require("mini-css-extract-plugin"),
OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
common = require('./webpack.common.js');



module.exports = merge(common, {
  output: {
    filename: '[name]-[hash:6].bundle.min.js'
  },
  devServer:{
    hot: false
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test:  /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },{
            loader: "css-loader",
            options: {
              minimize: true
            }
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
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html',
      excludeChunks: ['base'],
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[hash].min.css",
      chunkFilename: "[id].[hash].css"
    }),
    new OptimizeCSSAssetsPlugin({})


  ]
});
