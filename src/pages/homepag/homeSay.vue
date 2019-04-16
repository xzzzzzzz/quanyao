<template>
    <div class="home-say">
        <div class="say pcWidth">
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
            <div class="banner">
                 <el-carousel :interval="5000" arrow="never"  indicator-position='none'>
                    <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                        <img :src="baseUrl+item.image" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="foun">
                <div class="foun-item" v-for="(item,index) in imgList" :key="index">
                    <img :src=item.img alt="">
                </div>
            </div>
        </div>

        <div class="recommend pcWidth">
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
            <div class="bulletin">
                <div class="bulletin-title">
                    公告栏
                </div>
                <ul class="bulletin-item">
                    <li v-for="(item,index) in noticeList" :key="index" @click="jump({path:'news',query:{ID:item.id,title: encodeURI(item.title)}})">
                        {{item.title}}
                    </li>
                </ul>
            </div>
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
        }
    },
    data () {
        return {
            baseUrl: 'http://www.qyaoq.com',
            intery:[
                {
                    title: '装修公司',
                    image: '/static/img/intery4.png',
                    name: 'companyList'
                },
                {
                    title: '材料供应商',
                    image: '/static/img/intery1.png',
                    name: 'supplier'
                },
                {
                    title: '装修施工队',
                    image: '/static/img/intery5.png',
                    name: 'build'
                },
                {
                    title: '第三方监管',
                    image: '/static/img/intery2.png',
                    name: 'supervise'
                },
                {
                    title: '设计大师',
                    image: '/static/img/intery3.png',
                    name: 'designer'
                },
                {
                    title: '装修大学堂',
                    image: '/static/img/intery6.png',
                    name: 'university'
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

<style lang="less" scoped>
.home-say{
    // 平台说说
    .say{
        padding: 10px 0 30px;
        height:300px;
        .say-content{
            float: left;
            width:30%;
            box-sizing: border-box;
            height: 100%;
            border:1px solid #7ecbff;
                background: #fff;
            .say-title{
                height:40px;
                font-size: 18px;
                color:#fff;
                padding-left:10px;
                line-height: 40px;
                background: #7ecbff;
            }
            .say-item{
                padding: 10px;
                height:200px;
                li{
                    height:30px;
                    line-height: 30px;
                    font-size: 16px;
                    cursor: pointer;
                    
                }
            }
        }
        .banner {
            float: left;
            width:55%;
            height: 100%;
            padding:0 10px;
            box-sizing: border-box;
            img{
                display: block;
                width:100%;
                height:100%;

            }
        }
        .foun{
            float: right;
            width:15%;
            height:100%;
            .foun-item{
                width:100%;
                height:33.3333%;
                border-bottom: 2px solid  #fff;
                box-sizing: border-box;
                img{
                    width:100%;
                    height:100%;
                }

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
        height: 410px;
        margin-bottom:20px;
        .recommend-item{
            float: left;
            width:70%;
            border: 1px solid #ff5500;
            padding: 10px 10px 20px;
            height:100%;
            box-sizing: border-box;
            overflow: hidden;
            background:#fff;
            .item{
                float: left;
                width:33.333333%;
                padding-right:10px;
                height:50%;
                box-sizing: border-box;
                margin-bottom:10px;
                position: relative;
                .item-top{
                    height: 100%;
                    width:95%;
                    position:absolute;
                    left:0;
                    top:0;
                }
                .item-name{
                    text-align: center;
                    padding: 15px 0;
                    box-sizing: border-box;
                    color:#fff;
                    background:#ff6d02;
                    font-size: 18px;
                    position:absolute;
                    width:95%;
                    bottom:0;
                    left:0;
                    z-index: 2;
                }
            }
            .item:nth-child(3n){
                padding-right: 0;
            }
        }
        .bulletin{
            float: right;
            width:26%;
            height: 100%;
            border: 1px solid #ff5500;
            background:#fff;
            box-sizing: border-box;
            .bulletin-title{
                height: 40px;
                line-height: 40px;
                padding-left: 20px;
                background:#fe2500;
                color:#fff;
                font-size: 18px;
            }
            .bulletin-item{
                li{
                    height: 30px;
                    line-height: 30px;
                    padding-left: 20px;
                    font-size: 14px;
                    color:#666666; 
                    cursor: pointer;
                }
            }
        }
    }
}
</style>

