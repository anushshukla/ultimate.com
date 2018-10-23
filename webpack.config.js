const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = () => {

  // call dotenv and it will return an Object with a parsed key 
  const env = dotenv.config().parsed;
  
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    mode: 'production',
    // entry: ["./src/index.tsx"],
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve('build'),
      filename: 'main.js'
    },
    resolve: {
      extensions: [ '.ts', '.tsx', ".js", ".json"]
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64]",
                sourceMap: true,
                minimize: true
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader",
          enforce: "pre"
        }, {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader"
        }, {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: "ts-loader"
        },
      ]
    },
    plugins: [HtmlWebpackPluginConfig, new webpack.DefinePlugin(envKeys)]
  }
}
