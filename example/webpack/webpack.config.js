// webpack.config.js

module.exports = {
    entry: "./tryJSX.js",
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader:'jsx-loader'}
        ]    
    }
}
