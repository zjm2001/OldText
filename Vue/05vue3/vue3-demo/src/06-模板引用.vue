<script setup>
import TextCom from './components/Text-com.vue';
import { ref,onMounted } from 'vue'
const inp=ref(null)
console.log(inp.value);   //会是null
//使用生命周期钩子onMounted
onMounted(() => {
  console.log(inp.value);   //获取到dom元素
  console.log(textRef.value.num);
  textRef.value.siHi()
})
//-------------------------------------
//得到组件
const textRef=ref(null)

</script>
  <template>
<input type="text" ref="inp">

 <TextCom ref="textRef"></TextCom>
  </template>