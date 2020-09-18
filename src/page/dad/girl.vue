<template>
  <div id="app">
    girl
    <div>
        <button @click="sendgege">给哥哥发消息</button>
    </div>
    <div v-if="fromgege">{{fromgege}}</div>
  </div>
</template>

<script>
import { eventBus } from '@/js'
export default {
  name: 'Girl',
 
  data(){
    return {
        fromgege:''
        
      
    }
  },
  
  created() {
            eventBus.$on("geSaid", message => {
                this.fromgege = message;
            });
        },
  methods:{
      sendgege(){
          eventBus.$emit('meiSaid','哥哥我好想你')
      }
    
  }
}
</script>


