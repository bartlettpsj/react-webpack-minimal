const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   mode: 'development',    
   entry: "./src/index.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/index.bundled.html`,
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.HotModuleReplacementPlugin(),
   ],
   optimization: {
    minimizer: [new UglifyJsPlugin({ sourceMap: true })]
  },
   devtool: 'inline-source-map', //'#source-map',   
   devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    disableHostCheck: true,       
   },   
   module: {
       rules: [
           {
               test: /\.(js|jsx)$/,
               exclude: [
                    path.resolve(__dirname, "node_modules")               
               ],
               loader: "babel-loader",
               query: {
                   presets: ['@babel/preset-env', '@babel/react']
               },
               resolve: {
                extensions: ['.js', '.jsx'],
               }            
           }, {
            test: /\.(css|scss)$/,
            use: [
              "style-loader",
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader"
            ]
          }           
       ]
   } 
}