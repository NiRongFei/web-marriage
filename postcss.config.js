module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 1680,
      viewportHeight: 1080,
      unitPrecision: 2,
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      propList: ['*'],
      selectorBlackList: ['ig-'],
    },
  },
};
