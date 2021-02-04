# vue-pratice

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

```
（1）全局安装 vue-cli
npm install --global vue-cli
（2）创建一个基于 webpack模板的新项目
vue init webpack my-project
（3）安装依赖,但是要先切换到项目目录下
cd my-project
npm install
（4）运行
（4）运行
npm run dev
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


vue事件绑定函数加括号和不加括号的区别

当不加括号的时候，event可以直接拿到，当需要传参的时候，要想用event参数，必须手动添加$event才可以使用

```
<div>
    <p>event-demo</p>
    <p>{{num}}</p>
    <button @click="add1">+1</button>
    <button @click="add2(3,$event)">+2</button>
</div>

num:0；


methods:{
    add1(event){
        this.num++;
        console.log(event);
    },
    add2(val,event){
        this.num+=val;
        console.log(event);
    }
}
```

上面代码add2(3)，若传参不手动添加$event，打印出来则是undefined

[更多常见vue面试题可戳此处](https://blog.csdn.net/weixin_43989188/article/details/113616321)
