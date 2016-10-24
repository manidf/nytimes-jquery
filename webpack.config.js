'use strict';

// fixes issue with long relative paths
let path = require('path');
let SRC = path.join(__dirname, 'src');
let NODE_MODULES = path.join(__dirname, 'node_modules');
let DIST = path.join(__dirname, 'dist');

let config = {
    entry: SRC + '/js/app.js',
    output: {
        path: DIST + '/js/',
        filename: 'app.js'
    },
    devtool: 'inline-source-map',
    module: {
		loaders: [{
            test: /\.js$/,
			loaders: ['babel', 'babel-loader']
        }]
    },
    resolve: {
        root: [SRC, NODE_MODULES, DIST]
    }
}

module.exports = config;
