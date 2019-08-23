<template>
  <div style="background: #E1E1E1">
   <!--导航栏-->
    <thetitle></thetitle>

  <!--内容框-->
 <div class="kuang">
  <!--左框-->
    <div class="z_kuang">
      <layout></layout>
    </div>
  <!--右框-->
    <div class="y_kuang">
      aaaaaaa
    </div>

</div>
    <!--底部导航栏-->

  <bottomof></bottomof>




  </div>
</template>

<script>
  import {HomePaGe} from "../assets/apijs/api";
  import {ERR_OK} from "../assets/apijs/common/config";
  import thetitle from "./component/thetitle"
  import layout from './component/layout'
  import bottomof from './component/bottomof'

  export default {
    name: "index",
    components: {
      thetitle,
      layout,
      bottomof

    },
    data() {
      return {}
    },
    methods: {

      async HOMepage() {
        try {
          let res = await HomePaGe.Atestpage({})

          if (res.success === ERR_OK) {

          }


        } catch (e) {

          this.$message.error("服务器出现异常，请稍后重试");
        }

      }

    },
    mounted() {
      this.HOMepage()
    }

  }
</script>

<style lang="scss"  scoped>
  .kuang {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
    background: antiquewhite;
    display: flex;
    justify-content: space-between;
    .z_kuang {
      width: 77%;
      background: aqua;
    }
    .y_kuang {
      width: 21%;
      background: blueviolet;
    }

  }


</style>
