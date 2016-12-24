'use strict';

let webpack = require('webpack');
let path = require('path'); // fixes issue with long relative paths
let SRC = path.join(__dirname, 'src'); // set the entry point of the app. SOURCE
let NODE_MODULES = path.join(__dirname, 'node_modules');
let DIST = path.join(__dirname, 'dist'); // set the distribution folder. PRODUCTION

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
		root: [SRC, NODE_MODULES, DIST],
        alias: {
            jquery: NODE_MODULES + '/jquery.js'
        }
    },
	plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            'window.jQuery': "jquery"
        }),
		// build jquery asset from node_modules to distribution directory for consumption in the app.
        new webpack.optimize.CommonsChunkPlugin('vendors', '/vendors/vendors.js', Infinity),
    ],
    devtool: 'inline-source-map',
    module: {
		loaders: [{
            test: path.join(__dirname, 'src'),
			loaders: ['babel', 'babel-loader']
        }]
    },
	devServer: {
		contentBase: DIST,
		hot: true
	}
}

module.exports = config;
