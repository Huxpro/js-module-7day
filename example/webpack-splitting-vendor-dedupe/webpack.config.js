// webpack.config.js
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './app.js',
        vendor: ['react']
    },
    output: {
        filename: '[name].[chunkhash:4].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader:'jsx-loader?harmony'}
        ]    
    },
    plugins: [
        // magic
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[chunkhash:4].js'
        })
    ]
}
