module.exports = {
  root: true,
  extends: [
    '@react-native-community/eslint-config', // Default RN config
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json', // Required for Standard plugin
  },
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'prettier/prettier': 'off', // Turn off prettier
    // These are the rules that I use
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'error',
    'react-native/no-raw-text': [
      'warn',
      {
        skip: ['CustomText'],
      },
    ],
    'react-native/no-single-element-style-arrays': 'warn',
    'object-curly-spacing': [
      'error', 'always',
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      {
        ignoreStringArrays: true,
      },
    ],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'always',
        allowMultiline: true,
        children: true,
      },
    ],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': 'error',
    semi: ['error', 'never'],
    // Indent with 2 spaces
    indent: ['error', 2],
    // Indent JSX with 2 spaces
    'react/jsx-indent': ['error', 2],
    // Indent props with 2 spaces
    'react/jsx-indent-props': ['error', 2],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
  },
}
