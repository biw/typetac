module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:jest/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended" // should always be the end
  ],
  "plugins": ["jest", "@typescript-eslint"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "tsconfigRootDir": "./",
    "project": "./tsconfig.json"
  },
  "env": {
    "jest": true,
    "browser": true,
    "node": true
  },
  "globals": {},
  "rules": {
    "@typescript-eslint/no-explicit-any": "off",
    "import/prefer-default-export": "off",
    "linebreak-style": ["error", "unix"],
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "semi-style": ["error", "first"],
    "func-style": [
      "error",
      "expression",
      {
        "allowArrowFunctions": true
      }
    ],
    "func-names": ["error", "as-needed"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": ["**/*.test.{ts,tsx}"]
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/class-name-casing": "off",
    "typescript/explicit-function-return-type": "off",
    "sort-keys": "off",
    "import/no-unresolved": "off",
    "quote-props": [
      "error",
      "as-needed",
      {
        "numbers": true
      }
    ],
  },
}
