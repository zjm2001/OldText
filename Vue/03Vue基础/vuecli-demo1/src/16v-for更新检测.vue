<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }}</li>
    </ul>
    <button @click="btn1">翻转数组</button>
    <button @click="btn2">截取</button>
    <button @click="btn3">改变数组值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 5, 6,]
    }
  },
  methods: {
    // 翻转数组可以更新
    btn1() {
      this.list.reverse()
    },
    btn2() {
      // slice不会更新v-for
      this.list = this.list.slice(0, 3)
    },
    btn3() {
      //更新某个值时 v-for检测不到
      this.list[0] = '重中之重'
      this.$set(this.list,0,'吱吱吱')

    },
  },

}
</script>

<style lang="">

</style>