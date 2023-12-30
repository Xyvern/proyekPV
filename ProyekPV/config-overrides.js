const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin(['react-scripts', { plugins: ['transform-remove-console'] }])
);