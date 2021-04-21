<template>
  <div>
    <ul>
      <li v-for="(item,index) of todoList" :key="index" @click="delItem(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todoList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      // todoList:[]
    };
  },
  created() {
    console.log("list我刷新了");
  },
  methods: {
    delItem(index) {
      this.$emit("delItem", index);
    }
  }
};
</script>
<style scoped>
</style>


