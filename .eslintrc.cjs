const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  globals: {
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    projectService: true,
    sourceType: 'module',
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        project,
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
      },
      alias: {
        extensions: ['.ts', '.vue'],
        map: [['~', './src']]
      },
      typescript: {
        project,
        alwaysTryTypes: true,
      },
    },
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|html)$'],
  },
  ignorePatterns: [
    '.*.js',
    'node_modules/',
    'dist/',
    '.eslintrc.cjs',
  ],
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
    'sonarjs',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    "plugin:vue/vue3-strongly-recommended",
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended-legacy',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.cjs'],
      rules: {
        'unicorn/no-empty-file': 'off',
      },
    },
    {
      files: ['**/views/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ],
  rules: {
    'no-undef': 'off',
    'prefer-const': 'warn',
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowArray: true,
        allowNumber: true,
        allowRegExp: true,
      },
    ],
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      {
        allowNumberAndString: true,
      },
    ],
    'sonarjs/pseudo-random': 'off',
    'sonarjs/no-array-index-key': 'off',
    'sonarjs/no-nested-conditional': 'off',
    'sonarjs/function-return-type': 'off',
    'sonarjs/use-type-alias': 'off',
    'sonarjs/no-misused-promises': 'off',
    'sonarjs/no-base-to-string': 'off',
    'sonarjs/no-nested-assignment': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-unreadable-array-destructuring': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
        },
        ignore: ['/^$/', 'README.md$'],
      },
    ],
    'unicorn/no-null': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          ref: true,
          props: true,
          Props: true,
          param: true,
          params: true,
          Param: true,
          Params: true,
          args: true,
          env: true,
          fn: true,
          req: true,
          Req: true,
          res: true,
          Res: true,
        },
      },
    ],
    'import/no-cycle': 'warn',
    'import/consistent-type-specifier-style': ['off'],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
      },
    ],
  },
}
