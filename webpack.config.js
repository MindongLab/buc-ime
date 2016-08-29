module.exports = {
    entry: {
        'bucengine':'./src/buc.ts',
        'ui': './src/ui/ime.ts'
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader'}
        ]
    }
}