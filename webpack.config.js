const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'index': './src/client/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist/public/js'),
        filename: '[name].bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    watch: true
};