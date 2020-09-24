<template>
  <div id="app">
    <ul @click="learning">
      <li v-for="(item) of list" :key="item.id" :data-index='item.id'>
          {{item.num}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  data(){
    return {
      list:[{
        num:111,
        id:1
      },{
        num:222,
        id:2
      },{
        num:333,
        id:3
      }]
      
    }
  },
  
  
  methods:{
    learning(e){
      if (e.target.nodeName.toLowerCase() === 'li') {
            const index = parseInt(e.target.dataset.index)
            // // 获得引索后，只需要修改data数据就能改变UI了
            this.doSomething(index)
            // console.log(e)
          }
    },
    doSomething(index) {
          // do what you want
          console.log(index)
        }

    
  }
}
</script>


