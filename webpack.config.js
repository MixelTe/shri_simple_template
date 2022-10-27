const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;
const ProvidePlugin = require('webpack').ProvidePlugin;

const config = {
    mode: "development",
    target: "web",
    entry: {
        index: "./src/index.js",
        about: './src/pages/About.js',
        home: './src/pages/Home.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new StatoscopePlugin({
            saveStatsTo: 'stats.json',
            saveOnlyStats: false,
            open: false,
        }),
        new ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: ["/node_modules/"],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                exclude: ["/node_modules/"],
            },
        ],
    },
    resolve: {
        fallback: {
            stream: require.resolve('stream-browserify'),
            crypto: require.resolve('crypto-browserify'),
        },
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            // "bn.js": false,
            // isarray: path.join(
            //     paths.MONOREPO_ROOT,
            //     "node_modules/buffer/node_modules/isarray/index.js"
            // ),
            // "isarray.js": path.join(
            //     paths.MONOREPO_ROOT,
            //     "node_modules/buffer/node_modules/isarray/index.js"
            // ),
        }
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    optimization: {
        concatenateModules: true,
        splitChunks: {
            minChunks: 2,
            chunks: 'all',
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                },
            },
        },
        runtimeChunk: {
            name: 'runtime',
            name: 'lodash',
        },
        minimize: true,
        moduleIds: "deterministic",
        innerGraph: true,
    },
    // @TODO lodash treeshaking
};

module.exports = config;
