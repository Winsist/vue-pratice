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
            console.log('girl created');
        },
  beforeCreate(){
    console.log('girl beforeCreate');
  },
  // created(){
  //   console.log('girl created');
  // },
  beforeMount(){
    console.log('girl beforeMount');

  },
  mounted(){
    console.log('girl mounted');

  },
  beforeUpdate(){
    console.log('girl beforeUpdate');

  },
  updated(){
    console.log('girl updated');

  },
  beforeDestroy(){
    console.log('girl beforeDestroy');

  },
  destroyed(){
    console.log('girl destroyed');

  },
  
 
  methods:{
      sendgege(){
          eventBus.$emit('meiSaid','哥哥我好想你')
      }
    
  }
}
</script>


