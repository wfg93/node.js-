<template>
    <div class="bottm">

<div class="zhong_a">

  <div>RSS|源码地址</div>
  <div>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>
  <div>服务器赞助商为

      <img class="IMG" src="//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9"/>,

    存储赞助商为
      <img class="IMG" src="//static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX"/>,
    由
      <img class="IMG" src="//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD"/>提供应用性能服务。


  </div>
  <br/>
  <div>新手搭建 Node.js 服务器，推荐使用无需备案的 <span class="beian">DigitalOcean(<a href="https://www.digitalocean.com">https://www.digitalocean.com</a>)</span> </div>
</div>
    </div>
</template>

<script>
    export default {
        name: "bottomof",
      data(){
          return{

          }
      }
    }
</script>

<style lang="scss" scoped>
.bottm{
  width: 100%;
  height: 186px;
  background: #fff;

  /*background: #fff;*/
  /*position: absolute;*/
  bottom: 0px;
  .zhong_a{
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 0 auto;
    color: #ABABAB;
    padding: 20px 0;
    font-size: 13px;
    line-height: 2em;
    background: #fff;
    .IMG{
      width: 134px;
      height: 45px;

    }
    .beian{
      color: blue;
      a{
        color: blue;
      }
    }

  }
}
</style>
