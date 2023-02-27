/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
    './.eslintrc-auto-import.json',
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-strongly-recommended",
    'plugin:@typescript-eslint/recommended',
    "eslint:recommended"
  ],
  "env": {
    "vue/setup-compiler-macros": true,
    "browser": true,
    "es2021": true,
    "node": true
  },
  "parser": "vue-eslint-parser",
  "plugins": ['@typescript-eslint'],
  "parserOptions": {
    "ecmaVersion": 13,
    "sourceType": "module",
    "parser": '@typescript-eslint/parser'
  },
  "rules": {
    "@typescript-eslint/no-explicit-any": ["off"],
    "space-in-parens": ["error", "never"],
    'no-trailing-spaces': 'error',
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "array-callback-return": "error",
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "arrow-spacing": "error",
    "block-spacing": "error",
    "keyword-spacing": "error",
    "brace-style": "error",
    "camelcase": "off",
    "comma-dangle": "error",
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "default-case": "error",
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "ignoredNodes": [
          "TemplateLiteral"
        ]
      }
    ],
    "no-alert": "off",
    "vue/multi-word-component-names": "off",
    "no-await-in-loop": "error",
    "no-console": "off",
    "no-debugger": "off",
    "no-else-return": "error",
    "no-empty-function": "off",
    "no-labels": "off",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": [
      2,
      {
        "max": 1
      }
    ],
    "no-new": "off",
    "no-prototype-builtins": "off",
    "no-return-await": "error",
    "no-shadow": "error",
    "no-useless-catch": "off",
    "no-var": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "require-await": "error",
    "semi": [
      "error",
      "never"
    ],
    "space-before-function-paren": [
      "error",
      "always"
    ],
    "template-curly-spacing": "off",
    "vue/component-definition-name-casing": [
      "error",
      "PascalCase"
    ],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        "singleline": "never",
        "multiline": "always"
      }
    ],
    "vue/html-end-tags": "error",
    "vue/html-indent": [
      "error",
      2,
      {
        "attribute": 1,
        "baseIndent": 1,
        "closeBracket": 0,
        "alignAttributesVertically": true,
        "ignores": []
      }
    ],
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "never",
          "normal": "never",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }
    ],
    "vue/match-component-file-name": [
      "error",
      {
        "extensions": [
          "vue"
        ],
        "shouldMatchCase": false
      }
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        "singleline": 1
      }
    ],
    "vue/no-unused-properties": [
      "error",
      {
        "groups": [
          "props",
          "data",
          "computed",
          "methods"
        ]
      }
    ],
    "vue/no-v-html": "off",
    "vue/this-in-template": [
      "error",
      "never"
    ],
    "vue/v-bind-style": [
      "error",
      "shorthand"
    ],
    "vue/v-on-style": [
      "error",
      "shorthand"
    ]
  }
}
