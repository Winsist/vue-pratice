 <template>
  <div id="app">
    <header>
          高级特性
    </header>
    <button @click="changeActive">active</button>
    <button @click="changeNextTick">nextTick</button>
    <!-- <keep-alive>
        <Active v-if="flag==='active'"/>
        <NextTick v-if="flag==='nexttick'"/>
    </keep-alive> -->
    <component :is="currentName" />
    <!-- <component :is="nextTickName" /> -->

    <!-- 异步组件 -->
    <Son v-if="isson"/>
    <button @click="isson=true">异步组件</button>

    <!-- mixin混入 -->
    {{city}}~~{{flag}}~~{{a}}~~{{b}}
    <button @click="sure">确认mixin</button>
  </div>
</template>

<script>
import NextTick from './nexttick'
import Active from './active'
import myMixin from './mixin'
export default {
    components: {
        NextTick,
        Active ,
        Son:()=>import('../dad/son')
    },
    mixins: [myMixin],
  data(){
    return {
        flag:'active',
        ActiveName:'Active',
        nextTickName:'NextTick',
        currentName:'Active',
        isson:false,
        city:'上海',
        a:'000'
      
    }
  },
  
  mounted(){
    console.log('index mounted');

  },
  destroyed(){
    console.log('index destroyed');

  },
  
  activated(){
        this.city='杭州'

    },
  methods:{
      changeActive(){
        //   this.flag='active'
        this.currentName='Active'
      },
      changeNextTick(){
        //   this.flag='nexttick'
        this.currentName='NextTick'
      },
      sure(){
          this.a='111'
      }
    
  }
}
</script>


