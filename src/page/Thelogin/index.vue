<template>
    <div>
<div class="internal">
  <div class="inten">
    <span style="color: #80BD01" @click="longin()">主页</span> /<span>登录</span>
  </div>
  <div class="ternal">
    <div class="demo-input-suffix">
      <span>用户名  <el-input v-model="input2"></el-input></span><br/>
      <span>密码  <el-input v-model="input4"></el-input></span>
    </div>

    <div class="dlu">
      <el-button type="primary" size="small" @click="Thelogin()">登录</el-button>
      <el-button type="success" size="small" >通过 GitHub 登录</el-button>
      <span>忘记密码？</span>
    </div>
  </div>

</div>


    </div>
</template>

<script>
   import {HomePaGe} from '../../assets/apijs/api'
    export default {
        name: "index",
      data(){
          return{
            input1: '',
            input2: '',
            input3: '',
            input4: ''
          }
      },
      methods:{
        longin(){
          this.$router.replace('/')
        },
        async loginna(){
          console.log(111)
          try{
            console.log(111)
            let res = await HomePaGe.loginname({

            })
            console.log(111)

          }catch (e){
            console.log(e)
            this.$message.error('服务异常请稍后再试')
          }


        },
        Thelogin(){
            this.loginna()
        }
      }


    }
</script>

<style lang="scss" scoped>
.internal{
  width: 100%;
  height: 265px;
  background: #FFFFFF;
  .inten{
    width: 98.7%;
    height: 21px;
    background: #F6F6F6;
    padding: 7px;
    span{
      margin-left: 5px;
    }
  }
  .ternal{
    width: 400px;
    height: 200px;
    margin: 30px 0px 0px 106px;
    .demo-input-suffix{
      text-align: right;
      font-size: 14px;
      .el-input{
        width: 74%;
        margin: 16px 0px 0px 17px;
        .el-input_inner{
          height: 30px;
        }
      }
    }
    .dlu{
      height: 45px;
      margin: 27px 0px 10px 100px;

    }
  }
}
</style>
