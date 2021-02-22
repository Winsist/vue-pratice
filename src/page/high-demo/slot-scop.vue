<template>
  <div>
    <h1>作用域插槽</h1>
    <p>父组件需要使用子组件中的内容，在子组件中通过属性动态绑定插槽prop，父组件v-slot在templete上接收</p>
    <p>常见应用场景：在后台管理系统，对后台返回的数据需要格式化的时候，比如时间</p>
    <slot :user="user"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
        user:{
            name:'wmy',
            age:'18'
        }
    };
  },

  methods: {}
};
</script>
<style scoped>
</style>


