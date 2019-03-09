export default {
    // 已经完成的计划数量
    finishedCount(state) {
        return state.todos.reduce((prev,next)=>prev+(next.finished?1:0),0)
    },
    // 计划总数量
    totalCount (state) {
        return state.todos.length;
    },
    // 全选
    isCheckedAll(state,getter) {
        return getter.finishedCount === state.todos.length&&state.todos.length > 0;
    }
}