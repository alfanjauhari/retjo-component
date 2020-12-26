const BABEL_ENV = process.env.BABEL_ENV;
const isCJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';

module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/env',
      {
        loose: true,
        modules: isCJS ? 'commonjs' : false,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];

  const plugins = ['@babel/plugin-proposal-class-properties'];

  return {
    presets,
    plugins,
  };
};
