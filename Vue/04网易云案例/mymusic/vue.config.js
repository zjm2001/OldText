const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports={
    devServer:{
        port:3000,     //端口号
        open:true      //是否自动打开
    },
    lintOnSave:false ,       //关闭eslint检查
    configureWebpack: {
        plugins: [
          ComponentsPlugin({
            resolvers: [VantResolver()],
          }),
        ],
      },
}