const path = require('path'); //导入路径模块
const HtmlWebpackPlugin = require('html-webpack-plugin')  //导入下载的插件
module.exports = {
  entry: './src/main.js', // webpack入口  .代表当前文件夹
  output: { // 出口
    path: path.resolve(__dirname, 'dist'),  //拼接路径文件夹名字
    filename: 'bundle.js',  //打包完成名称
  },
  //
  plugins: [new HtmlWebpackPlugin({
    template: './pub/index.html',   //指定用到的的模班文件
    filename: 'main.html'   //指定生成的文件名称该文件存在内存中目录不显示
  })]  ,
  module: {   //加载器配置
    rules: [    //规则
    //匹配.css结尾文件   然后把css插入到dom上
      {test: /\.css$/i,use: ["style-loader", "css-loader"],},
      {test: /\.less$/i,use: ['style-loader', 'css-loader', 'less-loader',],},
      { test: /\.s[ac]ss$/i,use: [ 'style-loader', 'css-loader','sass-loader', ], },
    ],
  }
};