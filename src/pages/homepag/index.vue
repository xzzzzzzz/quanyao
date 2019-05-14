<template>
    <div class="home">
        <home-say :sayList='sayList' :noticeList='noticeList' :bannerList='bannerList'></home-say>

        <div class="noticeBanner">
            <img :src='"http://www.qyaoq.com"+minBanner.image' alt="">
        </div>
        <!-- 品牌施工 -->
        <business :businessList='businessList' :jclist="jclist"></business>
        
        <!-- 创意设计 -->
        <div class="originality-wrapper" style="background:#fff;">
            <div class="pcWidth">
                <h3>
                    创意设计
                </h3>
                <div class="originality">
                    <div class="originality-left">
                        <img src="../../assets/img/cy.png" alt="">
                    </div>
                    <div class="originality-list">
                        <div class="list-item" v-for="(item,index) in originalList" :key="index" @click="jump({path:'designerdetails',query:{ID: item.id}})">
                           <div class="item">
                              <img :src="baseUrl+item.logo" alt="">
                              <div class="item-name">
                                  {{item.seller_name}}
                              </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="standard pcWidth">
            <h3>
                规范第三方管理
            </h3>
            <div class="standard-list">
                <div class="list-item" v-for="(item,index) in supervise" :key="index" @click="jump({path:'supervisedetails',query:{ID: item.id}})">
                    <div class="item-logo">
                        <img :src="baseUrl+item.logo" alt="">
                    </div>
                    <div class="item-name">
                        <div class="name">
                            {{item.seller_name}}
                        </div>
                        <div class="adds">
                            <span class="el-icon-location-outline"></span>
                            {{item.title}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="case-wrapper">
            <div class="pcWidth">
                <h3>
                    案例图片
                </h3>
                <div class="case">
                    <div class="case-list">
                        <div class="list-item" v-for="(item,index) in caseList" :key="index">
                           <div class="item">
                                <div class="item-name">
                                    {{item.title}}
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 友情链接 -->
        <!-- <div class="friendship-wrapper pcWidth">
            <h3>
                友情链接
            </h3>
            <div class="friendship">
              
            </div>
        </div> -->
    </div>
</template>
<script>
import api from '@/api/api.js'
import homeSay from './homeSay'
import business from './business'
export default {
    data () {
        return {
            baseUrl: 'http://www.qyaoq.com',
            bannerList: [], //轮播图
            sayList: [], // 平台说说
            noticeList: [], // 公告栏
            minBanner: {
                id: '',
                image: ''
            },  // 中部小广告
            businessList: [], //品牌施工
            jclist: [],  //优质建材
            originalList: [], //创意设计
            supervise: [], //第三方监管
            caseList: [], //案例图片

        }
    },
    components: {
        homeSay,
        business
    },
    mounted () {
       this.get()
       this.getDate()
    },
    methods: {
      async get() {
        const params = {}
        const data = await this.https(api.home(),params);
        if(data.code == '2000'){
            this.sayList = data.data.ping 
            this.noticeList = data.data.gong
            this.minBanner = data.data.centre
            this.bannerList = data.data.roll
        }else{
            this.$message.error(data.msg)
        }
      },
      async getDate() {
        const params= {}
        const data = await this.https(api.home2(), params);
        if(data.code == '2000'){
            this.businessList = data.data.brand
            this.jclist = data.data.build
            this.originalList=data.data.devise
            this.supervise = data.data.supervise
            this.caseList = data.data.case
        }else{
            this.$message.error(data.msg)
        }
      },
      cardclicklist (date) {
        this.jump({name: 'companydetails', query: {ID: date.id}})
      }
    }                 
}
</script>

<style lang="less" scoped>
.home{
    
    
    .noticeBanner{
        width:100%;
        height: 100px;
        margin-bottom:20px;
        img{
            display:block;
            width:100%;
            height:100%;
        }
    }
    
    //创意设计
    .originality-wrapper{
        .originality{
            overflow: hidden;
            height: 510px;
            margin-bottom: 20px;
            padding-bottom: 20px;
            .originality-left{
                float: left;
                width: 400px;
                height: 100%;
                img{
                    display: block;
                    width:100%;
                    height: 100%;

                }
            }
            .originality-list{
                float: left;
                width:800px;
                height:100%;
                .list-item{
                    float: left;
                    width: 50%;
                    height: 50%;
                    box-sizing: border-box;
                    padding: 0  0 20px 20px;
                    .item{
                        box-shadow: 0 3px 5px rgba(0,0,0,.3);
                        width:100%;
                        height:100%;
                        position: relative;
                        img{
                          position: absolute;
                          width:100%;
                          height:100%;
                          left:0;
                          top:0;
                        }
                        .item-name{
                            position:absolute;
                            width:100%;
                            height: 30px;
                            line-height: 30px;
                            background: rgba(255,255,255,.9);
                            color:#666666;
                            font-size: 14px;
                            padding-left:10px;
                            left:0;
                            bottom:0;
                            box-sizing: border-box;
                            z-index: 2;
                        }
                    } 
                }
            }
        }
    }

    //规范第三方管理
    .standard{
        margin-bottom:20px;
        .standard-list{
          overflow: hidden;
          margin-bottom: 20px;
          .list-item{
              float: left;
              padding:10px 12px 5px;
              width: 16.66666%;
              box-sizing: border-box;
              border:1px solid #dcdcdc;
              background:#fff;
              &:hover{
                  border-color:#ff5500;
              }
          }
          .item-logo{
              width:100%;
          }
          .item-name{
              font-size:14px;
              height: 30px;
              line-height: 30px;
              .name{
                  float: left;
                  color:#8d8d8d;

              }
              .adds{
                  float: right;
                  color:#999999;
              }
          
          }
      }
    }

    //案例图片
    .case-wrapper{
        background:#fff;
        padding-bottom:20px;
        .case{
            .case-list{
              overflow: hidden;
                .list-item{
                    float: left;
                    width:300px;
                    height: 150px;
                    box-sizing: border-box;
                    padding: 0  20px 20px 0 ;
                    .item{
                        width:100%;
                        height:100%;
                        position: relative;
                        .item-name{
                            position:absolute;
                            width:100%;
                            height: 30px;
                            line-height: 30px;
                            background: rgba(0,0,0,.6);
                            color:#fff;
                            font-size: 14px;
                            padding-left:10px;
                            left:0;
                            bottom:0;
                            box-sizing: border-box;
                        }
                    } 
                }
            }
        }
    }

    //友情链接
    .friendship-wrapper{
        .friendship{
            background:#fff;
            border-top:1px solid #eaeaea;
            font-size: 14px;
            a{
                color:#9a9a9a;
                padding:20px;
            }
        }
    }

}
</style>
