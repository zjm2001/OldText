<template>
  <div>
<div class="box"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
// 在vue2项目中使用less 是webpack4版本,使用less-loader@5.0.0版本
@color:red;
.box{
  width: 200px;
  height: 200px;
  background-color: @color;
}
</style>