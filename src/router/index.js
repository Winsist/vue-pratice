/*出口文件*/ 
// import Vue from 'vue'
// import Router from 'vue-router'
import Home from './home' //路由模块
import Vuexx from './vuexx'
import EchertsDemo from './echartsdemo'


// Vue.use(Router)

function mergeArray() {
  let newArray = [];
  for (let i = 0; i < arguments.length; i++) {
      let sArray = arguments[i]
      for (let j = 0; j < sArray.length; j++) {         
          newArray.push(sArray[j]);
      }
  }
  return newArray
}

export default mergeArray(EchertsDemo,Vuexx,Home) //名字依次添加在最前面
