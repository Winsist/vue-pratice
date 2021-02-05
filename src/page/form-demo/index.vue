<template>
  <div>
    <h1>form-demo</h1>
    <input type="checkbox" id="jack" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
        checked:true,
        checkedNames:[]
    };
  },

  methods: {}
};
</script>
<style scoped>
</style>


