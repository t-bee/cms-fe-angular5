const path = require('path'),
    webpack = require('webpack'),
    UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    config = require('./webpack.base.conf.js');

config.devServer = {
    port: '9100',
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    contentBase:path.join(__dirname, '../dist'),
    // hot: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9901',
        secure: false,
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://127.0.0.1:9901',
        secure: false,
        changeOrigin: true,
      }
    }
}

config.plugins = (config.plugins || []).concat([
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
        title: 'CMS-FE DEV',
        filename: 'index.html',
        template: 'src/template/index_base.html',
        // template: 'dist/index.html',
    })
]);

module.exports = config;