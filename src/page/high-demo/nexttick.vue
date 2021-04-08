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
            //在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
            //使用场景：例：一个子组件通过v-if控制隐藏显示<t v-if='show'><t/>，当修改完显示状态后，立马通过ref去操作子组件的方法，这个时候会报错，原因在于子组件此时可能还未渲染完成，这个时候使用nextTick可以解决，他会在dom更新完成之后再去调用

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


