<template>
  <div @click="fn">
    <button @click.stop="fn1">
      <div class="stop"></div>阻止事件冒泡修饰符
    </button>
    <a href="http://wwww.baidu.com" @click.prevent="fn2">阻止默认事件</a>
    <button @click.once="fn3">只触发一次事件修饰符</button>
  </div>
</template>

<script>
export default {
  methods: {
    fn() {
      console.log('点击了父亲');
    },
    fn1() {
      console.log('点击了儿子');
    },
    fn2() {
      console.log('阻止了默认');
    },
    fn3(){
      console.log('只能触发一次事件');
    }
  }
}
</script>

<style></style>