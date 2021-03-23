//触发更新视图
function updatView(){
    console.log('视图更新')
}

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
    }
}

//监听数据
observe(data)

//测试
data.name = 'shuai';
data.age=19;
data.info.hobby="睡觉";//此时并没有触发视图更新
data.age = {num:28};
data.age.num=67;