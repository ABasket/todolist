<template>
<div class="body">
    <ul>
        <Item
            v-for="(todo,index) in $store.state.todos"
            :key="index"
            :todo="todo"
            :index="index"
        />
    </ul>
</div>
</template>
<script>
import Item from './Item.vue';
export default {
    name: 'List',
    props:{
        todos:Array,
    },
    components:{
        Item
    }
}
</script>
<style scoped>
    .body{
        border: 1px solid #bcbcbc;
        margin: 10px;
    }
    
</style>
