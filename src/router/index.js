/*出口文件*/ 
// import Vue from 'vue'
// import Router from 'vue-router'
import Home from './home' //路由模块
import Base from './base' 
import Dad from './dad' 
import TodoList from './todolist'
import High from './high'
import Vuexx from './vuexx'
import ComputedDemo from './computed-demo'
import WatchDemo from './watch-demo'
import ClassDemo from './class-demo'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path:"/",
//       component:Home
//     },
//     Base
//   ]
// })

function mergeArray() {
  let newArray = [];
  for (let i = 0; i < arguments.length; i++) {
      let sArray = arguments[i]
      for (let j = 0; j < sArray.length; j++) {         
          newArray.push(sArray[j]);
      }
  }
  // console.log(arguments);
  // console.log(newArray);
  return newArray
}

export default mergeArray(ClassDemo,WatchDemo,ComputedDemo,Vuexx,High,TodoList,Dad,Base,Home) //名字依次添加在最前面
