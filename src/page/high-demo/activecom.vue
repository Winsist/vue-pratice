<template>
  <div>
    <h1>动态组件</h1>
    <p>在tab切换的时候可以用到动态组件,而且通常配合keep-alive使用，会缓存组件</p>
    <Model :is="componentName"/>
  </div>
</template>

<script>
import Model from "./model";
export default {
  components: {
    Model
  },
  data() {
    return {
        componentName:"Model"
    };
  },

  methods: {}
};
</script>
<style scoped>
</style>


