// webpack.config.js
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './app.js',
        vendor: ['react']
    },
    output: {
        path: __dirname + '/dist', 
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader:'jsx-loader?harmony'}
        ]    
    },
    plugins: [
        // magic
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
}
