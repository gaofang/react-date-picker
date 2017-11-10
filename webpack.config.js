/**
 * Created by zgf on 17/10/9.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        home: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://0.0.0.0:3000',
            'webpack/hot/only-dev-server',
            'babel-polyfill',
            'whatwg-fetch',
            './src/index.js'
        ]
    },
    debug: true,
    output: {
        path: path.join(__dirname, './docs'),
        filename: '[name].[hash:8].js',
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '',
            template: 'src/index.ejs',
            filename: 'index.html',
            chunks: ['home']
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('dev')
            }
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, './src')
            },
            {
                test: /\.css?$/,
                include: [path.join(__dirname, "./src")],
                loaders: ['style', 'css']
            }
        ]
    }
};