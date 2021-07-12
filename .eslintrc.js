module.exports = {
  extends: [
    "@flyyer/eslint-config",
    "@flyyer/eslint-config/typescript",
    "@flyyer/eslint-config/react",
    "@flyyer/eslint-config/prettier",
  ],
  ignorePatterns: ["!.eslintrc.js", "dist", ".vscode", "node_modules"],
  rules: {},
};
