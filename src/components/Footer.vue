<template>
    <div class="footer">
         <label><input type="checkbox" v-model="isCheck">&nbsp;&nbsp;&nbsp;已经完成{{finishedCount}}件/总计{{totalCount}}件</label><button @click="$store.dispatch('delFinishedTodos')">清除已经完成的任务</button>
    </div>
</template>
<script>
import {mapGetters} from 'vuex' ;
export default {
    name: 'Footer',
    computed:{
        ...mapGetters(['finishedCount','totalCount']),
        isCheck: {
            get() {
                return this.$store.getters.isCheckedAll;
            },
            set(value) {
                this.$store.dispatch('selectedAll',value);
            }
        }
    },
    
}
</script>
<style scoped>
    label input {
    margin: 10px 20px;
    padding: 5px;
    }
    button{
        border: none;
        background-color: orangered;
        margin-left: 38px;
    }
</style>
