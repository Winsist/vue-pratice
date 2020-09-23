<template>

  <div id="app">
    <keep-alive>
    <!-- <div @click="add1">+1</div>
    <div @click="add2">+2</div>
    <div @click="add3(333,$event)">+3</div>
    <div>{{test}}</div>
    <ul>
      <li v-for="(val,key,index) of obj" :key="key">
        {{val}}~{{key}}~{{index}}
      </li>
    </ul>
    <div @click.left="mouse">点我的鼠标左键触发事件</div> -->

    <!-- <input type="checkbox" id="checkbox" checked> -->
<!-- <label for="checkbox">{{ checked }}</label> -->

  <!-- <input v-model.lazy="msg">{{msg}}
  <div></div>
  <input v-model.number="txt" type="number">{{txt}} -->
  

    <router-view />
     </keep-alive>
  </div>
   
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      num:3,
      obj:{
        sex:'女',
        age:18
      },
      msg:'',
      txt:''
    }
  },
  computed:{
    test(){
      console.log('只有num改变我才会变');
      return this.num*2
    }
  },
  watch:{
    num:function(oldVal,val){
      console.log(oldVal+'我是num===='+val)
    },
    obj:{
      handler:function(oldVal,val){
        console.log(oldVal);
        console.log(val);
      },
      deep:true //深度监听
    },
    msg:function(val){
      console.log('我防抖了')
    },
    txt:function(val){
      console.log('我txt一直在变化');
      console.log(typeof val)
    }

  },
  methods:{
    add1(){
      this.num++;
      // console.log(id)
    },
    add2(){
      console.log(111);
      this.obj.age++
    },
    add3(id,$event){
      console.log(id);
      console.log($event)
    },
    mouse(){
      console.log('我点击了鼠标左键')
    }
    
  }
}
</script>


