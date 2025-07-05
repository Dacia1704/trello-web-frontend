import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        languageOptions: {
            globals: globals.browser,
        },
    },
    pluginReact.configs.flat.recommended,

    // 👇 Thêm đoạn này để tắt rule 'react/react-in-jsx-scope'
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        rules: {
            "react/react-in-jsx-scope": "off",
        },
    },
]);
