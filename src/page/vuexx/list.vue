<template>
  <div id="app">
    <ul>
        <li v-for="(item,index) of todoList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as types from '@/store/mutation-types'

export default {

  data(){
    return {
        // todoList:[
        //     '学习',
        //     '看电视'
        // ],
        // newtodoList:[]
      
    }
  },
  activated(){
      this.$store.dispatch(types.GET_TODOLIST);
  },
  computed:{
        ...mapState({
            todoList: state => state.vuexx.todoList,
        })
    },
  methods:{
    
  }
}
</script>


