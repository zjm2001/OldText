//写代码
//yarn add jquery
//pub 下有index.html
//引入jq
import $  from 'jquery'

//隔行变色代码
$('#lis>li:odd').css('color','red')
$('#lis>li:even').css('color','green')
//引入css文件
import './css/index.css'