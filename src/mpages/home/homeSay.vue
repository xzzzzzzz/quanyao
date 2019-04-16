<template>
    <div class="home-say">
        <div class="banner">
                 <el-carousel :interval="5000" arrow="never"  indicator-position='none'>
                    <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                        <img :src="baseUrl+item.image" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
        <div class="say mWidth">
            <div class="say-content">
                <div class="say-title">
                    平台说说
                </div>
                <ul class="say-item">
                    <li v-for="(item,index) in sayList" :key="index" @click="jump({path:'news',query:{ID: item.id,title: encodeURI(item.title)}})">
                        {{item.title}}
                    </li>
                </ul>
            </div>
            <div class="foun">
                <div class="foun-item" v-for="(item,index) in imgList" :key="index">
                    <img :src=item.img alt="">
                </div>
            </div>
        </div>

        <div class="recommend mWidth">
            <div class="recommend-item">
                <div class="item" v-for="(item,index) in intery" :key="index" @click="jump({name: item.name})">
                    <div class="item-top">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="item-name">
                        {{item.title}}
                    </div>
                </div>
            </div>
        </div>
        <div class="min-banner mWidth">
            <img :src="baseUrl+minBanner.image" alt="">
        </div>
    </div>
</template>


<script>
export default {
    props: {
        sayList: {
            type: Array,
            default: []
        },
        noticeList: {
            type: Array,
            default: []
        },
        bannerList: {
            type: Array,
            default: []
        },
        minBanner: {
            type: Object
        }
    },
    data () {
        return {
            baseUrl: 'http://www.qyaoq.com',
            intery:[
                {
                    title: '装修公司',
                    image: '/static/img/intery4.png',
                    name: 'mcompanyList'
                },
                {
                    title: '材料供应商',
                    image: '/static/img/intery1.png',
                    name: 'msupplier'
                },
                {
                    title: '装修施工队',
                    image: '/static/img/intery5.png',
                    name: 'mbuild'
                },
                {
                    title: '第三方监管',
                    image: '/static/img/intery2.png',
                    name: 'msupervise'
                },
                {
                    title: '设计大师',
                    image: '/static/img/intery3.png',
                    name: 'mdesigner'
                },
                {
                    title: '装修大学堂',
                    image: '/static/img/intery6.png',
                    name: 'muniversity'
                },
            ],
            imgList: [
                {img: '/static/img/jy.png'},
                {img: '/static/img/tx.png'},
                {img:'/static/img/zx.png'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import './static/styles/global';
.home-say{
    .banner {
        height:px2rem(150);
    }
    // 平台说说
    .say{
        padding:  px2rem(20) px2rem(20) 0;
         .say-content{
            width:100%;
            box-sizing: border-box;
            height: px2rem(200);
            border:1px solid #7ecbff;
            background: #fff;
            .say-title{
                height:px2rem(40);
                font-size: px2rem(18);
                color:#fff;
                padding-left:px2rem(10);
                line-height: px2rem(40);
                background: #7ecbff;
            }
            .say-item{
                padding: px2rem(10);
                height:px2rem(200);
                overflow: auto;
                li{
                    height:px2rem(30);
                    line-height: px2rem(30);
                    font-size: px2rem(16);
                    cursor: pointer;
                    
                }
            }
        }
        
        .foun{
            width:100%;
            height:px2rem(60);
            box-sizing: border-box;
            .foun-item{
                 margin: px2rem(10) 0;
                float: left;
                width:33.33333%;
                height:100%;
                box-sizing: border-box;

            }
            .foun-item:last-child{
                border-bottom:0;
            }
            .proposal{
                background:url(/assets/img/jy.png) no-repeat center center;
                background-size: 100% 100%;
            }
            .complaint{
                background:url(/assets/img/tx.png) no-repeat center center;
                background-size: 100% 100%;
            }
            .consultation{
                background:url(/assets/img/zx.png) no-repeat center center;
                background-size: 100% 100%;
            }
        }
    }
    // 推荐
    .recommend{
        padding:0 px2rem(20);
        .recommend-item{
            width:100%;
            box-sizing: border-box;
            overflow: hidden;
            background:#fff;
            .item{
                height:px2rem(180);
                width:100%;
                margin-bottom:px2rem(10);
                box-sizing: border-box;
                position: relative;
                .item-top{
                    height: 100%;
                    width:100%;
                    position:absolute;
                    left:0;
                    top:0;
                }
                .item-name{
                    text-align: center;
                    padding: px2rem(5) 0;
                    box-sizing: border-box;
                    color:#fff;
                    background:#ff6d02;
                    font-size: px2rem(12);
                    position:absolute;
                    width:100%;
                    bottom:0;
                    left:0;
                    z-index: 2;
                }
            }
            .item:nth-child(3n){
                padding-right: 0;
            }
        }
    }
    .min-banner{
        padding: 0 px2rem(20);
        height: px2rem(50);
    }
}
</style>

