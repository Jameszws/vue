/*
* webpack 配置
*/
var webpack = require("webpack");
var path = require('path');
var commonsPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    devtool: 'source-map',

    entry:{
        app:['./src/main.js'],
    }, //多页应用，多个入口文件
    
    output: {
        publicPath:"/dev/",
        path: path.resolve(__dirname, '..', 'dist'), //打包后的文件存放的地方
        filename: '[name].min.js' //打包后输出文件的文件名
    },
    
    resolve: { 
        extensions: ['.js'],
        alias: {
            vue: 'vue/dist/vue.js'
            //bootstrap:  path.resolve(__dirname, '..', 'node_modules/bootstrap/dist/css/bootstrap.min.css')
        }
    },
    
    module: {
        rules: [
            { test: /\.css$/,use: ['style-loader', 'css-loader'] },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','stage-0'],
                        plugins: ['transform-runtime']
                    }
                },
                exclude: /node_modules/
            },
            { test:/\.vue$/,loader:'vue-loader'},
        ]
    },

    plugins: [

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        
        new commonsPlugin('common'),
        
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin()
    ]

}
