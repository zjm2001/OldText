<template>
  <div>
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
    <button @click="btn">走一走</button>
    <br>
    <ul>
      <li v-for="(item,index) in arr1" :key="index">{{item}} <button @click="del(index)">删除</button></li>
    </ul>
    <button @click="btn1">生成</button>
  </div>
</template>

<script>
export default {
 data() {
  return {
    arr:['帅哥','美女','小屁孩'],
    arr1:[1,5,3,5]

  }
 },
 methods: {
  btn(){
   let str= this.arr.shift()
   this.arr.push(str)
  },
  btn1(){
    //生成随机数
    let num = Math.floor(Math.random() * (20 - 0 + 1)) + 0
    this.arr1.push(num)
  },
  del(index){
    this.arr1.splice(index,1)

  }
 },
}
</script>

<style>

</style>