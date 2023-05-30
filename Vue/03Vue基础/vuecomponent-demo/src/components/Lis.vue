<template>
  <div>
    <li>
        <input type="number" v-model.number="num" @input="fn()"> <span>{{ uname }}</span> <span v-show="isok">卖光了</span>
    </li>
  </div>
</template>

<script>
export default {
    props:['num','uname','index'],
    methods:{
        fn(){
             this.$emit('strinpnut',this.index,this.num)
        }
    },
    computed:{
        isok(){
           return this.num<=0
        }
    }

}
</script>

<style>

</style>