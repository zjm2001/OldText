<template>
  <div>
    <h1>{{str}}</h1><br>
    <button @click="fn">翻转世界</button>
  </div>
</template>

<script>
export default {
   data () {
    return {
      str:'HELLO,world'
    }
   },
   methods: {
    fn(){
    this.str=this.str.toLowerCase().split('').reverse().join('')
    }
   },
   
}
</script>

<style>

</style>