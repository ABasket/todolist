import {
    ADD_TODO,
    DEL_TODO,
    SELECTED_ALL_TODO,
    DEL_ALL_TODO
} from './mutation-types';

export default{
    // 添加一条记录
    addTodos({commit},todo){
        commit(ADD_TODO,{todo})
    },
    // 删除一条记录
    delTodos({commit},index){
        commit(DEL_TODO,{index})
    },
    // 选中所有记录
    selectedAll({commit},value) {
        commit(SELECTED_ALL_TODO,{value})
    },
    // 删除已经完成的记录
    delFinishedTodos({commit}) {
        commit(DEL_ALL_TODO);
    }
}