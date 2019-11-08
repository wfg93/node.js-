<template>
  <!--头部-->
  <div>
    <!--标题-->
    <div class="b_t">
      <div class="b_T">
        <!--标题左侧-->
        <div class="t_b">
          <!--图片-->
          <div class="imga">
            <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg"/>
          </div>
          <!--输入框-->
          <div class="iputa">
            <i class="biao el-icon-search"></i>
            <input/>
          </div>
        </div>



        <!--标题右侧-->
        <div class="t_b">
          <ul>
            <li style="text-align: center" @click="Homepage">首页</li>
            <li>新手入门</li>
            <li>API</li>
            <li>关于</li>
            <li>注册</li>
            <li @click="longin">登录</li>
            <li>设置</li>
            <li>退出</li>
          </ul>
        </div>


      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "thetitle",
    data() {
      return {
        input4: ""
      }
    },
    methods:{
      Homepage(){
        console.log("33333")
        this.$router.replace('/')
      },
      longin(){
        this.$router.replace('/thelogin')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .b_t {
    width: 100%;
    height: 50px;
    background: #444444;

    .b_T {
      width: 75%;
      height: 100%;
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .t_b {
        width: 390px;
        align-items: center;
        display: flex;

        .imga {
          width: 31%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .iputa {
          width: 56%;
          height: 52%;
          position: relative;
          margin: 0px 0px 0px 20px;
          position: relative;
          .biao{
            position: absolute;
            top: 5px;
            color: #585958;
            left: 5px;
            font-size: 17px;
            font-weight: bold;
          }
          input {
            width: 100%;
            height: 80%;
            border-radius: 30px;
            background: #888888;
            border: solid 1px #888888;
          }
        }

        ul {
          width: 389px;
          display: flex;
          li {
            height: 100%;
            text-align: end;
            line-height: 32px;
            color: #ccc;
            padding:  0 10px;
            font-size: 13px;

          }
          li:hover{
            color: #fff;
          }
        }
      }
    }
  }


</style>
