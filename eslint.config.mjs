import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  prettier,

  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "error",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": ["error"],
    },
  },
];

export default config;
