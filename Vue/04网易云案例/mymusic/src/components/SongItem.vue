<template>
    <div>
        <van-cell center :title="cname" :label="uname + ' - ' + cname" @click="btn()">
            <template #icon>
                <van-image class="titleimg" :src="pic" />
            </template>
            <template #right-icon>
                <van-icon name="play-circle-o" size="0.6rem" />
            </template>
        </van-cell>
    </div>
</template>

<script>
export default {
    props: ['pic','cname','id', 'uname'],
    methods:{
        // 点击跳转到play页面
      btn(){
        this.$router.push({
            path: '/play',
            query: {
                id: this.id // 歌曲id, 通过路由跳转传递过去
            }
        })
      }
    },
    created(){
        // console.log(this.uname);
    }
}
</script>

<style scoped>
.titleimg {
    margin-left: -20px;
    width: 80px;
    height: 100%;
    padding: 0 .2rem;
}

.custom-title {
    text-align: center;
}
</style>