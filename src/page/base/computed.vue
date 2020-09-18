<template>
  <div id="app">
    computed
    <div>
        {{list}}
    </div>
    <div @click.right="goDad">点击改变父亲的标题</div>
    

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Computed',
  props:{
        list:{
            type:Number,
            default:0
        }
        
    },
  data(){
    return {
        str:'哈哈哈'
        
      
    }
  },
  
  
  methods:{
    goDad(){
        this.$emit('change',this.str)

    }
  }
}
</script>


