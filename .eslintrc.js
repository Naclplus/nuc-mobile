module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parserOptions": {
        "sourceType": "module",
        "parser": "babel-eslint",
        "ecmaVersion": 2017
    },
    "plugins": ["vue"],
    "extends": [
        "eslint:recommended",
        "standard",
        "plugin:vue/base",
        "plugin:vue/essential",
        "plugin:vue/strongly-recommended",
        "plugin:vue/recommended"
    ],
    "rules": {
        "no-new": 0,
        "arrow-parens": 1,
        "generator-star-spacing": 1,
        "no-debugger": 1,
        "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
        "vue/html-indent": [1, 4],
        "indent": [1, 4],
        "vue/name-property-casing": ["error", "kebab-case"],
        "vue/max-attributes-per-line": [2, {
            "singleline": 4,
            "multiline": {
                "max": 4,
                "allowFirstLine": false
            }
        }],
        "vue/no-v-html": 0,
        "vue/no-unused-components": 0,
        "vue/component-name-in-template-casing": ["error", "kebab-case"],
        "vue/singleline-html-element-content-newline": 0
    }
}
