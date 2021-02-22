<template>
  <div>
      <h1>高级特性</h1>
      <button @click="goModel">自定义v-model</button>
      <button @click="goNextTick">nextTick</button>
      <button @click="goSlot">slot插槽</button>
      <button @click="goActiveCom">动态组件</button>
      <button @click="goAsynCom">异步组件</button>


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
          this.$router.push("/high-demo/slot-index");
      },
      goActiveCom(){
          this.$router.push("/high-demo/activecom");
      },
      goAsynCom(){
          this.$router.push("/high-demo/asyncom");
      }
  }
}
</script>
<style scoped>
   

</style>


