<template>
    <footer class="footer">
        <span class="todo-count">剩余<strong>{{ count }}</strong></span>
        <ul class="filters" @click="fn">
            <li>
                <a href="javascript:;" :class="{selected: isSel === 'all'}" @click="isSel='all'">全部</a>
            </li>
            <li>
                <a :class="{selected: isSel === 'no'}" href="javascript:;" @click="isSel='no'">未完成</a>
            </li>
            <li>
                <a :class="{selected: isSel === 'yes'}" href="javascript:;" @click="isSel='yes'">已完成</a>
            </li>
        </ul>
        <button class="clear-completed" @click="clear">清除已完成</button>
    </footer>
</template>
  
<script>
export default {
    props: ['fil'],
    data() {
        return {
            isSel: 'all' // 全部:'all', 已完成'yes', 未完成'no'
        }
    },
    computed: {
        count() {
            return this.fil.length
        }
    },
    methods: {
        fn() {
            // 6.3 子 -> 父 把类型字符串传给App.vue 
            this.$emit("changeType", this.isSel)

        },
        clear(){
            //触发一下事件让父亲知道事件触发做出反映
            this.$emit('clear')
        }
    }

}
</script>