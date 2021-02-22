<template>
  <div id="app">
      <h1>nextTick</h1>
      <ul ref="ul1">
          <li v-for="(item,index) of arr" :key="index" @click="Look">
              {{item}}
          </li>
      </ul>
      <button @click="addItem">增加li</button>

  </div>
</template>

<script>
export default {

  data(){
    return {
        arr:['aaa','bbb','ccc']
    }
  },
  
  mounted(){
    console.log('nexttick mounted');

  },
  destroyed(){
    console.log('nexttick destroyed');

  },
  methods:{
      addItem(){
          this.arr.push(`${Date.now()}`);
          this.arr.push(`${Date.now()}`);
          //获取dom
        //   this.$nextTick(()=>{
            const ulEle = this.$refs.ul1;
            ulEle.style.background='red';
            console.log(ulEle);
            console.log(ulEle.childNodes.length);//第一次点击打印3，期望值是4，也就是说此时dom还没有渲染

        //   })
        //   const ulEle = this.$refs.ul1;
        //   console.log(ulEle);
        //   console.log(ulEle.childNodes.length);
      },
      Look(){
          console.log(111)
      }
    
  }
}
</script>


