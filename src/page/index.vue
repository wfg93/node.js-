<template>
  <div style="background: #E1E1E1">
    <!--导航栏-->
    <!--<thetitle></thetitle>-->

    <!--内容框-->
    <!--<div class="kuang">-->
      <!--左框-->
      <!--<div class="z_kuang">-->
        <layout></layout>
      <!--</div>-->
      <!--右框-->
      <!--<div class="y_kuang">-->
        <!--<offside></offside>-->
      <!--</div>-->

    <!--</div>-->
    <!--底部导航栏-->

    <!--<bottomof></bottomof>-->


  </div>
</template>

<script>

  import layout from './component/layout'


  export default {
    name: "index",
    components: {
      layout
    },
    data() {
      return {}
    },
    methods: {

    //   async HOMepage() {
    //     try {
    //       let res = await HomePaGe.Atestpage({})
    //
    //       if (res.success === ERR_OK) {
    //
    //       }
    //
    //     } catch (e) {
    //
    //       this.$message.error("服务器出现异常，请稍后重试");
    //     }
    //
    //   }
    //
     },
    // mounted() {
    //   this.HOMepage()
    // }

  }
</script>

<style lang="scss" scoped>


</style>
