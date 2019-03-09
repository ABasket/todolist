<template>
    <div class="item">
        <li @mouseenter="onmouseenterOrleave(true)"
         @mouseleave="onmouseenterOrleave(false)"
         :style="{background:bgColor}"
         >

            <input type="checkbox" v-model="todo.finished"><span>{{todo.title}}</span>
            <button v-show="isShowBUtton" @click="deleItem">删除</button>
        </li>
    </div>
</template>
<script>
export default {
    name: 'Item',
    props:{
        todo:Object,
        index:Number
    },
    data() {
        return {
            bgColor: '#fff',
            isShowBUtton: false
        }
    },
    methods: {
        onmouseenterOrleave(flag) {
            this.bgColor=flag?'#ddd':"#fff";
            this.isShowBUtton = flag;
        },
        deleItem(){
            if(window.confirm(`确定删除${this.todo.title}吗？`)){
                this.$store.dispatch('delTodos',this.index);
            }
        }
    }
}
</script>
<style scoped>
    .item{
    border: 1px solid #bcbcbc;
    position: relative;
    }
    .item li{
        list-style: none;
        margin: 5px;
    }
    button{
        position: absolute;
        right: 10px;
        
        
    }
</style>
