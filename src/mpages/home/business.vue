<template>
    <div class="bus">
        <div class="business-wrapper" style="background:#fff;">
            <div class="mWidth">
                <h3>
                    品牌施工
                </h3>
                <div class="business-list fix">
                    <div class="list-item" v-for="(item,index) in businessList" :key="index" @click="jump({path:'builddetails',query:{ID: item.id}})">
                        <div class="item-logo">
                            <img :src="basrUrl+item.logo" alt="">
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
        </div>
        <!-- 优质建材 -->
        <div class="business-wrapper">
            <div class="mWidth">
                <h3>
                    优质建材
                </h3>
                <div class="business-list fix">
                    <div class="list-item" v-for="(item,index) in jclist" :key="index" @click="jump({path:'supplierdetails',query:{ID: item.id}})">
                        <div class="item-logo">
                            <img :src="basrUrl+item.logo" alt="">
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
        </div>

        <!--创意设计 -->
        <div class="business-wrapper">
            <div class="mWidth">
                <h3>
                    创意设计
                </h3>
                <div class="business-list fix">
                    <div class="list-item" v-for="(item,index) in originalList" :key="index" @click="jump({path:'designerdetails',query:{ID: item.id}})">
                        <div class="item-logo">
                            <img :src="basrUrl+item.logo" alt="">
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
        </div>

        <!--第三方监管 -->
        <div class="business-wrapper">
            <div class="mWidth">
                <h3>
                    第三方监管
                </h3>
                <div class="business-list fix">
                    <div class="list-item" v-for="(item,index) in supervise" :key="index" @click="jump({path:'supervisedetails',query:{ID: item.id}})">
                        <div class="item-logo">
                            <img :src="basrUrl+item.logo" alt="">
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
        </div>
    </div>
</template>

<script>
export default {
    props: {
        businessList: {
            type: Array,
            default: []
        },
        jclist: {
            type: Array,
            default: []
        },
        originalList: {
            type: Array
        },
        supervise: {
            type: Array
        }
    },
    data () {
        return {
            basrUrl: 'http://qyaoq.com'
        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
@import './static/styles/global';
.bus{
    padding: px2rem(20);
    background:#fff;
}
// 品牌施工/优质建材
    .business-wrapper {
        .business-list{
            overflow: hidden;
            margin-bottom: 20px;
            .list-item{
                float: left;
                padding:px2rem(10) px2rem(12) px2rem(5);
                width: 50%;
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
                font-size:px2rem(13);
                height: px2rem(30);
                line-height: px2rem(30);
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

</style>


