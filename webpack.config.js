    'use strict';
    const path = require('path');
    const htmlWebpackPlugin = require('html-webpack-plugin');
    // const ExtractTextPlugin = require("extract-text-webpack-plugin");
    // const webpack = require('webpack');
    // const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    module.exports = {
        entry:{ //main是默认入口,也可以是多入口
            main:'./src/main.js',
            // vendors:['vue','vue-router','moment','axios'],
        },
        //出口
        output:{
            // filename:'./build.js', //指定js文件
            path: path.join(__dirname,'dist_product1'),          //最好是绝对路径
            //代表当前目录的上一级的dist
            //设置资源路径的请求地址
            publicPath:'/',
            filename:'./build.js'
            // filename:'js/[name].[chunkhash:6].js',
        },
        module:{
            //一样的功能rules:   webpack2.x之后新加的
            rules:[       //require('./a.css||./a.js')
                {test:/\.css$/,
                 loader:'style-loader!css-loader',
                 //    use: ExtractTextPlugin.extract({
                 //        fallback: "style-loader",
                 //        use: "css-loader"
                 //    })
                 //顺序是反过来的2!1
                },
                {
                 test:/\.(jpg|svg|png|gif)$/,
                 loader:'url-loader?limit=4096&name=assets/[name].[ext]',
                 //顺序是反过来的2!1
                 //[name].[ext]内置提供的，因为本身是先读这个文件
                 // options:{
                 //    limit:4096,
                 //    name:'[name].[ext]'
                 // }
                },{//处理ES6的js
                    test:/\.js$/,
                    loader:'babel-loader',
                    //排除 node_modules下的所有
                    exclude:/node_modules/,
                    options:{
                        presets:['es2015'],//关键字
                        plugins:['transform-runtime'],//函数
                    }
                },{//解析vue
                    test:/\.vue$/,
                    loader:'vue-loader',//vue-template-compiler是代码上的依赖
                },{
                    test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' // 处理 字体文件的 loader
                }
            ]
        },
        performance: {
            hints: false
        },
        devServer: {
            historyApiFallback: true,
            noInfo: true
        },
        devtool: '#eval-source-map',
        plugins:[
            // new UglifyJsPlugin(),
            // new webpack.optimize.CommonsChunkPlugin({
            //     //manifest是清单（自己定义的），用来记录使用者和第三方包的关系
            //     names:['vendors','manifest'],
            // }),
            // new ExtractTextPlugin("css/[name].[contenthash:6].css"),
            //插件的执行顺序是依次执行的
            new htmlWebpackPlugin({
                template:'./src/index.html',
                }),
                //将src下的template属性描述的文件根据当前配置的output.path，将文件移动到该目录
            //将开发板转换成线上版
            // new webpack.DefinePlugin({
            //     'process.env': {
            //         NODE_ENV:'"production"'
            //     }
            // })
        ]
    };
    if (process.env.NODE_ENV === 'production') {
        module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
        module.exports.plugins = (module.exports.plugins || []).concat([
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ])
    }
