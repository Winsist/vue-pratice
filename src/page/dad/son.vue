<template>
  <div id="app">
    son
    <div>
        <button @click="sendmei">给妹妹发消息</button>
    </div>
    <div v-if="frommeimei">{{frommeimei}}</div>
    

    
  </div>
</template>

<script>
import { eventBus } from '@/js'
export default {
  name: 'Son',
 
  data(){
    return {
        frommeimei:''
        
        
      
    }
  },
  //在created()钩子中添加eventBus启动自定义事件的侦听器。侦听meiSaid自定义事件，然后触发回调
  created() {
            eventBus.$on("meiSaid", message => {
                this.frommeimei = message;
            });
        },
  
  methods:{
    sendmei(){
          eventBus.$emit('geSaid','妹妹我好想你')
      }
  }
}
</script>


