<template>
  <div class="carddetails">
    <!-- 信息展示 -->
    <div class="xingxi_box">
      <div class="card">
        <div class="imgs_bos"><img class="imgs" width= '100%' :src=baseUrl+carddata.logo alt=""></div>
        <p>{{carddata.seller_name}}</p>
        <div class="dhbox"><img :src=icon alt="" ><span>{{carddata.phone}}</span></div>
      </div>
      <div class="map_box">
        <div class="quyu">服务区域</div>
        <map-content></map-content>
      </div>
      <div class="qrcode_box">
        <div><img :src=baseUrl+carddata.program alt="" width="100%" height="100%"><p>小程序</p></div>
        <div><img :src=baseUrl+carddata.code alt="" width="100%" height="100%"><p>公众号</p></div>
      </div>
    </div>
    <!-- 介绍 -->
    <div class="introduce-wrap">
      <div class="introduce pcWidth">
        <h3>公司介绍</h3>
        <div class="introduce-text">{{carddata.explain}}</div>
      </div>
    </div>

    <!-- 热销产品展示（材料供应商详情的） -->
    <!-- <div class="case_wrapper" v-if="page===3||page===4" style="background: none;"  >
      <div class="case pcWidth">
        <h3>热销产品展示</h3>
        <div class="case_img">
          <div class="img_box fl" style="height: 180px;">
            <img alt="" height="100%" :src=icon>
            <div>热销产品</div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- 类型  -->
    <div class="type-wrapper"> 
      <div class="type pcWidth">
        <div class="type-header">
          <span>{{this.typename}}:</span>
          <span @click="brandclick(time, index)" class="active_ss" :class='{"active": activeId === index}' v-for="(time, index) in typedata" :key="index">{{time.type}}</span>
          <span class="fr" style="color:#dd1f00;margin: 0 20px;cursor: pointer;">更多>></span>
        </div>
        <div class="type-img">
          <div class="img_box fl" v-for="(time, index) in typedatalist" :key="index" :class="{'wh1':typedatalist.length>=2}&&index!==5&&index!==4">
            <img :src=baseUrl+time.image alt="" height="100%">
            <div>{{time.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 设计师团队 -->
    <div class="sjsteam">
      <div class="sjsteam_box" v-if="page===3">
        <h3>设计师团队</h3>
        <div class="card_box fl" v-for="(time, index) in plandate" :key="index">
          <div class="img_box"><img :src=baseUrl+time.image alt=""></div>
          <p>{{time.name}}</p>
          <button>立即预约</button>
        </div>
      </div>
    </div>
    <!-- 案例 -->
    <div class="case_wrapper">
      <div class="case pcWidth">
        <h3>{{this.casename}}</h3>
        <div class="case_img">
          <div class="img_box wh1 fl"  v-for="(time, index) in casedata" :key="index">
            <img :src=baseUrl+time.image alt="" width="100%" >
            <div>{{time.title}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import mapContent from '../map'
export default {
  data () {
    return {
      activeId: 0,
      baseUrl: 'http://www.qyaoq.com',
      icon: 'static/img/dh.png',
      casename: '施工案例',
      typename: '',
      carddata: '', //
      typedata: [], //类型
      typedatalist: [],
      plandate: [],
      casedata: '', //案例
    }
  },
  mounted () {
    this.casedata = this.sgddetaildata.productList
    this.typedata = this.sgddetaildata.brand
    if (this.page === 4) {
      this.carddata = this.sgddetaildata.list[0]
    } else {
      this.carddata = this.sgddetaildata.list
    }
    if (this.typedata != "") {
      this.typedatalist = this.typedata[0].info
    }
    this.casenameda()
  },
  components:{mapContent},
  props: [
    'sgddetaildata',
    'page'
  ],
  watch: {
    sgddetaildata () {
    }
  },
  methods: {
    brandclick (val, index) {
      this.typedatalist = val.info
      this.activeId = index
    },
    casenameda () {
      switch(this.page)
      {
        case 0://施工管理详情
          this.typename = '工艺展示'
          break;
        case 2:// 设计师
          this.typename = '擅长类型'
          break;
        case 1:// 第三方
          this.casename = '管理案例'
          this.typename = '崇业范围'
          break;
        case 3:// 装修公司
          this.typename = '擅长类型'
          this.plandate = this.sgddetaildata.plan
          break;
        case 4:// 材料供应商
          this.casename = '装修效果图'
          this.typename = '产品类型'
          break;
        default:   
      };
    }
  }
}
</script>

<style lang="less" scoped>
.active_ss{
  color:#999;
  margin: 0 8px;
  font-size: 16px;
  cursor: pointer;
}
.active{
  color:#333;
}
.xingxi_box{
  width: 1200px;
  padding: 30px 0 ;
  box-sizing:border-box;
  margin: 0 auto;
  height: 348px;
  // 个人信息
  div{ float: left;}
  .card{
    width: 220px;
    background: #fcf7f7;
    padding: 10px 20px;
    box-sizing:border-box;
    text-align: center;
    border: 1px solid #fdd0cd;
    font-size: 16px;
    overflow: hidden;
    .imgs_bos{
      height:180px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.5);
      margin-bottom: 12px;
      .imgs{
        position:relative;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%)
      }
    }
    p{
      margin: 12px 0;
      font-weight: bold;
    }
    .dhbox{
      border: 1px solid #ff6843;
      border-radius: 6px;
      width: 100%;
      height: 32px;
      margin-bottom: 10px;
      color: #ff2400;
      font-size: 16px;
      span{
        float: left;
        line-height: 32px
      }
      img{
        width: 20px;
        float: left;
        margin: 8px 10px
      }
    }
  }
  // 地图
  .map_box{
    height: 100%;
    margin: 0 20px;
    width: 775px;
    position: relative;
    .quyu{
      position: absolute;
      height:30px;
      line-height: 30px;
      color:red;
      background:rgba(255,255,255,.8);
      width:72px;
      text-align: center;
      border-radius: 0 0 5px 0;
      left:0;
      top:0;
      z-index: 333;
    }
  }
  // 二维码
  .qrcode_box{
    box-sizing:border-box;
    height: 100%;
    width: 160px;
    background: #fcf7f7;
    border: 1px solid #fdd0cd;
    text-align: center;
    font-size: 14px;
    padding-top: 5px;
    div{
      width: 110px;
      height: 110px;
      margin-bottom: 30px;
      margin-left: 20px;
      p{
        margin-top: 4px;
      }
    }
  }
}

// 简绍
.introduce-wrap{
  background:#fff;
  padding: 20px 0 36px;
  .introduce{
    .introduce-text{
      padding:10px;
      border:1px solid #fdcfcc;
      background:#fffcfc;
      font-size: 16px;
      color:#333333;
      word-break: break-all;
      word-wrap: break-word; 
      line-height:30px;
    }
  }
}
// 设计师团队
.sjsteam{
  background:#fff;
  padding: 2px;
  .sjsteam_box{
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
    padding: 20px 0 36px;
    .card_box{
      margin: 10px;
      text-align: center;
      overflow: hidden;
      .img_box{
        text-align: left;
        img{
          position:relative;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%);
          max-width:100%;
          max-height:100%;
        }
      }
      p{
        font-size: 14px;
        color: rgb(114, 114, 114);
        margin: 20px;
      }
      button{
        background: #e72002;
        border: none;
        border-radius: 4px;
        width: 60%;
        height: 30px;
        color: #fff;
        font-size: 16px;
      }
      .img_box{
        border: 1px solid #eee;
        width: 158px;
        padding: 10px;
        height: 158px;
        .img_box{
          height: 100%;
        }
      }
    }
  }
}
// 案例
.case_wrapper{
  padding:20px 0;
  .case{
    .case_img{
      width: 100%;
      overflow: hidden;
      .img_box{
        margin: 10px;
        border: 1px rgb(233, 233, 233) solid;
        background: #eeeeee;
        width: 280px;
        height: 204px;
        text-align: center;
        color: #fff;
        overflow: hidden;
        position: relative;
        div{
          background: rgba(0, 0, 0, 0.3);
          width: 100%;
          position: absolute;
          bottom: 0px;
          height: 40px;
          font-size: 18px;
          line-height: 40px;
        }
      }
    }
  }
}
// 类型
.type-wrapper{
  padding:20px 0;
  .type{
    border:1px solid #fdcfcc;
    .type-header{
      height:40px;
      line-height: 40px;
      padding: 0 10px;
      background: #fcf7f7;
      border-bottom:1px solid #fdcfcc;
      font-size: 18px
    }
    .type-img{
      width: 100%;
      padding: 12px;
      overflow: hidden;
      .img_box{
        margin: 6px 8px;
        background: #eeeeee;
        width: 572px;
        height: 350px;
        text-align: center;
        color: #fff;
        border: 1px rgb(233, 233, 233) solid;
        div{
          background: rgba(0, 0, 0, 0.3);
          position: relative;
          top: -60px;
          height: 60px;
          font-size: 20px;
          line-height: 60px;
        }
      }
      .wh1{
        width: 376px;
        height: 240px;
        div{
          top: -40px;
          height: 40px;
          font-size: 18px;
          line-height: 40px;
        }
      }
    }
  }
}
</style>
