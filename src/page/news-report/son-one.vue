<template>
  <div>
    <h1>自定义事件实现通讯-bus总线</h1>
    <div>哈哈哈哈，我是哥哥</div>
    <div>弟弟对我说:{{msg2}}</div>
    <button @click="sayTwo">对弟弟说</button>

  </div>
</template>

<script>
import eventbus from './event'
export default {
  data() {
    return {
        msg2:'',
        msg1:'弟弟，你真帅~'
    };
  },
  mounted(){//因为有时不确定何时会触发事件，一般会在 mounted 或 created 钩子中来监听
      eventbus.$on('say2',msg2=>{
          this.msg2 = msg2
      })

  },

  methods: {
      sayTwo(){
          eventbus.$emit('say2',this.msg1)

      }
  }
};
</script>
<style scoped>
</style>


