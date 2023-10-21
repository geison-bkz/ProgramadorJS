module.exports = {
    env: {
        browser: true,
        es2024: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'airbnb', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {},
};
