module.exports = {
  extends: [
    "@flayyer/eslint-config",
    "@flayyer/eslint-config/typescript",
    "@flayyer/eslint-config/react",
    "@flayyer/eslint-config/prettier",
  ],
  ignorePatterns: ["!.eslintrc.js", "dist", ".vscode", "node_modules"],
  rules: {},
};
