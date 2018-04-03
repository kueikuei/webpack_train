const path = require('path');

module.exports = {
    // 可以是array，包許多來源檔案，最後在合併成同一支bundle.js
    entry: ['./src/index.js', './src/test.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
