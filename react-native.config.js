// react-native.config.js
module.exports = {
  dependency: {
    platforms: {
      android: {
        packageInstance: 'new CSRPackage()',
      },
    },
  },
};
