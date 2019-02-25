const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
   mode: 'production',    
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
    new webpack.HotModuleReplacementPlugin()    
   ],  
   devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true    
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
           }
       ]
   } 
}