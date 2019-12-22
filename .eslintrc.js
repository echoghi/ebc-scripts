module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true
    },
    extends: ['eslint:recommended', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-var': 'error',
        'no-unused-vars': 'error',
        'comma-dangle': ['error', 'never'],
        eqeqeq: ['error', 'always'],
        'no-multiple-empty-lines': [2, { max: 1 }],
        'no-multi-spaces': [2],

    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {}
};
