<template>
  <div>
    <h3>在组件上实现v-model:</h3>
    <input type="text" :value="hobby" @input="$emit('change',$event.target.value)" />
    {{hobby}}
  </div>
</template>

<script>
export default {
  model: {
      prop:'hobby',//对应props的hobby
      event:'change',//对应$emit里面的change
  },
  props:{
      hobby:String,
      default:''
  },

  data() {
    return {};
  },

  methods: {}
};
</script>



