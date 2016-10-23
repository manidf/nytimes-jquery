'use strict';

// fixes issue with long relative paths
let path = require('path');
let SRC = path.join(__dirname, './src/');
let NODE_MODULES = path.join(__dirname, 'node_modules/');

let config = {
    entry: './src/js/app.js',
    output: {
        path: './dist/js',
        filename: 'app.js'
    },
    devtool: 'inline-source-map',
    module: {
		loaders: [{
            test: /\.js$/,
			loader: ['babel', 'babel-loader']
        }]
    },
    resolve: {
        root: [SRC, NODE_MODULES]
    }
}

module.exports = config;
