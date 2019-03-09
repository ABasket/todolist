import {
    ADD_TODO,
    DEL_TODO,
    SELECTED_ALL_TODO,
    DEL_ALL_TODO
} from './mutation-types' ; 

export default {
    [ADD_TODO](state,{todo}) {
        state.todos.unshift(todo);
    },
    [DEL_TODO](state,{index}) {
        state.todos.splice(index,1);
    },
    [SELECTED_ALL_TODO](state,{value}) {
        state.todos.forEach(todo=>{
            todo.finished = value
        })
    },
    [DEL_ALL_TODO](state) {
        state.todos = state.todos.filter(todo=>!todo.finished)
    }
}