const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: __dirname,
        filename: 'index.js'
    },
    target: 'web',
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
    }
};
