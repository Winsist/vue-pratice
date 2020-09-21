<template>
  <div id="app">
      input
      <!-- <input type="text" :value="price" @input="price=$event.target.value"/>
      {{price}} -->
      <input type="text" :value="text1" 
      @input="$emit('change1',$event.target.value)"/>
      
  </div>
</template>

<script>
export default {
    model:{
        prop:'text1',//对应props text1
        event:'change1'
    },
    props:{
        text1:String,
        default(){
            return ''
        }
    },
    data(){
        return {
            // text1:''
        
        }
    },
    methods:{
        
    }
}
</script>


