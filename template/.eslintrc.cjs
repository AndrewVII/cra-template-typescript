module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-plusplus': 'off',
    'arrow-parens': 'off',
    'no-console': 'warn',
    'max-len': 'off',
    'no-use-before-define': 'off',
    'prefer-destructuring': 'warn',
    'react/no-string-refs': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'no-await-in-loop': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'new-cap': 'off',
    'global-require': 'off',
    'no-param-reassign': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
  },
  globals: {
    ENVIRONMENT: true,
  },
};