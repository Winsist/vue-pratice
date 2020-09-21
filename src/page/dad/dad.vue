<template>
  <div id="app">
    <header>
          兄弟组件通信
    </header>
    <Son />
    <Girl /> 
    <div @click="goHome">去home组件</div>
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

  beforeCreate(){
    console.log('dad beforeCreate');
  },
  created(){
    console.log('dad created');
  },
  beforeMount(){
    console.log('dad beforeMount');

  },
  mounted(){
    console.log('dad mounted');

  },
  beforeUpdate(){
    console.log('dad beforeUpdate');

  },
  updated(){
    console.log('dad updated');

  },
  beforeDestroy(){
    console.log('dad beforeDestroy');

  },
  destroyed(){
    console.log('dad destroyed');

  },
  data(){
    return {
        
        
      
    }
  },
  
  
  methods:{
    goHome(){
      this.$router.push('/home')
    }
    
  }
}
</script>


