<template>
  <div>
    <h1>组件之间的通信props,$emit,</h1>
    <Input @add="add"/>
    <List :todoList="todoList" @delItem="delItem"></List>
    <hr/>
    <h2>下面是bus总线</h2>
    <son-one></son-one>
    <son-two></son-two>
  </div>
</template>

<script>
import Input from "./input";
import List from "./list";
import SonOne from './son-one'
import SonTwo from './son-two'
export default {
  components: {
      Input,
      List,
      SonOne,SonTwo
  },
  data() {
    return {
        todoList:[]
    };
  },

  methods: {
      add(item){
          console.log(item);
          this.todoList.push(item);
      },
      delItem(index){
          this.todoList.splice(index,1);
      }
  }
};
</script>
<style scoped>
</style>


