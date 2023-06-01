<template>
    <div>
        <!-- //默认插槽不传递数据 -->
        <MyTable :arr="list"></MyTable>
        <!-- 作用域插槽传递a标签 -->
        <MyTable :arr="list">
            <template v-slot="scope">
                <a :href="scope.row.headImgUrl">{{scope.row.headImgUrl}}</a>
            </template>
        </MyTable>
           <!-- 作用域插槽传递img标签 -->
        <MyTable :arr="list">
            <template v-slot="scope">
               <img :src="scope.row.headImgUrl" alt="" width="100px">
            </template>
        </MyTable>
    </div>
</template>

<script>
import MyTable from '../components/MyTable.vue'
export default {
    components: {
        MyTable,
    },
    data() {
        return {
            list: [
                {
                    name: "小传同学",
                    age: 18,
                    headImgUrl:
                        "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg",
                },
                {
                    name: "小黑同学",
                    age: 25,
                    headImgUrl:
                        "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg",
                },
                {
                    name: "智慧同学",
                    age: 21,
                    headImgUrl:
                        "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
                },
            ],
        }
    },

}
</script>

<style></style>