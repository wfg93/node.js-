<template>
  <div id="xiangqing">

    <!--表头-->
    <div class="subject">

      <div class="sub">
        <div><span :class="listdata.top?'Pl_top':'Pl_toz'" v-if="!listdata.good">{{listdata.top?'置顶':''}}</span>
          <span :class="{Pl_top:listdata.good}" v-else>精华</span>
          <span class="sbc_j">{{listdata.title}}</span></div>
        <div>• 发布于{{listdata.create_at | formartDate}} • 作者 {{listdata.author&&listdata.author.loginname}} •
          {{listdata.visit_count}}次 •
          来自 {{poinTS(listdata.tab)}}
        </div>
      </div>
      <div v-bind:class="{'suba':flag,'sub':!flag}" @click="sub">
        {{SBU}}
      </div>


    </div>
    <!--详情内容-->
    <div class="topic_content" v-html="content"></div>

    <!--回复列表展示-->
    <div class="reply">
      <div class="REply">{{dataLiSt && dataLiSt.length}} 回复</div>
      <ul>
        <li v-for="(item,index) of dataLiSt" :key="index">
          <div class="reP">
            <div class="IMG">
              <img :src="item.author.avatar_url"/>
            </div>

            <div class="l_z">
              <p>{{item.author.loginname}} <span
                style="color: #08c;"> {{index+1}}楼 • {{item.create_at | formartDate}}</span></p>
              <p v-html="item.content">{{ item.content &&item.content}}</p>
            </div>

          </div>
          <div class="reP">
            <span>
              <i class="el-icon-star-on"></i>
              <span>55</span>
            </span>
            <span>
              ☜
            </span>
          </div>
        </li>
      </ul>


    </div>

    <!--回复-->
    <div class="Themage">
      <div class="theM">
        添加回复
      </div>

      <input class="inPUt" type="text" placeholder="因为系统接口关闭暂时无法回复"/>
      <el-button type="primary"> 回复</el-button>

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
        content: '',//详情内容html的格式
        sbc_j: '',//次数
        dataLiSt: [],//内容结合
        replies: 0,
        listdata: [],//表头集合
        flag: false,
        SBU: '收藏'
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
          if (res.data.success === ERR_OK) {
            this.content = res.data.data.content;
            this.dataLiSt = res.data.data.replies
            this.listdata = res.data.data
          }
        }).catch();
      },

      //收藏与取消收藏
      sub() {

        this.flag = !this.flag;

        if (this.flag == true) {

          this.SBU = '取消收藏'

        } else if (this.flag == false) {

          this.SBU = '收藏'
        }

      }
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
      margin-top: 22px;
      background: #80BD01;
      padding: 1px 13px;
      line-height: 29px;
      border-radius: 3px;
      color: #fff;
      text-align: center;
    }
    .suba {
      margin-top: 22px;
      padding: 1px 13px;
      line-height: 36px;
      border-radius: 3px;
      color: #fff;
      text-align: center;
      background: #E5E5E5;
    }
  }

  .topic_content {
    padding: 18px;
    line-height: 33px;
    background: #fff;
    > > > .markdown-text {
      h2 {
        font-size: 26px;
        margin: 30px 0 15px;
        border-bottom: 1px solid #eee;
        font-weight: bold;
        line-height: 41px;
      }
      h3 {
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
      ul {
        padding: 0;
        margin: 0 0 10px 25px;
        li {
          line-height: 2em;
          list-style: disc
        }
      }
      > :first-child, .preview > :first-child {
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

    background: #fff;
    margin-top: 19px;
    .REply {
      height: 19px;
      background: #F6F6F6;
      padding: 14px;
    }
    ul {
      li {

        background: antiquewhite;
        display: flex;
        justify-content: space-between;
        padding: 14px;
        border-bottom: solid 1px #00000029;
        background: #fff;
        .reP {
          display: flex;
          .IMG {
            width: 37px;
            height: 37px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .l_z {
            line-height: 26px;
            padding: 1px 14px;
            p:nth-child(1) {
              font-size: 14px;
            }
            p {
              > > > a {
                color: #08c;
              }
            }
            > > >
            img {
              width: 100%;
              height: 100%;
            }
          }

        }
        .reP:nth-child(2) {
          width: 67px;
          height: 24px;
        }

      }
      li:nth-child(1) {
        background-color: #f4fcf0;
      }
      li:nth-child(2) {
        background-color: #f4fcf0;
      }
      li:nth-child(3) {
        background-color: #f4fcf0;
      }
    }
  }

  .Themage {
    height: 300px;
    border: solid 1px #e1e1e1;
    margin-top: 17px;
    border-radius: 4px;
    .theM {
      height: 19px;
      background: #F6F6F6;
      padding: 14px;
    }
    .inPUt {
      height: 206px;
      background: #fff;
      width: 99.8%;
      border: solid 1px #fff;
      line-height: 0px;
      margin-top: 1px;
    }
  }

</style>
