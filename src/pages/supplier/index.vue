<template>
  <div class="supplier">
    <div class="banner pcWidth">
      <img src="@/assets/img/gg.png" alt="" width=100%>
    </div>
    <div class="type-wrapper">
      <div class="type pcWidth">
        <span :class='{"active": activeId === -1}' @click="type(-1)">全部</span>
        <span v-for="(item,index) in CardDate" :key="index" @click="type(index)" :class='{"active": activeId == index}'>{{item.type}}</span>
      </div>
    </div>
    <div class="sp-list pcWidth fix">
      <div class="list-item" @click="cardclicklist(item)" v-for="(item,index) in CardDatelist" :key="index">
        <div class="img_box"><img class="imgs" :src=baseUrl+item.logo alt=""></div>
        <div class="text">
          {{item.seller_name}}
        </div>
      </div>
    </div>
    <div style="text-align: center;margin: 40px 0 60px;">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :next-text="'下一页'" :prev-text="'上一页'" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="CardDate.length"> </el-pagination>
    </div>
  </div>
</template>
<script>
import api from '@/api/api'
export default {
  data () {
    return{
      baseUrl: 'http://www.qyaoq.com',
      activeId: -1,
      CardDate: [],
      CardDatelist: [],
      CardDatelist_qb: [],//全部数据
      listQuery: {
        page: 1,
        limit: 10
      },
      total: 320
    }
  },
  mounted () {
    this.requestlist()
  },
  methods: {
    async requestlist () {
      const params = {}
      const date = await this.https(api.clgyslils(), params)
      if (date.code === '2000') {
        this.CardDate=date.data
        for(let i=0; i<this.CardDate.length; i++){
          for(let x=0; x<this.CardDate[i].info.length; x++){
            this.CardDatelist_qb.push(this.CardDate[i].info[x])
          }
        }
         this.CardDatelist = this.CardDatelist_qb
      } else {
        this.$message.error('获取列表失败，请稍后再试');
      }
    },
    cardclicklist (date) {
      this.jump({name: 'supplierdetails', query: {ID: date.id}})
    },
    type(type) {
      this.activeId = type
      if(type === -1){
        this.CardDatelist = this.CardDatelist_qb
        return
      }
      this.CardDatelist = this.CardDate[type].info
    },
    handleSizeChange(val) { // 选择每页条数
      this.listQuery.limit = val
    },
    handleCurrentChange(val) {// 选择分页
      this.listQuery.page = val
    },
  },
}
</script>
<style>
.el-pagination{
  background: #fff;
  display: inline-block;
  padding: 20px;
}
.supplier .btn-prev span, .supplier .btn-next span{
  padding: 0 8px;
}
.supplier .el-pagination .el-pager li, .supplier .el-pagination button span{
  background: #fff;
  border: 1px solid #dddddd;
}
.supplier .el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color:#dd1f00!important;
}
.supplier .el-pagination span input{
  border-radius: 0px!important;
}
</style>
<style lang="less" scoped>
.supplier{
  .banner{
    margin:20px auto;
    height:300px;
    background:red;
  }
  .type-wrapper{
    background:#fff;
    padding:20px 0;
    .type{
      border:1px solid #f7f7f7;
      padding:20px;
      box-sizing: border-box;
      span{
        padding:5px 10px;
        color:#686868;
        font-size: 14px;
        margin:20px;
        cursor: pointer;
      }
      span.active{
        background:red;
        color:#fff;
      }
    }
  }
  .sp-list{
    padding: 20px 0;
    .list-item{
      background:#fff;
      width: 280px;
      padding: 15px 22px 0px;
      box-sizing:border-box;
      margin: 10px;
      display: inline-block;
      border: 1px solid #fdd0cd;
      font-size: 16px;
      .img_box{
        height:280px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
      }
      .imgs{
        position:relative;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        max-width:100%;
        max-height:100%;
      }
      .text{
        line-height: 60px;
        font-size: 16px;
        height:70px;
        text-align: center;
      }
      &:hover{
        border-color: #ff7456;
        box-shadow: 1px 3px 5px rgba(255,116,86, 0.5);
      }
      &:nth-child(4n){
        margin-right:0;
      }
    }
  }

}
</style>
