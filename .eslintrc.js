module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true
    },
    "plugins": [
      "react",
      "jsx-a11y",
      "import"
    ],
    "extends": [
      "eslint:recommended",
      // "plugin:react/recommended",
      // "airbnb"
    ],
    "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
    },
    "rules": {
      "no-duplicate-imports": "off",
      "no-unused-vars": "off",
      // "no-undef": "off",
      "no-console": "off",
      "react/jsx-filename-extension": 0
    }
}
