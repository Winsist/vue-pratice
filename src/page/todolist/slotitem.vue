<template>
  <div id="app">
    <!-- 基本使用 -->
      <header>
          <slot :user="user">{{user.firstName}}</slot>
      </header>
      <!-- <div class="container">
        <header>
          
          <slot name="header"></slot>
        </header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div> -->
      
  </div>
</template>

<script>
export default {

  data(){
    return {
      user:{
        firstName:'mengyun',
        lastName:'wang'
      }
      
    }
  },
  
  
  methods:{
    
  }
}
</script>


