<template>
  <div>
    <h1>自定义v-model</h1>
    <h3>v-model语法糖：</h3>
    <input type="text" v-model="name">
    {{name}}
    <h3>下面手动实现该语法糖：</h3>
    <input type="text" :value="age" @input="age=$event.target.value">
    {{age}}
    <dl>以上代码分几个步骤：
        <dd>将输入框的值绑定到price变量上，这个是单向绑定，意味着改变price变量的值可以改变input的value，但是改变value不能改变price</dd>
        <dd>监听input事件（input输入框都有该事件，当输入内容时自动触发该事件），当输入框输入内容就单向改变price的值,这样就实现了双向绑定。</dd>
    </dl>
    <Model v-model="hobby"/>
    {{hobby}}
  </div>
</template>

<script>
import Model from './model2'
export default {
  components:{
    Model
  },
  data() {
    return {
        name:'wmy',
        age:18,
        hobby:'敲代码'
    };
  },

  methods: {}
};
</script>
<style scoped>
</style>


