// eslint.config.js

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '**/*.d.ts'],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,ts}'],

    languageOptions: {
      globals: globals.node,
    },

    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },

    rules: {
      'prettier/prettier': 'error',
      'import/order': 'error',
      'no-unused-vars': 'off',
    },
  },

  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        // remova isso se não precisar de type-aware linting
        project: './tsconfig.json',
      },
    },

    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  prettierConfig,
];