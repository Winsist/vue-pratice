<template>
  <div id="app">
      <header>
          {{title}}
      </header>
      <button @click="goVuex">练习VUEX</button>
      <button @click="goEcharts">练习echarts</button>

  </div>
</template>

<script>

export default {
    data(){
        return {
            title: "首页 ",
            leftOptions: {
                showBack: true,
                html: '',
                preventGoBack:false
            },
        }
    },
    methods:{
        goVuex(){
            this.$router.push('/vuexx/index')
        },
        goEcharts(){
            this.$router.push('/echartsdemo/index')
        }  
    }
}
</script>



