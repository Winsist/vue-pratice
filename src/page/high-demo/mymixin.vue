<template>
  <div>
    <h1>mixin-demo</h1>
    <p>{{name}}</p>
    <p>{{age}}</p>
    <p v-if="flag">{{hobby}}</p>
    <button @click="showHobby">点击</button>
    <p>优点：多个组件的相同逻辑可以抽离出来</p>
    <p>缺点：变量来源不明，不利于阅读；多个mixin可能造成命名冲突；多对多的时候复杂度高</p>
  </div>
</template>

<script>
import myMixin from "./mixin";
export default {
  mixins: [myMixin],//可以混合多个
  data() { 
    return {
      name: "wmy",
      hobby: "我喜欢吃",
      flag: false
    };
  },
  created() {
    console.log("component created");//mixin里面的钩子函数会先执行
  },
  methods: {}
};
</script>
<style scoped>
</style>


