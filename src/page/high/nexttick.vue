<template>
  <div id="app">
      <header>
          nextTick
      </header>
      <ul ref="ul1">
          <li v-for="(item,index) of arr" :key="index">
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
  
  
  methods:{
      addItem(){
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
        //   console.log(ulEle.childNodes.length);//第一次点击打印3，期望值是4，也就是说此时dom还没有渲染
      }
    
  }
}
</script>


