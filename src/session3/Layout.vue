<template>
    <div>
        <div class="header">

        </div>

        <slot name="content1">
            <p>
                Hello 1
            </p>
        </slot>

        <slot name="content2">
            <p>
                Hello 2
            </p>
        </slot>

        <div class="footer"></div>
    </div>

</template>

<script>
export default {
name: "Layout.vue"
}
</script>

<style scoped>
  .header{
      background:red;
      height:50px;
      width:100%;
  }

  .footer{
      background: green;
      height:50px;
      width:100%;
  }
</style>
