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
      <div>
        {{id}}
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
        },
        id:this.$route.params.id
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
            // console.log(newVal.age+'------'+oldVal.age);//两次的值一样，因为引用类型拿不到oldVal
            console.log(111)
        },
        deep:true,
        immediate:true,//如果我们需要在最初绑定值的时候也执行监听函数handler
    }
  },
  methods:{
    add(){
        this.info.age++;
        console.log(null == undefined);//true
    }
  }
}
</script>


