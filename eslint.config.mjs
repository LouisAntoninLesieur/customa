import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser },
    rules: {
      "indent": ["error", 2],
    }},
  pluginJs.configs.recommended,
];