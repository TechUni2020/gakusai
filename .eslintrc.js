module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "import/order": [
      "warn",
      { groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"] },
    ],
    "@next/next/no-img-element": "off",
    "react-hooks/exhaustive-deps": "off",
  },
};
