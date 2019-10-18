module.exports = {
  "import/no-cycle": "error",
  "import/export": "error",
  "import/exports-last": "error",
  "import/extensions": ["error", "never", {
    "json": "always"
  }],
  "import/first": ["error", "absolute-first"],
  "import/group-exports": "off",
  "import/named": "error",
  "import/namespace": "error",
  "import/newline-after-import": ["error", {
    "count": 1
  }],
  "import/no-absolute-path": "error",
  "import/no-amd": "error",
  "import/no-anonymous-default-export": "error",
  "import/no-commonjs": "error",
  "import/no-default-export": "error",
  "import/no-deprecated": "error",
  "import/no-duplicates": "error",
  "import/no-extraneous-dependencies": "error",
  "import/no-internal-modules": "error",
  "import/no-named-as-default-member": "error",
  "import/no-named-as-default": "error",
  "import/no-relative-parent-imports": "error",
  "import/no-restricted-paths": ["error", {
    "zones": [
      {"target": "__test__", "from": "."}
    ]
  }],
  "import/no-self-import": "error",
  "import/no-useless-path-segments": "error",
  "import/no-webpack-loader-syntax": "error",
  "import/order": ["error", {
    "groups": ["index", "sibling", "parent", "internal", "external", "builtin"],
    "newlines-between": "always"
  }],
  "import/prefer-default-export": "off"
};
