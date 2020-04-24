const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Notifier = require('./webpack-plugins/Notifier');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // new Notifier({
    //   name: 'Angularjs assignment',
    // }),
    new HtmlWebpackPlugin({
      title: 'Angularjs assignment',
      subtitle: 'sadad',
      contact: 'https://www.linkedin.com/in/lococoder/',
      template: './src/index.hbs',
      files: {
        css: [
          'https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap',
          'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
        ],
      },
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      { test: /\.hbs$/, loader: 'handlebars-loader' },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          attributes: false,
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    host: '127.0.0.1',
    port: 8080,
    disableHostCheck: true,
  },
};
