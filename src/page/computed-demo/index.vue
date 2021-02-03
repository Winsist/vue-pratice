<template>
  <div>
      <p>computed-demo</p>
      <p>
          1、监控自定义的变量，这个变量不可以和data、props里面的变量重复；
2、computed属性的属性值是函数默认走get方法（必须有返回值），属性都有一个get和set方法；
3、支持缓存，只有所依赖的数据发生变化才会重新计算，否则会取缓存中的数据；
4、不支持异步，在computed里面操作异步无效；
      </p>
      <div>a:{{a}}</div>
      <div>b:{{b}}</div>
      <div>{{num1}}</div>
      <div>{{num2}}</div>
      <button @click="btn">点击</button>
        
    
  </div>
</template>

<script>
export default {
  data(){
    return {
        a:1,
        b:2,
        
        
      
    }
  },
  computed:{
      num1(){ 
        return this.a+'-'+this.b
      },
      num2:{
          get(){
              return this.a+'-'+this.b;
          },
        //   set(newVal){
        //       let arr =newVal.split('-');

        //       this.a=arr[0];
        //       this.b = arr[1];
        //   }
      }

  },
  methods:{
      btn(){
          this.num2 = '333-444'
      }
    
  }
}
</script>


