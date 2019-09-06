<template>
  <div id="xiangqing">


    <div class="subject">

      <div class="sub">
        <div><span :class="dataLiSt.top?'Pl_top':'Pl_toz'" v-if="!dataLiSt.good">{{dataLiSt.top?'置顶':''}}</span>
          <span :class="{Pl_top:dataLiSt.good}" v-else>精华</span>
          <span class="sbc_j">{{dataLiSt.title}}</span></div>
        <div>• 发布于{{dataLiSt.create_at | formartDate}} • 作者 {{dataLiSt.author&&dataLiSt.author.loginname}} • {{dataLiSt.visit_count}}次 •
          来自 {{poinTS(dataLiSt.tab)}}
        </div>
      </div>
      <div class="sub">
        收藏
      </div>

    </div>
    <!--当成详情内容-->
    <div class="topic_content" v-html="content"></div>





    <div class="reply">
      <div class="REply"></div>


    </div>


  </div>
</template>

<script>
  import {ERR_OK, commonUrl} from "../assets/apijs/common/config";
  import axios from 'axios'

  export default {
    name: "topic",
    data() {
      return {
        content: '',
        sbc_j: '',
        dataLiSt: []
      }
    },

    methods: {

      //列表中 是否置顶分享或者精华
      poinTS(vv) {
        if (vv === "share") {
          return "分享"
        } else if (vv === "ask") {
          return "问答"
        } else if (vv === "job") {
          return "招聘"
        } else if (vv === "dev") {
          return "测试"
        }

      },

      //列表显示
      details() {
        axios.get(this.url).then((res) => {

          console.log('3333', res);
          if (res.data.success === ERR_OK) {
            this.content = res.data.data.content;
            this.dataLiSt = res.data.data
            console.log(this.sbc_j)
          }
        }).catch();
      },
    },
    computed: {
      id() {
        return this.$route.params.id
      },
      url() {
        return commonUrl + '/topic/' + this.id;
      }

    },
    mounted() {
      this.details()
    }
  }
</script>

<style lang="scss" scoped>
  #xiangqing {
    background: #E1E1E1;
  }

  .subject {

    border-bottom: 0.5px solid #00000078;
    display: flex;
    justify-content: space-between;
    padding: 11px 18px;
    height: 61px;
    background: #fff;
    .sub {
      height: 30px;
      .Pl_top {
        border: solid 1px #80BD01;
        border-radius: 3px;
        background: #80BD01;
        color: #fff;
        font-size: 12px;
        padding: 2px;
      }
      .sbc_j {
        font-size: 25px;
        margin-left: 8px;
        font-weight: bold;
      }
      div:nth-child(2) {
        padding: 12px 0px;
        font-size: 14px;
      }
    }
    .sub:nth-child(2) {
      height: 6px;
      border: solid 1px #80BD01;
      margin-top: 22px;
      background: #80BD01;
      padding: 14px;
      line-height: 5px;
      border-radius: 3px;
      color: #fff;
    }
  }

  .topic_content {
    padding: 18px;
    line-height: 33px;
    background: #fff;
    >>>.markdown-text{
      h2{
        font-size: 26px;
        margin: 30px 0 15px;
        border-bottom: 1px solid #eee;
        font-weight: bold;
        line-height: 41px;
      }
      h3{
        margin: 30px 0 15px;
        font-size: 24.5px;
        font-weight: bold;
        border-bottom: 1px solid #eee;
      }
      p {
        font-size: 15px;
        line-height: 2.5em;
        overflow: auto;

      }
    blockquote {
      padding: 0 0 0 15px;
      margin: 0 0 20px;
      border-left: 5px solid #eee;
    }
      ul{
        padding: 0;
        margin: 0 0 10px 25px;
        li{
          line-height: 2em;
          list-style: disc
        }
      }
      >:first-child, .preview>:first-child {
        margin-top: 0;
      }

       pre.prettyprint {
        font-size: 14px;
        border-radius: 0;
        padding: 0 15px;
        border: none;
        margin: 20px -10px;
        border-width: 1px 0;
        background: #f7f7f7;
        -o-tab-size: 4;
        -moz-tab-size: 4;
        tab-size: 4;
      }
      a {
        color: #08c;
      }
      img {
        cursor: pointer;
        height: auto;
        max-width: 100%;
        vertical-align: middle;
        border: 0;
      }

  }
  }

  .reply {
    height: 300px;
    background: #fff;
    margin-top: 19px;
    .REply {
      height: 50px;
      background: #F6F6F6;
    }
  }


</style>
