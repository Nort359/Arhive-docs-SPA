const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

// Глобальная константа, отвечающиая за состояние разработки: ('development' или 'production')
const STATE = process.env.STATE || 'development';

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    devtool: STATE === 'development' ? "eval" : 'source-map',

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
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
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
            STATE: JSON.stringify(STATE)
        })
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

if (STATE === 'production') {
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
