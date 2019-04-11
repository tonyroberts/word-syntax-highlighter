const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    target: 'web',

    mode: 'production',

    performance: {
        hints: "warning"
    },

    optimization: {
        minimize: true
    },

    plugins: [
        new CompressionPlugin()
    ],

    node: {
        fs: 'empty'
    }
});
