// this file not actual meaning, it only use for webstorm to identify path alias
const path = require('path');
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@@': path.resolve(__dirname, 'src/.umi'),
      'react-router': path.resolve(__dirname, 'node_modules/react-router'),
      'react-router-dom': path.resolve(
        __dirname,
        'node_modules/react-router-dom',
      ),
      history: path.resolve(__dirname, 'node_modules/history-with-query'),
      'regenerator-runtime': path.resolve(
        __dirname,
        'mode_modules/@umijs/preset-built-in/node_modules/regenerator-runtime',
      ),
      antd: path.resolve(__dirname, 'node_modules', 'antd'),
      dva: path.resolve(__dirname, 'node_modules/dva'),
      umi: path.resolve(__dirname, 'node_modules/umi'),
    },
    modules: [
      'node_modules',
      path.resolve(
        __dirname,
        'mode_modules/@umijs/bundler-webpack/node_modules',
      ),
    ],
  },
};
