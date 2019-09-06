<template>
  <div id="app">
    <!--顶部导航栏-->
    <thetitle></thetitle>

    <div class="kuang">
      <!--左框-->
      <div class="z_kuang">
        <router-view/>

      </div>
      <!--右框-->
      <div class="y_kuang">
        <offside></offside>
      </div>

    </div>
    <!--底部导航栏-->
    <bottomof></bottomof>

  </div>
</template>

<script>
  import thetitle from "./page/component/thetitle"
  import Bottomof from "./page/component/bottomof";
  import offside from "./page/component/offside"

  export default {
    name: 'App',
    components: {
      Bottomof,
      thetitle,
      offside
    },
  }
</script>

<style lang="scss" scoped>
  #app {
    background: rgb(225, 225, 225);
  }

  .kuang {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
    background: #E1E1E1;
    display: flex;
    justify-content: space-between;
    .z_kuang {
      width: 77%;
    }
    .y_kuang {
      width: 22%;

    }

  }

</style>
