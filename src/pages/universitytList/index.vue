<template>
    <div class="university pcWidth">
        <!-- <div class="banner">
            <img src="" alt="">
        </div> -->
        <div class="university-list">
            <div class="list-header">
                你应该知道的装修那些事
            </div>
            <div class="list-content fix">
                <div class="list-new fl">
                    <div class="list-item fix" v-for="(item,index) in newList" :key="index" @click="jump({name:'universityDetails',query:{ID: item.id,title: encodeURI(item.title)}})">
                        <div class="item-left fl">
                            <img :src=baseUrl+item.image alt="">
                        </div>
                        <div class="item-right fl">
                            <div class="new-title">
                                {{item.title}}
                            </div>
                            <div class="new-content">
                                &nbsp;
                            </div>
                            <div class="new-time">
                                <span>
                                    {{item.create_time | formatDates}}
                                </span>
                                <span>
                                    <!-- <i class="el-icon-view"></i>
                                    2232 -->
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style="text-align: center;margin-top: 90px;">
                        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :next-text="'下一页'" :prev-text="'上一页'" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="newList.length"> </el-pagination>
                    </div>
                </div>
                <!-- <div class="list-tj fl">
                     <div class="list-item fix">
                        <div class="item-left fl">
                            <img src="" alt="">
                        </div>
                        <div class="item-right fl">
                            <div class="new-title">
                                你的看见咯简历非法违法违法
                            </div>
                            <div class="new-content">
                                开始就东街口是你的开始登机佛堵奶发佳都科技逢狼时刻多久发流口水的解放路开始登机六块腹肌隆盛科技颠覆了肯德基了房间里德生科技老实交代联发科时间到了看风景时口袋里浪费是可敬的
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import api from '@/api/api.js'
export default {
    data ()  {
        return {
            baseUrl: 'http://www.qyaoq.com',
            icon: 'static/img/dh.png',
            listQuery: {
                page: 1,
                limit: 10
            },
            total: 320,
            newList: [] 
        }
    },
    mounted() {
        this.getDate()
    },
  methods: {
    handleSizeChange(val) { // 选择每页条数
      this.listQuery.limit = val
      this.$emit('viewDetails', this.listQuery)
    },
    handleCurrentChange(val) {// 选择分页
      this.listQuery.page = val
      this.$emit('viewDetails', this.listQuery)
    },
    async getDate () {
        const params={}
        const data = await this.https(api.universityList(), params);
        if(data.code == "2000"){
            this.newList = data.data
        }else{
            this.$message.error('获取列表失败，请稍后重试')
        }
    }
  }
}
</script>

<style>
.university .btn-prev span, .university .btn-next span{
  padding: 0 8px;
}
.university .el-pagination .el-pager li, .university .el-pagination button span{
  background: #fff;
  border: 1px solid #dddddd;
}
.university .el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color:#dd1f00!important;
}
.university .el-pagination span input{
  border-radius: 0px!important;
}
</style>

<style lang="less" scoped>
.university{
    padding-top:20px;
    .banner{
        height: 120px;
        margin: 10px auto;
    }
    .university-list{
        .list-header{
            height:40px;
            font-size: 18px;
            color:#131111;
            line-height: 40px;
            border-bottom:1px solid #e7e5e5;
        }
        .list-content{
            min-height: 500px;
            background:#fff;
            margin:20px auto 40px;
            padding: 20px 0;
            .list-new{
                padding:0 30px;
                width:75%;
                box-sizing: border-box;

            }
            .list-tj{
                width: 25%;
                padding-right: 20px;
                box-sizing: border-box;
                .list-item{
                    height: 100px;
                    border-bottom:0;
                    .item-left{
                        width:30%;
                        height:100%;
                    }
                    .item-right{
                        width: 70%;
                    }
                }
            }
            .list-item{
                height: 180px;
                border-bottom: 1px dashed #e4e4e4;
                width: 100%;
                padding: 30px 0;
                .item-left{
                    width:25%;
                    height:100%;
                }
                .item-right{
                    width: 75%;
                    padding-left: 20px;
                    box-sizing: border-box;
                    .new-title{
                        height:30px;
                        line-height:30px;
                        color:#282828;
                        font-size: 18px;
                        width:100%;    
                        overflow: hidden;    
                        text-overflow:ellipsis;    
                        white-space: nowrap;            
                    }
                    .new-content{
                        line-height: 25px;
                        font-size: 14px;
                        color:#636464;
                        word-break: break-all;
                        word-wrap: break-word;
                        display: -webkit-box;    
                        -webkit-box-orient: vertical;    
                        -webkit-line-clamp: 2;    
                        overflow: hidden;
                        margin:20px 0;
                        box-sizing: border-box;
                        min-height: 51px;
                    }
                    .new-time{
                        margin-top:50px;
                        color:#a7a0af;
                        font-size: 16px;
                        span{
                            padding-right: 50px;
                        }
                    }
                }
            }
        }
    }
}
</style>

