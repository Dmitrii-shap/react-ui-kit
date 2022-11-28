const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    cache: false,
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'umd',
        },
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
    externals: {
        react: 'react',
        'styled-components': 'styled-components',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/@types',
                    to: '@types',
                },
            ],
        }),
    ],
};
