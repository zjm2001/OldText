<script setup>
import SonCom from './components/son-com.vue';
import {ref} from 'vue';
const num =ref(100)
const chengeNum = ()=>{
  num.value++
}
const fn=(newNum)=>{
  num.value=num.value-newNum

}

</script>
  <template>
      <h1>我是父组件  <button @click="chengeNum">父组件num++</button></h1>
      <p>父组件的num:{{num}}</p>
      <p>-----------------------------</p>
      <!-- 使用语法糖serup写法局部组件可以直接使用 -->
      <SonCom cat="无敌大跑车" :num="num" @get-num="fn"></SonCom>
  </template>