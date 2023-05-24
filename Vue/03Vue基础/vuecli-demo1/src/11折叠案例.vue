<template>
  <div>
    <div class="box">
      <h1>折叠面板</h1>
      <table>
        <tr>
          <td>
            <h3>静夜思</h3>
            <p>李白</p>
            <span @click="hide">{{str}}</span>
          </td>
        </tr>
        <tr v-show="key">
          <td>
            <p>床前明月光,疑是地上霜</p>
            <p>举头望明月,低头思故乡</p>
          </td>

        </tr>
      </table>
    </div>

  </div>
</template>

<script>
export default {
data() {
  return {
    str:'收起',
    key:true
  }
},
methods:{
  hide(){
    if(this.str ==='收起'){
      this.key=false
      this.str='展开'
    }else if(this.str==='展开'){
      this.key=true
      this.str='收起'
    }
     
  }
}
}
</script>

<style>
.box {
  margin: 0 auto;
  width: 500px;
  height: 300px;
  /* background-color: aqua; */
}

h1 {
  text-align: center;
}
span{
  float: right;
  cursor: pointer;
}
table{
  width: 100%;
}
td {
  text-align: center;
  border: 1px solid #ccc;
}</style>