<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    {{message}}
    <br>
    {{filterMessage}}
    <button @click="clickMe()">Click me</button>
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
  computed:{
     filterMessage(){
       return this.message + '. My name is Luan';
     },
     filterMessage2(){

     },
     filterMessage3(){

     }
  },
  methods: {
     clickMe(){
       this.message = "Say Hello"
     },
     clickHis(){

     },
     clickHer(){

     }
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
    this.clickMe();
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
