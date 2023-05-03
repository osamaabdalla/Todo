module.exports = {
    root: true,
    extends: '@react-native-community',
    plugins: ['import'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'linebreak-style': 0,
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                alias: {
                    _assets: './src/assets',
                    _navigations: './src/navigations',
                    _components: './src/components',
                    _providers: './src/providers',
                    _screens: './src/screens',
                    _utils: './src/utils',
                },
            },
        },
    },
};
