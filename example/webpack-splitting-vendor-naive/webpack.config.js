// webpack.config.js

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
    }
}
