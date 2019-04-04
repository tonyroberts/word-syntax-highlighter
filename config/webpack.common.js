const webpack = require('webpack');
const path = require('path');
const package = require('../package.json');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ThemesGeneratorPlugin = require('../plugins/ThemesGeneratorPlugin.js');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



const build = (() => {
    const timestamp = new Date().getTime();
    return {
        name: package.name,
        version: package.version,
        timestamp: timestamp,
        author: package.author
    };
})();

const rootUrl = (() => {
    switch(process.env.NODE_ENV) {
        case 'production':
            return "https://app.pyxll.com/word-syntax-highlighter";
        default:
            return "https://localhost:3000";
    }
})();

const entry = {
    vendor: [
        'react',
        'react-dom',
        'core-js',
        'office-ui-fabric-react'
    ],
    functions: [
        'react-hot-loader/patch',
        './functions.ts'
    ],
    app: [
        'react-hot-loader/patch',
        './index.tsx',
    ],
    error: [
        'react-hot-loader/patch',
        './error.tsx',
    ],
    about: [
        'react-hot-loader/patch',
        './about.tsx',
    ],
    privacy: [
        'react-hot-loader/patch',
        './privacy.tsx',
    ]
};

const rules = [
    {
        test: /\.tsx?$/,
        use: [
            'react-hot-loader/webpack',
            'ts-loader'
        ],
        exclude: /node_modules/
    },
    {
        test: /\.css$/,
        include: /highlight.js/,
        use: [
            'to-string-loader',
            'css-loader'
        ]
    },
    {
        test: /\.css$/,
        exclude: /highlight.js/,
        use: [
            'style-loader',
            'css-loader'
        ]
    },
    {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
    },
    {
        test: /\.txt$/,
        use: [
            'raw-loader'
        ]
    },
    {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: {
            loader: 'file-loader',
            query: {
                name: 'assets/[name].[ext]'
            }
        }
    },
    {
        test: /\.(scss)$/,
        use: [
            {'loader' : 'style-loader'}, // inject CSS to page
            {'loader': 'css-loader'}, // translates CSS into CommonJS modules
            {'loader': 'postcss-loader', // Run post css actions
                'options': {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                        return [
                            require('precss'),
                            require('autoprefixer')
                        ];
                    }
                }},
            {'loader': 'sass-loader'}] // compiles Sass to CSS
    }
];

const output = {
    path: path.resolve('dist'),
    publicPath: rootUrl,
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
};

const WEBPACK_PLUGINS = [
    new webpack.DefinePlugin({
        'ROOT_URL': JSON.stringify(rootUrl)
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin({ banner: `${build.name} v.${build.version} (${build.timestamp}) © ${build.author}` }),
    new webpack.DefinePlugin({
        ENVIRONMENT: JSON.stringify({
            build: build
        })
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer({ browsers: ['Safari >= 8', 'last 2 versions'] }),
            ],
            htmlLoader: {
                minimize: true
            }
        }
    }),
    new ThemesGeneratorPlugin({
        srcDir: 'src',
        themesDir: 'node_modules/highlight.js/styles',
        outputDir: 'highlight-js/styles',
        useStaticThemeName: true,
        clearTemp: process.env.NODE_ENV == 'production' ? true : false,
        themesLoader: {
            test: /\.css$/,
            loaders: [
                { loader: require.resolve('css-loader') }
            ]
        },
        filesLoader: {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            use: {
                loader: 'file-loader',
                query: {
                    name: 'highlight-js/styles/[name].[ext]'
                }
            }
        }
    })
    //new BundleAnalyzerPlugin()
];

module.exports = {
    context: path.resolve('./src'),
    entry,
    output,
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css', '.html']
    },
    module: {
        rules,
    },
    optimization: {
        splitChunks: {
          chunks: 'async',
          minChunks: Infinity,
          name: 'vendor'
        }
      },
    plugins: [
        ...WEBPACK_PLUGINS,
        new ExtractTextPlugin('[name].[hash].css'),
        new HtmlWebpackPlugin({
            title: 'Easy Syntax Highlighter AddIn',
            filename: 'index.html',
            template: './index.html',
            chunks: ['app', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            title: 'Easy Syntax Highlighter AddIn',
            filename: 'error.html',
            template: './error.html',
            chunks: ['error', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            title: 'Easy Syntax Highlighter Functions',
            filename: 'functions.html',
            template: './functions.html',
            chunks: ['functions', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            title: 'Easy Syntax Highlighter',
            filename: 'about.html',
            template: './about.html',
            chunks: ['about', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            title: 'Easy Syntax Highlighter',
            filename: 'privacy.html',
            template: './privacy.html',
            chunks: ['privacy', 'vendor', 'polyfills']
        }),
        new CopyWebpackPlugin([
            {
                from: '../assets',
                ignore: ['*.svg'],
                to: 'assets',
            }
        ])
    ]
};
