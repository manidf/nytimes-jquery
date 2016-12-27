'use strict';

var webpack = require('webpack');
var path = require('path'); // fixes issue with long relative paths
var SRC = path.join(__dirname, 'src'); // set the entry point of the app. SOURCE
var NODE_MODULES = path.join(__dirname, 'node_modules');
var DIST = path.join(__dirname, 'dist'); // set the distribution folder. PRODUCTION

var config = {
	entry: {
        app: [SRC + '/js/app.js']
    },
    output: {
        path: DIST + '/js/',
        filename: 'app.js'
    },
	resolve: {
		root: [SRC, NODE_MODULES, DIST],
        alias: {
            jquery: NODE_MODULES + '/jquery',
			moment: NODE_MODULES + '/moment'
        }
    },
	plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
        }),
		// build jquery asset from node_modules to distribution directory for consumption in the app.
        new webpack.optimize.CommonsChunkPlugin('vendors', '/vendors/vendors.js', Infinity),
    ],
    devtool: 'inline-source-map',
    module: {
		loaders: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
			loaders: ['babel', 'babel-loader']
        }]
    },
	devServer: {
		contentBase: DIST,
		hot: true
	}
}

module.exports = config;
