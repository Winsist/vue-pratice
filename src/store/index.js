import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import vuexx from './modules/vuexx'

Vue.use(Vuex);

const state = {

}

export default new Vuex.Store({
    state,
    mutations: {
        
        
    },

    modules:{
        vuexx
    }
})
