<template>
  <div id="app">
      <!-- <sheader :left-options="leftOptions">
          {{title}}
      </sheader> -->
      <header>
          {{title}}
      </header>


      <Computed :list="list" @change="handle"/>
      <button @click="goDad">去验证兄弟之间的通信</button>
      <button @click="goSelf">去验证自定义事件</button>
      <button @click="gonextTick">去nextTick</button>
      <button @click="goVuex">练习VUEX</button>
      <button @click="goThings">练习事件委托</button>

  </div>
</template>

<script>
// import sheader from '@/component/ui/sheader'
import Computed from '@/page/base/computed'


export default {
    components: {
        // sheader
        Computed
    },
    data(){
        return {
            title: "首页 ",
            leftOptions: {
                showBack: true,
                html: '',
                preventGoBack:false
            },
            list:1
        }
    },
    methods:{
        handle(str){
            this.title=str;
        } ,
        goDad(){
            this.$router.push('/dad/dad')
        },
        goSelf(){
            this.$router.push('/todolist/list')
        },
        gonextTick(){
            this.$router.push('/high/index')
        },
        goVuex(){
            this.$router.push('/vuexx/index')
        },
        goThings(){
            this.$router.push('/base/model')
        }
    }
}
</script>



