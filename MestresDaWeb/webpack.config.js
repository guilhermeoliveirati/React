const path = require('path')

module.exports = {
    entry: path.resolve(__dirname,'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extension: ['.js', ',jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                user: 'babel-loader',
            }
        ],
    }
};