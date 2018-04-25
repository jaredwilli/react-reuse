module.exports = {
    parser: 'babel-eslint',
    plugins: ['react'],
    extends: ['eslint:recommended'],
    env: {
        'commonjs': true,
        'browser': true,
        'node': true,
        'es6': true,
        'jest': true
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    rules: {
        'strict': 0,
        'no-var': 'error',
        'no-with': 'error',
        'no-undef': 'warn',
        'no-tabs': 'error',
        'no-eval': 'error',
        'no-alert': 'error',
        'no-console': 'off',
        'camelcase': 'error',
        'no-debugger': 'warn',
        'semi': [2, 'always'],
        'quotes': [2, 'single'],
        'prefer-const': 'error',
        'no-lonely-if': 'error',
        'no-unused-vars': 'warn',
        'no-extra-semi': 'error',
        'react/jsx-key': 'error',
        'no-else-return': 'error',
        'no-unreachable': 'error',
        'prefer-template': 'error',
        'no-const-assign': 'error',
        'max-params': ['error', 3],
        'constructor-super': 'warn',
        'no-empty-function': 'error',
        'comma-dangle': [2, 'never'],
        'react/jsx-uses-vars': 'error',
        'spaced-comment': [2, 'always'],
        'no-this-before-super': 'error',
        'no-duplicate-imports': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-no-duplicate-props': [2],
        'react/jsx-closing-tag-location': 'warn',
        'react/jsx-first-prop-new-line': 1,
        'react/no-direct-mutation-state': 'error',
        'react/jsx-closing-bracket-location': 'warn',
        'react/default-props-match-prop-types': 'error',
        'indent': ['error', 2, {
            SwitchCase: 1
        }],
        'react/prop-types': [2, {
            ignore: ['children']
        }],
        'react/prefer-stateless-function': [1, {
            'ignorePureComponents' : true
        }],
        'space-before-function-paren': ['error', {
            'asyncArrow': 'ignore',
            'anonymous': 'never',
            'named': 'never'
        }]
    }
};
