var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-class-properties']
                    }
                }
            }, {
                test: /\.*css$/,
                use : ExtractTextPlugin.extract({
                    fallback : 'style-loader',
                    use : [
                        'css-loader',
                    ],
                }),

            },

        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ],
    externals: {
        'react': 'commonjs react'
    }
};