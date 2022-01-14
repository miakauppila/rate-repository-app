const { getDefaultConfig } = require('metro-config');

const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();

const configuration = {
  resolver: { sourceExts: [...defaultResolver.sourceExts, 'cjs', 'jsx'] },
};

module.exports = configuration;