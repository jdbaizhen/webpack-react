const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool : "source-map", //方便调试
    entry : './app/main.js',
    output : {
        path : __dirname+'/build',
        filename : 'bundle-[hash].js'
    },
    devServer : {                  //webpack-dev-server会为根文件夹提供本地服务器
        contentBase : './public', //本地服务器加载页面所在目录
        port : 1222,
        inline : true,              //源文件改变自动刷新页面
        historyApiFallback : true,   //单页开发使用，默认所有跳转至index.html，也就是不跳转
        hot :true
    },
    module : {
        rules : [
            {
                test : /(\.js|\.jsx)$/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : ["react","env"]
                    }
                },
                exclude : /node_modules/
            },
            {
                test : /(\.css|\.less)$/,
                use : [
                    {loader : 'style-loader'},
                    {
                        loader : 'css-loader',
                        options : {
                            modules : true //指定启用css modules ,给引入的css文件命名，然后使用{style.类名的方式引入样式}
                        }
                    },
                    {loader : 'postcss-loader'} //给css自动添加前缀
                ]
            },
            {
                test : /\.(eot|svg|woff|woff2|ttf|jpg|png|gif)$/,
                use : {
                    loader : 'url-loader',
                    options : {
                        limit : 8192
                    }
                }
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.optimize.UglifyJsPlugin(),  //压缩js代码
        new ExtractTextWebpackPlugin('style.css'),         //分离css和js
        new CleanWebpackPlugin('build/*.*',{    //移除build下的所有文件
            root : __dirname,     //跟目录
            verbose : true      //控制台日志
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]

}
