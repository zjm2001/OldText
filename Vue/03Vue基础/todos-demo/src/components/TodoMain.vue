<template>
    <ul class="todo-list">
        <!-- completed: 完成的类名 -->
        <!-- <li class="completed" >
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>任务名</label>
          <button class="destroy"></button>
        </div>
      </li> -->

        <li v-for="obj in arr" :key="obj.id" :class="{ completed: obj.isDone }">
            <div class="view">
                <input class="toggle" type="checkbox" v-model="obj.isDone" />
                <label>{{ obj.name }}</label>
                <button class="destroy" @click="delfn(obj.id)"></button>
            </div>
        </li>
    </ul>
</template>
  
<script>
export default {
    props: ['arr'],
    methods: {
        delfn(id) {
            this.$emit('del',id)
        }
    },
}
</script>