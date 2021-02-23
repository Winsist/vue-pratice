<template>
  <div>
    <h1>异步组件</h1>
    <p>当这个组件很大的时候，异步加载会优化在首页或者用不到的时候的一个性能</p>
    <Model v-if="flag" />
    <button @click="flag=true">点击</button>
  </div>
</template>

<script>
export default {
  components: {
      Model: () => import("./model")
  },
  data() {
    return {
      flag: false
    };
  },

  methods: {}
};
</script>
<style scoped>
</style>


