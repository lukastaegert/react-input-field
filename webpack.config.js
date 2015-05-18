
module.exports = {
    entry: './index.jsx',
    output: {
        publicPath: 'http://localhost:8091/assets'
    },
    module: {
        loaders: require('./loaders.config')
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx']
    }
}