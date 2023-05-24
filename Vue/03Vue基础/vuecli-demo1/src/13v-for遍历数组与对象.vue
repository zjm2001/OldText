<template>
  <div>
       <!-- 数组的循环遍历生成 -->
   <ul>
    <li v-for="(item,index) in arr" :key="index">
     <span>序号为{{index}}的值是{{item}}</span>
    </li>
   </ul>
   <!-- 遍历数组对象 -->
   <table cellspacing =0>
    <tr >
      <td>序号</td>
      <td>id</td>
      <td>姓名</td>
      <td>年龄</td>
      <td>性别</td>
    </tr>
       <tr v-for="(value,index) in obj" :key="value.id">
         <td>{{ index }}</td>
         <td>{{ value.id }}</td>
         <td>{{ value.name }}</td>
         <td>{{ value.age }}</td>
         <td>{{ value.sex}}</td>
      </tr>
   </table>
   <!-- 遍历数组对象 -->
  <p v-for="(value,key,index) in obj1" :key="index">{{key}} ---{{value}}</p>
  </div>
</template>

<script>
export default {
data() {
  return {
    arr:[1111,22222,3333,5555,55548],
    obj:[
      { id:112,name:'zjm55',age:20,sex:'男'},
      { id:222,name:'zjm645',age:20,sex:'男'},
      { id:3222,name:'zjm21311',age:20,sex:'男'},
      { id:4010,name:'zjm31',age:20,sex:'男'},
      { id:5,name:'zjm123',age:20,sex:'男'},
      { id:610,name:'zjm213',age:20,sex:'男'},  
  ],
    obj1:{uname:'zzzzz',hobby:'敲代码',age:'520'}
  }
},
}
</script>

<style>
li{
  list-style: none;
}

td{
  width: 120px;
  text-align: center;
  border:1px solid #ccc;
}
</style>