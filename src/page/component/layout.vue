<template>
  <!--中间-->
  <div class="neig">

    <!--分类标题（精华，分享，问答，招聘，客户端测试）-->
    <div class="conTEnt">
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="select(item,index)"
            :class="{yan_se:index == dynamic}">
          <span>{{item.name}}</span>
        </li>

      </ul>
    </div>
    <!--列表显示-->
    <div class="coNtenT">
      <ul>
        <li v-for="(item,index) of lista" :key="index" @click="details(item.id)">
          <!--列左边-->
          <div class="z-title">
            <!--头像-->
            <div class="ImG">
              <img :src="item.author.avatar_url"/>
            </div>
            <!--排名-->
            <div class="numBEr">{{item.reply_count}}/{{item.visit_count}}</div>
            <!--置顶-->
            <div :class="item.top?'Pl_top':'Pl_toz'" v-if="!item.good">{{item.top?'置顶':poinTS(item.tab)}}</div>
            <div :class="{Pl_top:item.good}" v-else>精华</div>
            <!--内容-->
            <div class="ti_tle">{{item.title}}</div>
          </div>
          <!--列右边-->
          <div class="y_tleti">

            <!--时间-->
            <div class="numBEr">{{item.last_reply_at | formartDate}}</div>
          </div>
        </li>
      </ul>

<!--页数 前进后退-->
      <div class="pagef">
        <div @click="jian">
          <i class="el-icon-arrow-left"></i>向前
        </div>
        <div>
          当前页{{page}}
        </div>
        <div @click="add">
          后退 <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import {HomePaGe} from "../../assets/apijs/api";
  import {ERR_OK, commonUrl} from "../../assets/apijs/common/config";
  import axios from 'axios'

  export default {
    name: "layout",
    data() {
      return {
        list: [
          {name: '全部', id: 'all'},
          {name: '精华', id: 'good'},
          {name: '分享', id: 'share'},
          {name: '问答', id: 'ask'},
          {name: '招聘', id: 'job'},
          {name: '客户端测试', id: 'dev'}
        ],//列表按钮
        lista: [],//列表显示集合
        dynamic: 0,
        limit: 40,//每页条数，每页显示40条
        page: 1,//页数，默认是第一页
        curTab: 'all',//按钮分类传参 默认是全部
        detal:''
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
      //按钮分类
      select(item, index) {
        this.limit = 40,
          this.page = 1,
          this.curTab = item.id
        this.dynamic = index
        this.ThethEmE()

      },

      //列表接口
      async ThethEmE(index) {

        try {

          let res = await HomePaGe.Atestpage({
            tab: this.curTab,
            page: this.page,
            limit: this.limit,
          })
          if (res.success === ERR_OK) {
            this.lista = res.data;
            console.log(res)


          }
        } catch (e) {
          this.$message.error("服务器异常，请稍后再试")
        }
      },


      //主题详情
      details(id) {

        console.log('111', id)
        this.$router.push('/topic/'+id)

      },

      //分页向前
      jian() {
        if (this.page === 1) {
          this.$message({
            message: '不要再点“向前”了，你已经是第一页了',
            type: 'success'
          });
          return
        }
        this.page -= 1
        this.ThethEmE()
      },
      //分页向后
      add() {
        this.page += 1
        this.ThethEmE()
      },
    },
    mounted() {
      this.ThethEmE()
    },


  }
</script>

<style lang="scss" scoped>
  .neig {
    width: 100%;
    .conTEnt {
      width: 100%;
      height: 44px;
      background: #F6F6F6;

      ul > li {
        float: left;
        margin-left: 20px;
        line-height: 44px;
        color: #80BD01;
      }
      .yan_se {
        height: 24px;
        line-height: 23px;
        background: #80BD01;
        border-radius: 3px;
        padding: 3px;
        color: #ffff;
        text-align: center;
        margin-top: 7px;
      }

    }
    .coNtenT {
      ul > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #FFFFFF;
        border-top: solid 1px #F0F0F0;

        .z-title {
          width: 80%;
          display: flex;
          align-items: center;
          margin: 4px 0;
          .ImG {
            width: 40px;
            height: 40px;
            margin-left: 8px;
            img {
              width: 100%;
              height: 100%;
            }

          }
          .numBEr {
            width: 80px;
            height: 20px;
            margin-left: 15px;
            font-size: 13px;

          }
          .Pl_top {

            width: 46px;
            text-align: center;
            background: #80BD01;
            color: #fff;
            font-size: 15px;
          }
          .Pl_toz {
            width: 51px;
            text-align: center;
            background: #E5E5E5;
            color: #999999;
            font-size: 15px;
            padding: 2px 0px;
          }

          .ti_tle {
            width: 586px;
            height: 31px;
            margin-left: 5px;
            line-height: 28px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .y_tleti {
          width: 12%;
          display: flex;
          justify-content: left;
          align-items: center;

          .ImG {
            width: 32px;
            height: 32px;

            img {
              width: 100%;
              height: 100%;
            }

          }
          .numBEr {
            margin-left: 5px;
            font-size: 12px;

          }
        }

      }
      ul > li:hover {
        background: #b8b8b8;
      }
    }
  }

  .pagef {
    width: 100%;
    height: 50px;
    background: #FFFFFF;
    display: flex;
    div {
      width: 79px;
      height: 40px;
      background: #409EFF;
      border-radius: 5px;
      margin-left: 30px;
      line-height: 40px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      color: chartreuse;

    }

  }

</style>
