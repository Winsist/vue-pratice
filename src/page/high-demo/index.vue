<template>
  <div>
      <h1>高级特性</h1>
      <button @click="goPage('Model')">自定义v-model</button>
      <button @click="goPage('NextTick')">nextTick</button>
      <button @click="goPage('SlotIndex')">slot插槽</button>
      <button @click="goPage('ActiveCom')">动态组件</button>
      <button @click="goPage('AsynCom')">异步组件</button>
      <button @click="goPage('MyMixin')">mixin混入</button>

  </div>
</template>

<script>
export default {
  data(){
    return {
       
        
      
    }
  },
  
  methods:{
      // goModel(){
      //     this.$router.push("/high-demo/model");
      // },
      // goNextTick(){
      //     this.$router.push("/high-demo/nexttick");
      // },
      // goSlot(){
      //     this.$router.push("/high-demo/slot-index");
      // },
      // goActiveCom(){
      //     this.$router.push("/high-demo/activecom");
      // },
      // goAsynCom(){
      //     this.$router.push("/high-demo/asyncom");
      // },
      goPage(name){
          this.$router.push(name);
      }
  }
}
</script>
<style scoped>
   

</style>


