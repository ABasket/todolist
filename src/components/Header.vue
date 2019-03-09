<template>
    <div class="header">
         <input type="text" placeholder="请输入今天的任务清单，按回车键确认" v-model="todo.title" @keyup.enter="addItem">
    </div>
</template>
<script>
export default {
    name: 'Header',
    data(){
        return{
            todo:{
                title: '',
                finished: false
            }
        }
        
    },
    props:{
        addTodos:Function
    },
    methods:{
        addItem() {
            const title = this.todo.title.trim();
            if(title==='') {
                alert('不能为空');
                this.todo.title='';
                return;
            }
            const todo = {title,finished:false};
            //this.addTodos(this.todo);
            this.$store.dispatch('addTodos',todo);
            this.todo.title = '';
        }
    }
}
</script>
<style scoped>
    .header input{
    width: 368px;
    margin: 10px;
    padding: 5px;
    }
</style>
