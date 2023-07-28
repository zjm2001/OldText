<script setup>
//子组件接收
//使用语法糖setup接收时defineProps(进行接收)
const props =defineProps({
    cat:{type:String,required:true},
    num:Number
})
//脚本内使用时需要props.名称模板中直接使用
console.log(props.cat);
const emit =defineEmits(['get-num'])
const sendNum= ()=>{
    emit('get-num',1)
}
</script>
<template>
        <h1>我是子组件</h1>
        <p>父组件传递过来的值: {{cat}} , {{num}} <button @click="sendNum">点击改变父中num--</button></p>
</template>