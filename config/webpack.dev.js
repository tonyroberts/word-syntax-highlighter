const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    target: 'web',
    devtool: 'eval-source-map',
    devServer: {
        publicPath: '/',
        contentBase: path.resolve('dist'),
        hot: true,
        inline: false,
        https: {
            key: fs.readFileSync(path.resolve(__dirname + '/../certs/server.key')),
            cert: fs.readFileSync(path.resolve(__dirname + '/../certs/server.crt')),
            cacert: fs.readFileSync(path.resolve(__dirname + '/../certs/ca.crt'))
        },
        compress: true,
        overlay: {
            warnings: false,
            errors: true
        },
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    node: {
        fs: 'empty'
    }
});
