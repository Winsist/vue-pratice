<template>
  <div id="app">
    {{num}}
    <div @click="btn1">button1</div>
    <div @click="btn2">button2</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      num:0
    }
  },
  method:{
    btn1(){
      this.num++;
      // console.log(id)
    },
    btn2(i){
      this.num=this.num+2;
      // console.log(id)
    },
  }
}
</script>


