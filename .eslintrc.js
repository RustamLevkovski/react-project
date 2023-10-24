module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script",
                project: './tsconfig-webpack.json',
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        "indent": "off",
        "@typescript-eslint/indent": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/no-misused-promises": "warn",
        'max-len': ['error', { ignoreComments: true, code: 100 }]
    },
    globals: {
        '__IS_DEV__': true
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
    ignorePatterns: [
        "webpack.config.ts",
        "config/jest/jest.config.ts",
        "config/jest/jestEmptyComponent.tsx"
    ]
}
