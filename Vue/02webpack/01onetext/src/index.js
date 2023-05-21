// 这是webpack打包入口
//按需导入add.js
import { addFn } from "./add/add.js";
import {getadd,name} from './tool/tool.js'
console.log(addFn(1,3))
getadd()
console.log(name);
