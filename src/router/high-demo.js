import HighDemo from '../page/high-demo/index'
import Model from '../page/high-demo/model'
import NextTick from '../page/high-demo/nexttick'
import SlotIndex from '../page/high-demo/slot-index'
import ActiveCom from '../page/high-demo/activecom'
import AsynCom from '../page/high-demo/asyncom'

export default [{
    path:"/high-demo/index",
    component:HighDemo
},{
    path:"/high-demo/model",
    component:Model
},{
    path:"/high-demo/nexttick",
    component:NextTick
},{
    path:"/high-demo/slot-index",
    component:SlotIndex
},{
    path:"/high-demo/activecom",
    component:ActiveCom
},{
    path:"/high-demo/asyncom",
    component:AsynCom
}]