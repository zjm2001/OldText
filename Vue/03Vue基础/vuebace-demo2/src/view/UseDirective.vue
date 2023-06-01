<template>
    <div>
        <input type="text" v-fccc>
        <p v-color="colorstr">我是改变颜色的自定义指令</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            colorstr:'red'
        }
    },
    directives: {
        fccc: {
            inserted(el) {
                console.log(el);
            }
        },
        color: {
            //inserted 这个方法 只在被插入到网页时触发一次(所有当指令值改变时无法触发)
            //update方法   指令对应数据/标签更新时,此方法执行
            inserted(el, bind) {
                console.log(bind); //这个是传入的数据
                el.style.color=bind.value
            },
            update(el,bind) {
                // console.log(bind);
                el.style.color=bind.value
            },
        }
    }
}
</script>

<style></style>