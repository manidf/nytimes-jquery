'use strict';

let config = {
    entry: './src/js/app.js',
    output: {
        path: './dist/js',
        filename: 'app.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
            test: /\.css$/, loader: 'style!css',
            loader: 'babel-loader'
        }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules']
    }
}

module.exports = config;