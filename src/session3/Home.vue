<template>
   <Layout>
        <template v-slot:content1>
            <p :class="{colorRed : isRed}">
                Content 1 slot
            </p>

            <button @click="changeColor()">Change color</button>
        </template>

        <template v-slot:content2>
            <p :style="{color:css.colorBlue}">
                Content 2 slot
            </p>

            <button @click="changeColor2()">Change color</button>
            <input v-model="message"/>
        </template>


   </Layout>
</template>

<script>
 import Layout from './Layout'
 export default{
     data:function(){
         return {
             isRed:false,
             css:{
                 colorBlue: 'blue'
             },
             message: '',
             message2: '',
             user:{
                 message:''
             }
         }
     },
     watch:{
        message:function(newVal,oldVal){
            console.log('new value'+newVal);
            console.log('old value'+oldVal);
        },
        message2:function(newVal,oldVal){

        },
        'user.message':function(newVal,oldVal){

        }
     },
     components: {Layout},
     methods:{
         changeColor(){
             this.isRed = !this.isRed;
         },
         changeColor2(){
             this.css.colorBlue  = 'red';
         }
     }
 }
</script>

<style scoped>
 .colorRed{
     color:red;
 }
</style>
