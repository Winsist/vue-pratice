<template>
  <div id="app">
    <ul>
        <li v-for="(item,index) of todoList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {

  data(){
    return {
        todoList:[
            '学习',
            '看电视'
        ]
      
    }
  },
  
  
  methods:{
    
  }
}
</script>


