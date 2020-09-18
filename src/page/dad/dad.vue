<template>
  <div id="app">
    <header>
          兄弟组件通信
    </header>
    <Son />
    <Girl /> 
  </div>
</template>

<script>
import Son from './son'
import Girl from './girl'

export default {
    components: {
        Son,
        Girl
        
    },

 
  data(){
    return {
        
        
      
    }
  },
  
  
  methods:{
    
  }
}
</script>


