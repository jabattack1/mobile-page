'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    target: 'web',
    debug: true,
    devtool: 'source-map',
    context: path.join(__dirname, 'src'),
    entry: {
        hotel: './hotel-app.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /src(\/|\\).*\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /src(\/|\\).*\.css$/,
                loader: 'style!css'
            },
            {
                test: /src(\/|\\).*\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    plugins: []
};