var webpack = require('webpack');
module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module: {		//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
      	test:/\.js$/,
      	exclude:/node_modules/,
      	loader: 'babel',
      	query: {
      		presets: ['es2015','react'],   // 这部分内容可以单独写成一个babelrc文件
      		"env": {
      			"development": {
    			    "plugins": [
              ["react-transform", {
    			       "transforms": [{
    			         "transform": "react-transform-hmr",

    			         "imports": ["react"],

    			         "locals": ["module"]
    			       }]
    			     }]
               ]
  			    }
      		}
      	}
      },
      {
      	test: /\.css$/,
      	loader: 'style!css' // 添加对样式表的处理
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {    
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
}