var webpack = require('webpack');
var path = require('path');

// var parentDir = path.join(__dirname, '../');

var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    mode: "development",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loder", "less-loader"]
            }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}
/*
module.exports = {
	entry: [
		path.join(__dirname, '../index.js')
		
	],
    mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ["es2015", "react", "stage-0"],
					plugins: ["transform-object-rest-spread"],
					env: {
						"production": {
						"plugins": ["transform-react-remove-prop-types"]
						}
					}
				  },
			},{
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]	
			},
		]
	},	
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/dist',
        historyApiFallback: true
    }
}
*/