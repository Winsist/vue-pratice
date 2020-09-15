<template>
  <div id="app">
    {{num}}
    <div @click="add1">+1</div>
    <div @click="add2">+2</div>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      num:0
    }
  },
  methods:{
    add1(){
      this.num++;

      console.log(111)
    },
    add2(i){
      this.num=this.num+2;
      // console.log(id)
    },
  }
}
</script>


