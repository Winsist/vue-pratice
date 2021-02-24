import HighDemo from '../page/high-demo/index'
import Model from '../page/high-demo/model'
import NextTick from '../page/high-demo/nexttick'
import SlotIndex from '../page/high-demo/slot-index'
import ActiveCom from '../page/high-demo/activecom'
import AsynCom from '../page/high-demo/asyncom'
import MyMixin from '../page/high-demo/mymixin'

export default [{
    path:"/high-demo/index",
    name:HighDemo,
    component:HighDemo
},{
    path:"/high-demo/model",
    name:Model,
    component:Model
},{
    path:"/high-demo/nexttick",
    name:NextTick,
    component:NextTick
},{
    path:"/high-demo/slot-index",
    name:SlotIndex,
    component:SlotIndex
},{
    path:"/high-demo/activecom",
    name:ActiveCom,
    component:ActiveCom
},{
    path:"/high-demo/asyncom",
    name:AsynCom,
    component:AsynCom
},{
    path:"/high-demo/mymixin",
    name:MyMixin,
    component:MyMixin
}]