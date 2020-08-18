const path = require('path'),

rules = require('./webpack.rules'),
plugins = require('./webpack.plugins');

rules.push(
  {
    test: /\.(css|s[ac]ss)$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  },
  {
    test: /\.(svelte)$/,
    exclude: /node_modules/,
    use: 'svelte-loader'
  }
);

module.exports = {
  module: {
    rules
  },
  plugins: plugins,
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.sass', '.scss', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
};
