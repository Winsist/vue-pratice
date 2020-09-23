<template>
  <div id="app">
    <input type="text" v-model="item">
    <button @click="addItem">增加</button>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import * as types from '@/store/mutation-types'
export default {
  data(){
    return {
        item:'',
        list:[]
      
    }
  },
  
  
  methods:{
      addItem(){
          this.list.push(this.item);
          this.$store.dispatch(types.SET_TODOLIST,this.list);
          this.item=''
      }
    
  }
}
</script>


