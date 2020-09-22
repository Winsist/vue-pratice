<template>
  <div id="app">
    <input type="text" v-model="todoItem">
    <button @click="addItem">增加</button>
  </div>
</template>

<script>
export default {

  data(){
    return {
        todoItem:''
      
    }
  },
  
  
  methods:{
      addItem(){

      }
    
  }
}
</script>


