<template>
    <div>
       {{text}}

        <button @click="emitData()">Emit data</button>
    </div>
</template>

<script>
export default {
    props:{
        text:{
            default: "Lorem ipsum dolor sit amen"
        }
    },
    methods:{
        displayError(){
            alert("This is a error message")
        },
        emitData(){
            //alert("TEst");
            this.$emit("onEmitData",{data:'Hello Parent'});
        }
    }
}
</script>

<style scoped>

</style>
