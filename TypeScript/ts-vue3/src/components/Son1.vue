<script setup lang="ts">

import { ref } from 'vue';
import Son2 from './Son2.vue';
type ToDo = {
    id: number;
    name: string;
    fid: boolean;
}
const list1 = ref<ToDo[]>([
    { id: 1, name: '达大厦', fid: false },
    { id: 2, name: '达大55厦', fid: false },
    { id: 3, name: '达大46厦', fid: true },
])
</script>
<template>
 <Son2 v-for="item in list1"  :key="item.id" :todo="item"></Son2>
</template>