module.exports = (gulp, plugins, config) => {

  return () => {
    const Builder = require('jspm').Builder;
    const builder = new Builder();
    const distFileName = 'readium-js-amd.js';
    const outFile = plugins.joinPath(config.distDir, distFileName);

    return beginBuild()
      .then(buildSFX)
      .then(() => console.log('Build complete'))
      .catch((err) => console.log('\n\tBuild Failed\n', err));

    function beginBuild() {
      builder.reset();
      return builder.loadConfig(plugins.joinPath(config.projectDir, 'config.js'));
    }

    function buildSFX() {
      const moduleName = 'readium/readium-js';
      const buildConfig = {
        format: 'amd',
        minify: false,
        sourceMaps: true
      };
      return builder.buildStatic(moduleName, outFile, buildConfig);
    }

  };
};
