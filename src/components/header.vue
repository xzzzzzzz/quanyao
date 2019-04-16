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
                            <p>
                                <a href="#">[切换]</a>
                            </p>
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
            logo: '/static/img/logo.png'
        }
    },
    created () {
        this.get()
    },
    methods: {
        async get() {
        const params = {}
        const data = await this.https(api.home(),params);
        this.topBanner = data.data.top 
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
            overflow: hidden;
            .logo{
                float: left;
                width: 246px;
                overflow: hidden;
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
