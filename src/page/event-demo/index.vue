<template>
  <div>
      <p>event-demo</p>
      <p>{{num}}</p>
      <button @click="add1">+1</button>
      <button @click="add2(3)">+2</button>
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
      add1(event){
          this.num++;
          console.log(event);
      },
      add2(val,event){
          this.num+=val;
          console.log(event);
      }
  }
}
</script>


