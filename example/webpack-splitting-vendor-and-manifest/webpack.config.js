// webpack.config.js
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './app.js',
        vendor: ['react']
    },
    output: {
        path: __dirname + "/dist",
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader:'jsx-loader?harmony'}
        ]    
    },
    plugins: [
        // when an array is passed into names,
        // CommonsChunkPlugin would set each item in array a common chunk,
        // and start to collect any chunk used >1 times into it.
        // Thus, here, we actually create two common chunk, vendor and manifest.
        // BTW, both of them follow the filename set in config.output.
        new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest']}),
    ]
}
