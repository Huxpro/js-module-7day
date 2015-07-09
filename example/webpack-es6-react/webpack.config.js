// webpack.config.js

module.exports = {
    entry: "./tryES6.js",
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader:'jsx-loader?harmony'}
        ]    
    }
}
