<template>
  <div>
    <h1>{{username}}</h1>
    <h1>{{password}}</h1>
    <h1>{{from}}</h1>
    <span>用户名:</span>
    <input type="text" name="" id="" v-model="username">
    <span>密码:</span>
    <input type="password" name="" id="" v-model="password">
    <br>
    <!-- //绑定下拉表单时 -->
    <select v-model="from" >
      <option value="江西省">江西</option>
      <option value="湖南省">湖南</option>
      <option value="湖北省">湖北</option>
    </select>
    <br>
    <!-- 复选框 -->
    <input type="checkbox"  value="冲冲冲" v-model="hobby">冲冲冲
    <input type="checkbox" value="急急急" v-model="hobby">急急急
    <input type="checkbox" value="是是是" v-model="hobby">是是是
    <!-- 单选框 -->
    <input type="radio" name="sex" value="男" v-model="gender">男
    <input type="radio" name="sex" value="女" v-model="gender">女
    <!-- 文本域 -->
    <textarea v-model="inito"></textarea>
  </div>
</template>

<script>
export default {
data() {
  return {
    username:'',
    password:'',
    from:'',
    hobby:[],
    gender:'男',
    inito:''
  }
},
}
</script>

<style>

</style>