//引入path模块
var path = require("path");
// 引入html-webpack-plugin模块
var htmlWP = require("html-webpack-plugin");
// 向外暴露一个配置对象
module.exports = {
    // 入口配置
    entry:path.resolve(__dirname,'./src/main.js'),
    // 输出配置
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    // 插件配置
    plugins:[
        new htmlWP({
            template:path.resolve(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    // 模块配置
    module:{
        // 配置非js模块的处理规则
        rules:[
            // css模块
            {
                // 使用css-loader打包css文件，使用style-loader注入css到html页面
                test:/\.css$/,
                use: ['style-loader', 'css-loader']//执行顺序为倒序
            },
            // less模块
            {
                // 使用less-loader解析less文件为css文件，然后使用css-loader打包css文件，使用style-loader注入css到html页面
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']//执行顺序为倒序
            },
            // 静态资源模块
            {
                test:/\.(img|png|jpg|jpeg|gif|mp3|mp4|avi|svg|woff|ttf|eot)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{ limit:10240 }
                    }
                ]
            },
            // js模块,使用babel-loader将es6语法转换为浏览器支持的es5语法
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude:/node_modules/
            },
            // vue模块
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    // webpack-dev-server的配置
    devServer:{
        open:true,//是否自动打开浏览器
        port:8080,//端口
        contentBase:'dist'//开启服务的目录
    }
}