//写代码
//yarn add jquery
//pub 下有index.html
//引入jq
import $ from 'jquery'

//隔行变色代码
$('#lis>li:odd').css('color', 'red')
$('#lis>li:even').css('color', 'green')
//引入css文件
import './css/one.css'
//引入less
import './css/index.less'
// 引入sass
import './css/text.scss'
//手动引入一个图片文件
// webpack万物皆模块
import imgObj from './assets/2.jpg'
let theImg = document.createElement("img")
theImg.src = imgObj
document.body.appendChild(theImg)
//引入字体图标样式文件
import "./assets/fonts/iconfont.css"
let theI = document.createElement("i")
theI.className = "iconfont icon-qq"
document.body.appendChild(theI)