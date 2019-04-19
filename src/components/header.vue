<template>
    <div class="header">
        <div class="pcWidth">
            <div class="header-top">
                <div class="header-left">
                    <span style="color:#ff3604;">欢迎扫码关注</span>
                    <span>平台小程序</span>
                    <span>|</span>
                    <span>二维码</span>
                </div>
                <div class="header-right">
                    <span>
                        商务中心
                    </span>
                </div>      
            </div>
            <div class="header-bottom">
                <div class="logo">
                    <div class="logo-left">
                        <router-link to="/Home">
                            <img :src="logo" alt="">
                        </router-link>
                    </div>
                        <div class="logo-right">
                            <p>
                                上海
                            </p>
                            <p @click="showCity=!showCity" style="cursor:pointer">
                                [切换]
                            </p>
                            <!-- <div class="city-list" v-if="showCity">
                                <dl class="city-item" v-for='(item,index) in cityList' :key="index">
                                    <dt :class="{'active': cityActive == index}" @click="cityActive(index)">上海</dt>
                                    <dd :class="{'active': regionActive == index}">嘉定</dd>
                                </dl>
                            </div> -->
                        </div>
                </div>
                <div class="minbanner">
                    <el-carousel :interval="5000" arrow="never" height="80px" indicator-position='none'>
                        <el-carousel-item v-for="(item,index) in topBanner" :key="index">
                            <img :src="baseUrl+item.image" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="tel">
                    <p>
                        热线电话： <span>021-52271027</span> 
                    </p>
                    <div class="seach">
                        <input type="text" placeholder="搜索装修公司">
                        <a href="#"></a>
                    </div>

                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
import api from '../api/api.js'
export default {
    data () {
        return {
            baseUrl: 'http://www.qyaoq.com',
            topBanner: [],
            logo: '/static/img/logo.png',
            showCity: false,
            cityActives: -1,
            regionActives: -1,
            cityList: []
        }
    },
    created () {
        this.get()
       // this.cityGet()
    },
    methods: {
      async get() {
        const params = {}
        const data = await this.https(api.home(),params);
        this.topBanner = data.data.top 
      },
      async cityGet() {
          const params = {}
          const data = await this.https(api.city(), params);
          if(data.code == '2000'){
              this.cityList = data.data
          }else{
              this.$message.error('城市列表获取失败，请稍后再试！！')
          }
      },
      cityActive (index) {
          this.cityActive = index
      },
      regionActive (index) {
          this.regionActive = index
      }
    }
}
</script>



<style lang="less" scoped>
    .header{
        border-bottom: 3px solid #cc1c02;
        padding-bottom: 20px;
        .header-top{
            font-size: 14px;
            height:30px;
            line-height: 30px;
            margin-bottom: 20px;
            .header-left{
                float: left;
                span{
                    padding: 0 3px;
                    color:#666666;
                }
            }
            .header-right{
                float: right;
                color:#666666;
            }       
        }
        .header-bottom{
            height:80px;
            .logo{
                float: left;
                height:100%;
                width: 246px;
                .logo-left{
                    a{
                        float: left;
                        font-size:24px;
                        color:#ff6d02;
                        padding-right: 5px;
                        width:80%;
                        line-height: 30px;
                        box-sizing: border-box;
                    }
                    
                }
                .logo-right{
                    float: left;
                    border-left: 1px solid #d3d1d1;
                    line-height: 25px;
                    box-sizing: border-box;
                    padding-left:5px;
                    position:relative;
                    .city-list{
                        position: absolute;
                        width:300px;
                        min-height: 200px;
                        background:#fff;
                        border:1px solid #333333;
                        z-index: 3333;
                        top: 50px;
                        left:0;
                        .city-item{
                            padding:10px;
                            overflow: hidden;
                            dt{
                                cursor: pointer;
                                &.active{
                                    background:#ff6d02;
                                    color:#fff;
                                }
                            }
                            dd{
                                float: left;
                                padding: 10px;
                                margin: 2px;
                                cursor: pointer;
                                &.active{
                                    background:#ff6d02;
                                    color:#fff;
                                }
                            }
                            
                        }
                    }
                }
            }
            .minbanner{
                float: left;
                width:630px;
                padding-left:80px;
                overflow: hidden;
                height:100%;
                box-sizing: border-box;
                img{
                    width:100%;
                    height:100%;
                    display: block;
                    margin:0 auto;
                }
            }
            .tel{
                float: right;
                width: 300px;
                font-size: 18px;
                color:#333333;
                text-align: right;
                p{
                    padding: 10px 0;
                    span{
                        color:#ff3604;
                    }
                }
                .seach{
                    width: 100%;
                    position: relative;
                    height: 30px;
                    input{
                        position: absolute;
                        right:35px;
                        height: 100%;
                        box-sizing: border-box;
                        top:0;
                        border:1px solid #ff6d02;
                        padding:7px;
                    }
                    a{
                        position:absolute;
                        right:0;
                        top:0;
                        width: 36px;
                        height:100%;
                        background:url(../assets/img/seach.png) no-repeat right top;
                        background-size: 36px 100%;     
                    }
                }
                
            }
        }
    }
</style>
