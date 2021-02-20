<template>
  <div>
      <h1>高级特性</h1>
      <button @click="goModel">自定义v-model</button>
      <button @click="goNextTick">nextTick</button>
      <button @click="goSlot">slot插槽</button>

  </div>
</template>

<script>
export default {
  data(){
    return {
       
        
      
    }
  },
  
  methods:{
      goModel(){
          this.$router.push("/high-demo/model");
      },
      goNextTick(){
          this.$router.push("/high-demo/nexttick");
      },
      goSlot(){
          this.$router.push("/high-demo/myslot");
      },

     
    
  }
}
</script>
<style scoped>
   

</style>


