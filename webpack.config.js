'use strict';

let webpack = require('webpack');
// fixes issue with long relative paths
let path = require('path');
let SRC = path.join(__dirname, 'src');
let NODE_MODULES = path.join(__dirname, 'node_modules');
let DIST = path.join(__dirname, 'dist');

let config = {
	entry: {
        app: [SRC + '/js/app.js'],
        vendors: ['jquery']
    },
    output: {
        path: DIST + '/js/',
        filename: 'app.js'
    },
	resolve: {
        alias: {
            jquery: NODE_MODULES + '/jquery.js'
        }
    },
	plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            'window.jQuery': "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', '/vendors/vendors.js', Infinity),
    ],
    devtool: 'inline-source-map',
    module: {
		loaders: [{
            test: path.join(__dirname, 'src'),
			loaders: ['babel', 'babel-loader']
        }]
    },
    resolve: {
        root: [SRC, NODE_MODULES, DIST]
    },
	devServer: {
		contentBase: DIST,
		hot: true
	}
}

module.exports = config;
