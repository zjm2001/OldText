<template>
    <div class="my-tab-bar">
        <div class="tab-item" v-for="(obj, index) in arr " 
        :key="index" 
        :class="{ current: index === selindex }"
        @click="btn(index)">
            <!-- 图标 -->
            <span class="iconfont" :class="obj.iconText"></span>
            <!-- 文字 -->
            <span>{{ obj.text }}</span>
        </div>
    </div>
</template>
  
<script>
export default {
    props: { arr: Array },
    data() {
        return {
            selindex: 0
        }
    },
    methods: {
        btn(index) {
            // console.log(index);
            this.selindex = index
            this.$emit('indexstr',this.arr[index].componentName)

        }
    }

}
</script>
  
<style lang="less" scoped>
.my-tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;

    .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.current {
    color: #1d7bff;
}
</style>