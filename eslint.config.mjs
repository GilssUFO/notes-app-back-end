import js from "@eslint/js";
import globals from "globals";
import daStyle from 'eslint-config-dicodingacademy';

export default [
  daStyle,
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node }
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" }
  }
];
