const webpack = require('webpack'),
      merge = require('webpack-merge'),
      common = require('./webpack.common.js');

module.exports = merge(common, {

  module: {
     rules: [
       {
         test:  /\.(sass|scss)$/,
         exclude:  /node_modules/,
         use: [{
                 loader: "style-loader"
             },{
                 loader: "css-loader",
                 options: {
                   sourceMap: true
                 }
             },{
                 loader: "postcss-loader",
                 options: {
                   autoprefixer: require('autoprefixer')()
                 }
             },{
                 loader: "sass-loader"
             }]
       }
     ]
   },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      "FIREBASE_URL": JSON.stringify("https://myapp-staging.firebaseio.com"),
      "DOMAIN": JSON.stringify("http://localhost:3333")
    })
  ]


});
