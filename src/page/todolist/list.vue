<template>
  <div id="app">
      <header>
          自定义v-model
      </header>
      name:{{name}}
      <Input v-model="name"/>

      <SlotItem>slot的基本使用</SlotItem>

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


