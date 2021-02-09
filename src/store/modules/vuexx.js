import * as types from './../mutation-types'
import Lockr from 'lockr'
Lockr.prefix = 'lockr';

const state = {
    todoItem:'',
    todoList:[]
}

const mutations = {//只可以改变 state 下的一个，  和state数量一样
    [types.SET_TODOITEM](state, data) {
        state.todoItem = data;
    },
    [types.SET_TODOLIST](state, data) {
        state.todoList = data;
    }
}

const actions = {//可以同时改变 mutations 下的多个
    [types.SET_TODOITEM]({ commit, state }, data) { 
        Lockr.set(types.SET_TODOITEM, data);
        commit(types.SET_TODOITEM, data);
    },
    [types.GET_TODOITEM]({ commit, state }) { 
        if (Lockr.get(types.SET_TODOITEM)) {
            commit(types.SET_TODOITEM, Lockr.get(types.SET_TODOITEM));
        }
    },
    [types.SET_TODOLIST]({ commit, state }, data) { 
        Lockr.set(types.SET_TODOLIST, data);
        commit(types.SET_TODOLIST, data);
    },
    [types.GET_TODOLIST]({ commit, state }) { 
        if (Lockr.get(types.SET_TODOLIST)) {
            commit(types.SET_TODOLIST, Lockr.get(types.SET_TODOLIST));
        }
    },
}
export default {
    state,
    mutations,
    actions
}
