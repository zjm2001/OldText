<template>
    <header class="header">
      <h1>todos</h1>
      <input id="toggle-all" class="toggle-all" type="checkbox"  v-model="isAll">
      <label for="toggle-all"></label>
      <input
        class="new-todo"
        placeholder="输入任务名称-回车确认"
        autofocus
        v-model="str"
        @keydown.enter="fun1"
      />
    </header>
  </template>
  
  <script>
  export default {
    props:['arr'],
    data() {
        return {
            str:''
        }
    },
   methods: {
    fun1(){
        if(this.str.trim().length===0){
            alert('不能为空')
        }else{
            this.$emit('strinpnut',this.str.trim())
            this.str=''
        }
       
    }
   },
   computed:{
      isAll:{
        set(checked) {
          this.arr.forEach(obj => obj.isDone = checked)
        },
        get(){
            //统计小选框影响他的状态
            return this.arr.length !== 0 && this.arr.every(obj => obj.isDone === true)
        }
      }
   },
  }
  </script>