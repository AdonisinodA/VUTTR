module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: "standard-with-typescript",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [".eslintrc.cjs", "./src"],
  rules: {
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/await-thenable": "off",
    "semi": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/no-misused-promises": "off"
  },
};

