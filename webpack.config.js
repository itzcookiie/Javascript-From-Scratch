const webpack = require('webpack')
const path = require('path');

module.exports = () => {

    const baseConfig = {
        devtool: "inline-source-map",
        mode: "development",
        optimization: {
            minimize: true
        }
    }

    const mainWebpack = {
        ...baseConfig,
        entry: './src/react.jsx',
        output: {
            filename: "main.js",
            path: path.resolve(__dirname, "dist")
        },
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                envName: 'reactAndTypeScript'
                            }
                        },
                    ]
                }
            ]
        },
    }

    const minorWebpack = {
        ...baseConfig,
        entry: './src/testfile2.js',
        output: {
            filename: "minor.js",
            path: path.resolve(__dirname, "dist")
        },
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                envName: 'justJavascript'
                            }
                        }
                    ]
                }
            ]
        },
    }

    return [mainWebpack, minorWebpack]
}