<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="obj in list" :key="obj.id">
            <td>{{ obj.id }}</td>
            <td>{{ obj.name }}</td>
            <td :class="{ red: obj.price > 100 }">{{ obj.price }}</td>
            <td>{{ obj.time | times }}</td>
            <td><a href="javascript:;" @click="del(obj.id)">删除</a></td>


          </tr>
        </tbody>
        <tr v-if="list.length !== 0">
          <td>统计:</td>
          <td colspan="2">总价为:{{ allcon }}</td>
          <td colspan="2">平均价:{{ avg }}</td>
        </tr>
        <tfoot v-show="list.length === 0">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>

      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="资产名称" v-model="name" />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="价格" v-model.number="price" />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="add">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
//引入处理事件的模块
import moment from 'moment'
export default {
  data() {
    return {
      name: "", // 名称
      price: '', // 价格
      list: JSON.parse(localStorage.getItem('plist'))|| [],
    };
  },
  methods: {
    add() {
      if (this.name === '' || this.price === '') {
        alert('不能为空');
        return
      } else {
        if (this.list.length !== 0) {
          console.log(111);
          this.list.push({
            // 当前数组最后一个对象的id+1作为新对象id值
            id: this.list[this.list.length - 1].id + 1,
            name: this.name,
            price: this.price,
            time: new Date()
          })

        } else {
          this.list.push({
            // 当前数组最后一个对象的id+1作为新对象id值
            id: 100,
            name: this.name,
            price: this.price,
            time: new Date()
          })

        }

        this.name = ''
        this.price = ''
      }

    },
    del(id) {
      // 通过id找到这条数据在数组中下标
      let index = this.list.findIndex(obj => obj.id === id)
      this.list.splice(index, 1)
    }
  },
  filters: {
    times(val) {
      return moment(val).format('YYYY-MM-DD')
    }
  },
  computed: {
    allcon() {
      return this.list.reduce((sum, obj) => { return sum + obj.price }, 0)
    },
    avg() {
      return (this.allcon / this.list.length).toFixed(2)
    }
  },
  watch:{
    list:{
      immediate:true, //立即执行网页打开就执行一次
      deep:true, //深度监听复杂类型内变化
      handler(){
        localStorage.setItem('plist',JSON.stringify(this.list))
      }
    }
  }

};
</script>

<style >
.red {
  color: red;
}

.form-inline {
  display: flex;
}
</style>