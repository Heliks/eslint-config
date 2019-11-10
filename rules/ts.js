module.exports = {
  '@typescript-eslint/no-parameter-properties': 'off',
  '@typescript-eslint/explicit-function-return-type': [
    'warn',
    {
      'allowExpressions': true,
      'allowTypedFunctionExpressions': false
    }
  ],
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      'overrides': {
        'constructors': 'no-public'
      }
    }
  ],
};
