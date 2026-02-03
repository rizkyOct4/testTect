// import { defineConfig, globalIgnores } from "eslint/config";
// import nextVitals from "eslint-config-next/core-web-vitals";
// import nextTs from "eslint-config-next/typescript";
// import js from "@eslint/js";
// import nextPlugin from "@next/eslint-plugin-next";
// import tsPlugin from "@typescript-eslint/eslint-plugin";
// import tsParser from "@typescript-eslint/parser";
// import reactHooks from "eslint-plugin-react-hooks";

// const eslintConfig = defineConfig([
//   // ...nextVitals,
//   // ...nextTs,
//   // // Override default ignores of eslint-config-next.
//   // globalIgnores([
//   //   // Default ignores of eslint-config-next:
//   //   ".next/**",
//   //   "out/**",
//   //   "build/**",
//   //   "next-env.d.ts",
//   // ]),
//    {
//     files: ["**/*.ts", "**/*.tsx"],
//     languageOptions: {
//       parser: tsParser,
//       parserOptions: {
//         ecmaFeatures: { jsx: true },
//         project: "./tsconfig.json",
//       },
//     },
//     plugins: {
//       "@typescript-eslint": tsPlugin,
//       "react-hooks": reactHooks,
//     },
//     rules: {
//       "@typescript-eslint/no-explicit-any": "off",
//       "react-hooks/rules-of-hooks": "error",
//       "react-hooks/exhaustive-deps": "warn",
//       "no-undef": "off",
//     },
//   },
// ]);

// export default eslintConfig;


import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";

const eslintConfig = [
  js.configs.recommended,

  // 2️⃣ aturan Next.js
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  // 3️⃣ aturan TypeScript + React Hooks
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      // boleh ubah sesuai kebutuhan
      "@typescript-eslint/no-explicit-any": "off",

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-undef": "off",
    },
  },
];

export default eslintConfig;
