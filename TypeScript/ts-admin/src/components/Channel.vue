<script lang="ts" setup>
import {useChannelsStore} from '@/stores/modules/channels';
const Channels=useChannelsStore()
Channels.getAPI()
console.log(Channels.list);

</script>
<template>
    <ul class="catagtory">
        <li class="select" v-for="item in Channels.list" :key="item.id">{{item.name}}</li>
    
      
    </ul>
</template>
<style scoed>
.catagtory {
    width: 100%;
    height: 30px;
    white-space:nowarp;
    overflow-y: scroll;
}

.catagtory li {
    float: left;
    text-align: center;
    list-style: none;
    line-height: 30px;
    width: 60px;
}
.select{
    color: red;
}
</style>