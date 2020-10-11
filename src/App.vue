<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<!--    {{message}}-->
<!--    <br>-->
<!--    {{filterMessage}}-->
<!--    <button @click="clickMe()">Click me</button>-->
      <MyComp></MyComp>

      <ShowText></ShowText>
      <ShowText></ShowText>
      <ShowText :text="message" ref="showText3" @onEmitData="getEmitData"></ShowText>

      <button @click="callChildMethod()">Call Child Method</button>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ShowText from './components/ShowText.vue'
export default {
  name: 'App',
  data:function(){
    return {
      message:'Hello World'
    }
  },
  components: {
    //HelloWorld
    ShowText
  },
  computed:{
     filterMessage(){
       return this.message + '. My name is Luan';
     },
     filterMessage2(){
        return this.message + '. My name is Nam';
     },
     filterMessage3(){
       return this.message + '. My name is Long';
     }
  },
  methods: {
     clickMe(){
       this.message = "Say Hello"
     },
     clickHis(){

     },
     clickHer(){

     },
     callChildMethod(){
         this.$refs.showText3.displayError();
     },

      getEmitData(data){
        alert(data.data);
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
