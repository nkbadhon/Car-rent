import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pkg from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';

const { ESLint } = pkg;
export default [
  pluginJs.configs.recommended,

  // Include the `@typescript-eslint/recommended` configuration directly
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: ESLint,
      parserOptions: {
        project: './tsconfig.json', // Adjust this to your project's tsconfig path if necessary
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },

  // Include the `prettier` configuration directly
  {
    rules: {
      ...prettierConfig.rules,
    },
  },
  {
    ignores: ['**/node_modules/', '.dist/'],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly',
      },
    },

    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
