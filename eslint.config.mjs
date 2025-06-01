import eslintPluginAstro from "eslint-plugin-astro";
import stylistic from "@stylistic/eslint-plugin";
import stylisticJs from "@stylistic/eslint-plugin-js";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      "@stylistic":    stylistic,
      "@stylistic/js": stylisticJs
    },
    rules: {
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/quotes": ["error", "double", {
        allowTemplateLiterals: true
      }],
      "@stylistic/js/array-bracket-spacing": ["error", "never"],
      "@stylistic/js/object-curly-spacing":  ["error", "always"],
      "@stylistic/js/object-curly-newline":  ["error", {
        "ObjectExpression": {
          multiline:     true,
          minProperties: 1
        }
      }],
      "@stylistic/js/object-property-newline": ["error", {
        allowAllPropertiesOnSameLine: false
      }],
      "@stylistic/js/brace-style":   ["error", "1tbs"],
      "@stylistic/js/arrow-spacing": ["error", {
        before: true,
        after:  true
      }],
      "@stylistic/js/computed-property-spacing": ["error", "never"],
      "@stylistic/js/comma-spacing":             ["error", {
        before: false,
        after:  true
      }],
      "@stylistic/js/comma-dangle":            ["error", "never"],
      "@stylistic/js/no-multiple-empty-lines": ["error", {
        max:    1,
        maxEOF: 1
      }],
      "@stylistic/js/no-multi-spaces":    [2],
      "@stylistic/js/no-trailing-spaces": ["error", {
        skipBlankLines: false,
        ignoreComments: false
      }],
      "@stylistic/js/rest-spread-spacing": ["error", "never"],
      "@stylistic/js/key-spacing":         ["error", {
        align: "value"
      }],

      "@stylistic/type-annotation-spacing": [2],
      "@stylistic/semi":                    ["error", "always"],
      "@stylistic/space-infix-ops":         ["error"]
    }
  }
];