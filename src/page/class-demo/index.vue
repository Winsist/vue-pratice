<template>
  <div>
      <h1>class-demo</h1>
      <h2>class对象语法：</h2>
      <div :class="classObj">嘻嘻嘻</div>
      <h2>class数组语法：</h2>
      <div :class="classArr">嘻嘻嘻</div>
      <h2>style内联语法：</h2>
      <div :style="styleObj">嘻嘻嘻</div>

  </div>
</template>

<script>
export default {
  data(){
    return {
        classObj:{
            active:true
        },
        classArr:['active','active2'],
        styleObj:{
            color:'red',
            fontSize:'30px'
        }
       
        
        
      
    }
  },
  
  methods:{
     
    
  }
}
</script>
<style scoped>
    .active{
        background :pink;

    }
    .active2{
        color: #fff;
        margin-left: 20px;

    }

</style>


