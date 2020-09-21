/*出口文件*/ 
// import Vue from 'vue'
// import Router from 'vue-router'
import Home from './home' //路由模块
import Base from './base' 
import Dad from './dad' 
import TodoList from './todolist'
import High from './high'

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

export default mergeArray(High,TodoList,Dad,Base,Home) //名字依次添加在最前面
