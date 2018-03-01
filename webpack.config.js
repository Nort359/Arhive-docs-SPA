const webpack = require('webpack'),
      path = require('path'),
      HtmlWebPackPlugin = require("html-webpack-plugin"),
      ExtractTextPlugin = require("extract-text-webpack-plugin");

// Глобальная константа, отвечающиая за состояние разработки: ('development' или 'production')
const NODE_ENV = process.env.NODE_ENV || 'development';

const extractSass = new ExtractTextPlugin({
    filename: "styles.css",
    disable: process.env.NODE_ENV === "development",
    allChunks: true
});

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: [ '.js', '.jsx' ]
    },

    devtool: NODE_ENV === 'development' ? "eval" : 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                data: "$env: " + process.env.NODE_ENV + ";"
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                                data: "$env: " + process.env.NODE_ENV + ";"
                            }
                        }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },

    plugins: [
        // Создание HTML файла по шаблону
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html",
            minify: {
                html5: true
            },
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        extractSass
    ],

    devServer: {
        host: 'localhost',
        port: 3000,
        contentBase: path.join(__dirname, "public"),

        inline: true,
        hot: true,
        historyApiFallback: true
    }
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}
