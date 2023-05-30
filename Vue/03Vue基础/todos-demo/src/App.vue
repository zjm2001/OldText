<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @strinpnut="fn" :arr="list"></TodoHeader>
    <TodoMain :arr="list" @del="delfn"></TodoMain>
    <TodoFooter :fil="showArr" @changeType="typeFn" @clear="clearfn"></TodoFooter>
  </section>
</template>

<script>
// 1.0 样式引入
import "./styles/base.css"
import "./styles/index.css"

import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";


export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem('todoList')) || [],
      getSel: "all" // 默认显示全部
    }
  },
  methods: {
    //新增接收传过来的参数添加
    fn(str) {
      let id = this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1
      this.list.push(
        {
          id: id,
          name: str,
          isDone: false
        }
      )
    },
    delfn(id) {
      //根据id筛选出下标
      let index = this.list.findIndex(obj => obj.id === id)
      this.list.splice(index, 1)
    },
    //切换完成和未完成
    typeFn(str) {

      this.getSel = str
    },
    //点击清除操作接收子传递数据
    clearfn() {
      //筛选出属性isdone不为false的数据
      this.list=this.list.filter(obj => obj.isDone ===false)
    }
  },
  computed: {
    //计算属性计算发送那个数据
    showArr() {
      if (this.getSel === 'yes') { // 显示已完成
        return this.list.filter(obj => obj.isDone === true)
      } else if (this.getSel === 'no') { // 显示未完成
        return this.list.filter(obj => obj.isDone === false)
      } else {
        return this.list // 全部显示
      }
    }
  },
  watch:{
    list:{
      deep:true, //深度监听复杂类型内变化
      handler(){
        localStorage.setItem('todoList', JSON.stringify(this.list))
    
    }
    }
  }

};
</script>