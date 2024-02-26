module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['react-native'],
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
        'react-native/react-native': true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  },
};
