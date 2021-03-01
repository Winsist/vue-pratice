//触发更新视图
function updatView(){
    console.log('视图更新')
}

//重新定义数组原型
const  newArrayPrototype = Array.prototype;
//创建新对象，原型指向newArrayPrototype，再扩展新的方法不会影响原型
const newArrayProto = Object.create(newArrayPrototype);
['push','pop','shift','unshift','sort','splice','reverse'].forEach( methodName =>{
    newArrayProto[methodName] = function(){
        updatView();//视图更新
        newArrayPrototype[methodName].call(this,...arguments)
    }
})


//重新定义属性，监听起来
function defineReactive(target,key,value){
    observe(value);//深度监听
    Object.defineProperty(target,key,{
        get(){
            return value
        },
        set(newVal){
            if(value !== newVal){
                observe(newVal);//深度监听
                value = newVal;//设置新值
                updatView();//触发视图更新
            }
        }
    })
}

//监听对象属性
function observe(target){
    if(typeof target !=='object' || target === null){
        return target
    }
    if(Array.isArray(target)){
        target.__proto__ = newArrayProto;
    }
    for(let key in target){
        defineReactive(target,key,target[key])
    }
}

//准备数据
const data = {
    name:'wmy',
    age:18,
    info:{
        hobby:'吃鸡',//需要深度监听
    },
    arr:[1,2,3]
}

//监听数据
observe(data)

//测试
data.arr.push(4);
// console.log(Array.prototype);
