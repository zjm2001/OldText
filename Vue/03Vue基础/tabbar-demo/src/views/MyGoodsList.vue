<template>
  <div>
    <MyTable :arr="list">
      <template #header>
         <th>#</th>
          <th>商品名称</th>
          <th>价格</th>
          <th>标签</th>
          <th>操作</th>
      </template>
      <template #body="scope">
        <td>{{ scope.obj.id }}</td>
        <td>{{scope.obj.uname }}</td>
        <td>¥{{scope.obj.price }}</td>
        <td>
          <input
          class="tag-input form-control"
          style="width: 100px;"
          type="text"
          v-if="scope.obj.inputVisible"
          v-focus
          v-model="scope.obj.inputValue"
          @blur="scope.obj.inputVisible = false"
          @keydown.enter="keyenter(scope.obj)"
          />
          <button 
          v-else 
          style="display: block;" 
          class="btn btn-primary btn-sm add-tag"
          @click="scope.obj.inputVisible = true"
          >+Tag</button>
          <!-- {{ scope.obj.tags }} -->
          <span v-for="(str,ind) in scope.obj.tags" :key="ind"   class=" badge acc bg-success">
          {{str}}</span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.obj.id)">删除</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable";
export default {
  components:{
    MyTable,
  },
data() {
  return {
    list:[
    {
      id:1,
      uname:'Teenmix/天美一下课爱上高端公司大孤独感的课间啊三个点管局和发噶交付给价格放假啊加',
      price:298,
      inputValue:'',
      inputVisible:false,
      tags:['舒适','透气']
    },
    {
      id:2,
      uname:'Teenmix/天美一下课氨基酸的煎三十多岁的答案近噶几房管局和发噶交付给价格放假啊加',
      price:2958,
      inputValue:'',
      inputVisible:false,
      tags:['舒适',]
    },
    {
      id:3,
      uname:'Teenmix/天美一下课氨基酸管局和发噶交付给价格放假啊加',
      price:28,
      inputValue:'',
      inputVisible:false,
      tags:['舒适','透气']
    },
    {
      id:4,
      uname:'Teenmix/天美一下课氨大师赛基酸的煎熬是给大家家附近噶几房管局和发噶交付给价格放假啊加',
      price:2985,
      inputValue:'',
      inputVisible:false,
      tags:['舒适','saf']
    },
    {
      id:5,
      uname:'Teenmix/天美一下课氨大师赛基酸的煎熬是给大家家附近噶几房管局和发噶交付给价格放假啊加',
      price:2985,
      inputValue:'',
      inputVisible:false,
      tags:['发发','透气']
    },
    {
      id:6,
      uname:'Teenmix/发卡行发困话费卡喝咖啡好看',
      price:2985,
      inputValue:'',
      inputVisible:false,
      tags:['舒适','大萨达']
    },
    {
      id:7,
      uname:'Teenmix/发卡恒生科技发喝咖啡好看撒付货款萨克',
      price:2985,
      inputValue:'',
      inputVisible:false,
      tags:['舒适','看见的']
    },
    ]
  }
},
methods: {
  // 点击删除按钮
  del(index){
  let ind= this.list.findIndex(obj=> obj.id === index)
  console.log(ind);
  this.list.splice(ind,1)
  },
  //键盘按下回车事件
  keyenter(obj){
      // console.log(obj.inputValue);
      if (obj.inputValue.trim().length === 0) {
        alert('请输入数据')
        return
    }

    obj.tags.push(obj.inputValue) // 表单里的字符串状态tags数组
    obj.inputValue = ""

  }
},
}
</script>

<style  lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 10px;
  }
}
.acc{
  padding: 7px;
  margin: 5px;
}
</style>