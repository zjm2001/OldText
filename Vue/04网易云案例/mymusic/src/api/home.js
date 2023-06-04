import request from '../utils/request'
//这是一个热门推荐的部分
export const banner=params=> request({
    url:'/banner',   //type参数设置需要轮播图的类型
    params
   
})

//按需导出一个推荐歌单的网络请求
export const recommend = params => request({
    url: '/personalized',
    params    //limit: 取出数量 , 默认为 30 (不支持 offset)
})
//按需导出一个热门歌手的网络请求
export const artists = params => request({
    url: '/top/artists',
    params   //需要传入offset: 偏移数量 , 用于分页默认为0 , limit: 取出数量 , 默认为 50
})
// 首页 - 推荐最新音乐
export const newMusic = params => request({
    url: "/personalized/newsong",
    params
})