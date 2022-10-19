const path = require("path");
const camelcase = require("camelcase");

module.exports = {
  process(sourceText, sourcePath, options) {
    const assetFilename = JSON.stringify(path.basename(sourcePath));

    if (sourcePath.match(/\.svg$/)) {
      const pascalCaseFilename = camelcase(path.parse(sourcePath).name, {
        pascalCase: true,
      });
      const componentName = `Svg${pascalCaseFilename}`;
      return {
        code: `const React = require('react');
        module.exports = {
          __esModule: true,
          default: ${assetFilename},
          ReactComponent: React.forwardRef(function ${componentName}(props, ref) {
            return {
              $$typeof: Symbol.for('react.element'),
              type: 'svg',
              ref: ref,
              key: null,
              props: Object.assign({}, props, {
                children: ${assetFilename}
              })
            };
          }),
        };`,
      };
    }

    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};
