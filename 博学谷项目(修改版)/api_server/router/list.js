const express = require('express');
const router = express.Router()
//导入list获取函数
const{listMicro,listTab,listTitle}=require('../router_had/list_had')
//主页视频课程列表
router.get('/micro',listMicro)
//分类导航部分
router.get('/tab',listTab)
//title数量小课程
router.get('/title',listTitle)
module.exports = router