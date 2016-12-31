'use strict';

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path'); // fixes issue with long relative paths
const SRC = path.join(__dirname, 'src'); // set the entry point of the app. SOURCE
const NODE_MODULES = path.join(__dirname, 'node_modules');
const DIST = path.join(__dirname, 'dist'); // set the distribution folder. PRODUCTION

const config = {
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
		new CopyWebpackPlugin([
			{
				from: SRC ,
				to: DIST
			}
		], {
			ignore: [
				'*.js'
			]
		})
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
		hot: true,
		// This is required for older versions of webpack-dev-server if you use absolute 'to' paths.
		// The path should be an absolute path to your build destination.
        outputPath: path.join(__dirname, 'dist')
	}
}

module.exports = config;
