<template>
    <div id="app">
        <header>练习echarts</header>
        <div ref="main" id="main" style="width: 600px;height:400px;"></div>
            
        
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data(){
    return {
        // 指定图表的配置项和数据
        option :{
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
      
    }
  },
  mounted(){
      setTimeout(()=>{
          this.chart()
      },100)
      

  },
  methods:{
      chart(){
          var myChart = echarts.init(this.$refs.main);
          myChart.setOption(this.option);

      }
    
  }
}
</script>


