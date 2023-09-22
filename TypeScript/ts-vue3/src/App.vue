<script setup lang="ts">
import Son from '@/components/Son.vue'
import { ref, computed } from 'vue';
const house = ref('大别野')
const age = ref(5555)
//子传递到父自定义函数触发事件
const fn = (val: string) => {
    console.log(val);

}
//
const fn1 = (val: string) => {
    console.log(val);

}


//ref在ts中
const msg = ref('statad')
const mag1 = ref<string>('大师的撒')
// 或者是复杂类型
const list = ref([
    { id: 1, name: '达大厦', fid: false },
    { id: 2, name: '达大55厦', fid: false },
    { id: 3, name: '达大46厦', fid: true },
])
//(这样写就会有各种代码提示)
type ToDo = {
    id: number;
    name: string;
    fid: boolean;
}[]
const list1 = ref<ToDo>([
    { id: 1, name: '达大厦', fid: false },
    { id: 2, name: '达大55厦', fid: false },
    { id: 3, name: '达大46厦', fid: true },
])

list1.value[0].fid

//计算属性 ts中使用 绝大部分常见都是不用指定类型,会类型推导

const letCount = computed<number>(() => {
    return list.value.filter(item => !item.fid).length
})

// 事件类型ts中
const fnn = (e: MouseEvent) => {
    console.log(e.pageX, e.pageY);


}

/////获取dom对象的ref
const img = document.createElement('img')   //来判断图片是什么类型
const gx = ref<HTMLImageElement | null>(null)
const btn = () => {
    console.log(gx.value);
    if (gx.value) {  //防止不存在
        //需求当点击后修改图片的地址直接写会报错应该指定类型
        gx.value.src = 'https://img2.baidu.com/it/u=3853345508,384760633&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1200'
    }

}
///内置类型声明文件
const strs =['a','b','c']
//鼠标放forEach上查看类型
strs.forEach
//jq
import $ from 'jquery';
//会报错没有类型声明文件
//安装第三方  npm i --save-dev @types/jquery   别人适配的jquery的类型声明文件
//$.ajax //安装完成后不仅不报错也会有代码提示
import Son1 from '@/components/Son1.vue'
</script>

<template>
    我是app
    <Son :house="house" :age="age" @getGift="fn" @getGift1="fn1"></Son>
    <Son :house="house"></Son>
    <h1>----------------------------------------------------------</h1>
    {{ letCount }}
    <h1>----------------------------------------------------------</h1>
    <button @click="fnn">点我获取位置</button>
    <h1>------------------------------------------------------</h1>
    <img ref="gx" src="https://img2.baidu.com/it/u=2969114901,1558934322&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=529" alt="">

    <button @click="btn">获取图片dom</button>
    <h1>22222222222222222222222222222222222222222222</h1>
    <Son1></Son1>
</template>

<style scoped></style>
