<template>
  <div id="app">
      <header>
          自定义v-model
      </header>
      name:{{name}}
      <Input v-model="name"/>

      <SlotItem>
          <template v-slot='userProp'>
            {{userProp.user.lastName}}
          </template>
      </SlotItem>

      <!-- <SlotItem>
          <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
      </SlotItem> -->


  </div>
</template>

<script>
import Input from './input'
import SlotItem from './slotitem'


export default {
    components: {
        Input,SlotItem
    },

    data(){
        return {
            name:'梦云'
        
        }
    },
    methods:{
        
    }
}
</script>


