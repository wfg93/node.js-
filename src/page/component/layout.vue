<template>
  <div class="neig">

    <!--分类标题（精华，分享，问答，招聘，客户端测试）-->
    <div class="conTEnt">
      <ul>
        <li v-for="(item,index) of list" :key="index" @click="select(item,index)"
            :class="{yan_se:index == dynamic}">
          <span>{{item.name}}</span>
        </li>
        <!--<li>精华</li>-->
        <!--<li>分享</li>-->
        <!--<li>问答</li>-->
        <!--<li>招聘</li>-->
        <!--<li>客户端测试</li>-->
      </ul>
    </div>
    <!--列表显示-->
    <div class="coNtenT">
      <ul>
        <li v-for="(item,index) of lista" :key="index">
          <!--列左边-->
          <div class="z-title">
            <!--头像-->
            <div class="ImG">
              <img :src="item.author.avatar_url"/>
            </div>
            <!--排名-->
            <div class="numBEr">{{item.reply_count}}/{{item.visit_count}}</div>
            <!--置顶-->
            <div :class="item.top?'Pl_top':'Pl_toz'">{{item.top?'置顶':poinTS(item.tab)}}</div>
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


      <div class="pagef">
        <div @click="jian">
          <i class="el-icon-arrow-left"></i>向前
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
  import {ERR_OK} from "../../assets/apijs/common/config";

  export default {
    name: "layout",
    data() {
      return {
        list: [
          {name: '全部'},
          {name: '精华'},
          {name: '分享'},
          {name: '问答'},
          {name: '招聘'},
          {name: '客户端测试'}
        ],
        lista: [],
        dynamic: 0,

        limit: 20,
        page: 1
      }
    },
    methods: {
      poinTS(vv) {

        if (vv === "share") {
          return "分享"
        }else if (vv == "ask"){

          return "问答"
        }





      },
      select(item, index) {
        console.log("3333", index)
        this.dynamic = index
      },
      async ThethEmE() {

        let res = await HomePaGe.Atestpage({
          tab: 'all',
          page: this.page,
          limit: this.limit
        })
        if (res.success === ERR_OK) {
          this.lista = res.data;
        }


      },
      jian() {
        if (this.page === 1) {
          return
        }
        this.page -= 1
        this.ThethEmE()
      },
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
          margin: 8px 0;
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

            width: 33px;
            height: 20px;
            text-align: center;
            line-height: 21px;
            background: #80BD01;
            color: #fff;
            font-size: 15px;
          }
          .Pl_toz {
            width: 33px;
            height: 20px;
            text-align: center;
            line-height: 21px;
            background: #E5E5E5;
            color: #999999;
            font-size: 15px;
          }

          .ti_tle {
            width: 586px;
            height: 31px;
            margin-left: 5px;
            line-height: 28px;
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
    div{
      width: 79px;
      height: 40px;
      background: #409EFF;
      border-radius: 5px;
      margin-left: 30px;
      line-height: 40px;
    }
    div:nth-child(2){
      background: #67C23A;
    }
  }

</style>
