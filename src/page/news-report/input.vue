<template>
  <div>
    <input type="text" v-model="todoItem" placeholder="todo">
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        todoItem:''
    };
  },
  created(){
    console.log('input我刷新了')
  },
  methods: {
      add(){
          this.$emit("add",this.todoItem);
          this.todoItem='';
      }
  }
};
</script>
<style scoped>
</style>


