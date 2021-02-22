<template>
  <div>
    <h1>slot的基本使用</h1>
    <p>父组件向子组件插入一段内容，常用场景是标题</p>
    <header>
        <slot>标题</slot>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>
<style scoped>
</style>


