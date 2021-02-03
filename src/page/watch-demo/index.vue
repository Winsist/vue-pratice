<template>
  <div>
      <p>watch-demo</p>
      <input type="text" v-model="num">
      <div>
          我今年{{info.age}}
      </div>
      <div @click="add">
          add
      </div>
    
    
  </div>
</template>

<script>

export default {
  data(){
    return {
        num:1,
        info:{
            age:18
        }
        
      
    }
  },
  watch:{
      num(newVal,oldVal){
          console.log(newVal+'------'+oldVal)
      },
    //   'info.age':function(newVal,oldVal){
    //       console.log(newVal+'------'+oldVal)
    //   }
    info:{
        handler(newVal,oldVal){
            console.log(newVal.age+'------'+oldVal.age);//两次的值一样，因为引用类型拿不到oldVal
        },
        deep:true
    }
  },
  methods:{
    add(){
        this.info.age++
    }
  }
}
</script>


