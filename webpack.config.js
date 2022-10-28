const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;
const ProvidePlugin = require('webpack').ProvidePlugin;

const config = {
    mode: "production",
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
            bn: path.join(__dirname, 'node_modules/bn.js/lib/bn.js'),
            'bn.js': path.join(__dirname, 'node_modules/bn.js/lib/bn.js'),
            // bn: false,
            // 'bn.js': false,
            isarray: path.join(__dirname, 'node_modules/isarray/index.js'),
            'isarray.js': path.join(__dirname, 'node_modules/isarray/index.js'),
            "react-is": path.join(__dirname, 'node_modules/react-is/index.js'),
            'react-is.js': path.join(__dirname, 'node_modules/react-is/index.js'),
            "safe-buffer": path.join(__dirname, 'node_modules/safe-buffer/index.js'),
            'safe-buffer.js': path.join(__dirname, 'node_modules/safe-buffer/index.js'),
            "string_decoder": path.join(__dirname, 'node_modules/string_decoder/lib/string_decoder.js'),
            'string_decoder.js': path.join(__dirname, 'node_modules/string_decoder/lib/string_decoder.js'),

            "readable-stream/readable": path.join(__dirname, 'node_modules/readable-stream/readable.js'),
            'readable-stream/readable.js': path.join(__dirname, 'node_modules/readable-stream/readable.js'),
            "readable-stream/writable": path.join(__dirname, 'node_modules/readable-stream/lib/_stream_writable.js'),
            "readable-stream/writable.js": path.join(__dirname, 'node_modules/readable-stream/lib/_stream_writable.js'),
            "readable-stream/duplex": path.join(__dirname, 'node_modules/readable-stream/lib/_stream_duplex.js'),
            "readable-stream/duplex.js": path.join(__dirname, 'node_modules/readable-stream/lib/_stream_duplex.js'),
            "readable-stream/transform": path.join(__dirname, 'node_modules/readable-stream/lib/_stream_transform.js'),
            "readable-stream/transform.js": path.join(__dirname, 'node_modules/readable-stream/lib/_stream_transform.js'),
            "readable-stream/passthrough": path.join(__dirname, 'node_modules/readable-stream/lib/_stream_passthrough.js'),
            "readable-stream/passthrough.js": path.join(__dirname, 'node_modules/readable-stream/lib/_stream_passthrough.js'),
        }
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    optimization: {
        removeEmptyChunks: false,
        usedExports: true,
        removeAvailableModules: true,
        mergeDuplicateChunks: true,
        concatenateModules: true,
        splitChunks: {
            minChunks: 2,
            chunks: 'all',
            minSize: 20000,
            maxSize: 250000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                },
            },
        },
        runtimeChunk: {
            name: 'runtime',
        },
        minimize: true,
        moduleIds: "deterministic",
        innerGraph: true,
    },
};

module.exports = config;
