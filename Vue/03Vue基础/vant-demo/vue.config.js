const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports={
    devServer:{
        port:2000,
        open:true
    },
    lintOnSave:false,        //关闭eslint检查
    configureWebpack: {
        plugins: [
          ComponentsPlugin({
            resolvers: [VantResolver()],
          }),
        ],
      },
}