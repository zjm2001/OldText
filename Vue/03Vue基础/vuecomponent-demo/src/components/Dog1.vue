<template>
  <div class="box" >
     <img :src="imgstr" alt="">
     <p  :style="{backgroundColor: colorStr}" @click="btn">{{str}}</p>
    
  </div>
</template>

<script>
export default {
props:['imgstr','str'],
data() {
    return {
        colorStr: ""
    }
},
methods:{
    btn(){
        this.colorStr = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
          // 补充: 触发父级事件
      this.$emit("namelist", this.str);
    }
}
}
</script>

<style scoped>
.box{
    padding: 10px;
    width: 400px;
    margin: 0 auto;
}
img{
    margin: 0 auto;
    width: 400px;
    height: 300px;
    background-color: rgb(89, 119, 179);
}
p{
    text-align: center;
}
</style>