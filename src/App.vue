<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    {{message}}
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data:function(){
    return {
      message:'Hello World'
    }
  },
  components: {
    //HelloWorld
  },
  beforeCreate() {
     console.log('beforeCreate');
  },
  created(){
     console.log('created');
  },
  beforeMount(){
    console.log('before mount');
  },
  mounted(){
    console.log('mounted');
    setTimeout(()=>{
       this.message = "Say hi";
    }, 5000);
  },
  beforeUpdate(){
      console.log('beforeUpdate');
  },
  updated() {
      console.log('updated');
  },
  beforeDestroy(){
      console.log('beforeDestroy');
  },
  destroyed(){
      console.log('destroyed');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
