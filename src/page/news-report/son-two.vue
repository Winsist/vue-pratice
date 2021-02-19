<template>
  <div>
    <h1>自定义事件实现通讯-bus总线</h1>
    <div>嘻嘻嘻嘻，我是弟弟</div>
    <div>哥哥对我说:{{msg1}}</div>
    <button @click="sayOne">对哥哥说</button>

  </div>
</template>

<script>
import eventbus from './event'
export default {
  data() {
    return {
        msg2:'哥哥，你真好！',
        msg1:''
    };
  },
  mounted(){//因为有时不确定何时会触发事件，一般会在 mounted 或 created 钩子中来监听
      //绑定自定义事件，还要记得解绑，防止内存泄漏
      eventbus.$on('say2',msg1=>{
          this.msg1 = msg1
      })

  },
  methods: {
      sayOne(){
          eventbus.$emit('say1',this.msg2)

      }
  },
  // beforeDestroy(){
  //   eventbus.$off('say2')
  // }
};
</script>
<style scoped>
</style>


