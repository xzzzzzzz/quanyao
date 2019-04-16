<template>
    <div class="bus">
        <div class="business-wrapper" style="background:#fff;">
            <div class="pcWidth">
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
            <div class="pcWidth">
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

<style lang="less" scoped>
// 品牌施工/优质建材
    .business-wrapper {
        padding: 0 0 10px 0;
        .business-list{
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

</style>


