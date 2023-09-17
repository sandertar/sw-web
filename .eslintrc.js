module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'airbnb', 'airbnb-typescript', 'prettier'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
  },
};
