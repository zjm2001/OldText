const path = require('path'); //导入路径模块
module.exports = {
  entry: './src/main.js', // webpack入口  .代表当前文件夹
  output: { // 出口
    path: path.resolve(__dirname, 'dist'),  //拼接路径文件夹名字
    filename: 'js/bundle.js',  //打包完成名称
  },
};