module.exports = {
    root: true,
    extends: ["eslint-config-ali/typescript"],
    parser: "@typescript-eslint/parser",
    rules: {
        uotes: [1, "double"],
        semi: [0],
        "no-console": "off",
        trailingComma: 0,
        "comma-dangle": ["error", "only-multiline"],
        "import/extensions": "off",
        "max-len": [1, 200],
        "no-nested-ternary": "off",
        "no-multi-assign": "off"
    }
}