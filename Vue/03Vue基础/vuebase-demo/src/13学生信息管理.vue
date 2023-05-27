<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.number="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="btn">添加/修改</button>
    </div>
    <div>
      <table  cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(obj, index) in list" :key="index">
          <td>{{ obj.id }}</td>
          <td>{{ obj.name }}</td>
          <td>{{ obj.age }}</td>
          <td>{{ obj.sex }}</td>
          <td>
            <button @click="del(obj.id)">删除</button>
            <button @click="edit(obj.id)">编辑</button>
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
      list: [],
      name: '',
      age: '',
      sex: '',
      id: 1,
      key:''
    }
  },
  methods: {
    btn() {
      if (this.name === '' || this.sex === '') {
        alert('不能为空')
      } else {

        if(this.key !== ''){
           //编辑状态
           this.list[this.key - 1].name=this.name
           this.list[this.key - 1].sex=this.sex
           this.list[this.key - 1].age=this.age
           this.key=''

        }else{
          //添加状态
          this.list.push({
          id: this.id++,
          name: this.name,
          age: this.age,
          sex: this.sex
        })
        }
        this.name = ''
        this.sex = ''
        this.age = ''
      }
    },
    del(id) {
      // console.log(id);
      this.list.splice(id - 1, 1)
    },
    edit(id) {

      // console.log(this.list[id - 1])
      this.name = this.list[id - 1].name
      this.sex = this.list[id - 1].sex
      this.age = this.list[id - 1].age
      this.key=id;
    }
  },

}
</script>

<style lang="">
td,th{
  border: 1px solid rgb(132, 129, 129);
}
</style>