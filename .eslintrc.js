module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    'prettier'
  ],
  "extends": [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    // "plugin:react/recommended",
    // "eslint:recommended",
    // "plugin:prettier/recommended",
    // "plugin:@typescript-eslint/eslint-recommended",
    // 'plugin:@typescript-eslint/recommended',
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "settings": {
    // "import/extensions": [".js",".jsx",".ts",".tsx"],
    // "import/parsers": {
    //   "@typescript-eslint/parser": [".ts",".tsx"]
    // },
    // "import/resolver": {
    //   "node": {
    //     "extensions": [".js",".jsx",".ts",".tsx"]
    //   }
    // },
  },
  "rules": {
  //   "@typescript-eslint/no-empty-interface": "off",
  //   "import/prefer-default-export": "off",
  //   "import/extensions": [
  //     "error",
  //     "ignorePackages",
  //     {
  //       "js": "never",
  //       "jsx": "never",
  //       "ts": "never",
  //       "tsx": "never"
  //     }
  //  ],
   "@typescript-eslint/explicit-member-accessibility": "off",
   "@typescript-eslint/no-empty-interface": "off",
   "no-array-constructor": "off",
  }
};
