<template>
  <div class="zxgslier">
    <div class="card" v-for="(time, index) in CardDate" :key="index">
      <div class="img_box" @click="cardclicklist(time)"><img class="imgs" :src=baseUrl+time.logo alt="">
      </div>
      <p>{{time.seller_name}}</p>
      <div class="dhbox"><img :src=icon alt="" ><span>{{time.phone}}</span></div>
      <div class="service_box">
        <div>        
            <span class="region">地址：</span>
            <span >{{time.address}}</span>
        </div>
        <div>
            <span  class="region">服务区域：</span>
            <span>{{time.region}}</span>
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
      icon: 'static/img/dh.png',
      CardDate: [],
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
      const date = await this.https(api.zxgslils(), params)
      if (date.code === '2000') {
        this.CardDate=date.data
      } else {
        this.$message.error('获取列表失败，请稍后再试');
      }
    },
    cardclicklist (date) {
      this.jump({name: 'companydetails', query: {ID: date.id}})
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
.zxgslier .btn-prev span, .zxgslier .btn-next span{
  padding: 0 8px;
}
.zxgslier .el-pagination .el-pager li, .zxgslier .el-pagination button span{
  background: #fff;
  border: 1px solid #dddddd;
}
.zxgslier .el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color:#dd1f00!important;
}
.zxgslier .el-pagination span input{
  border-radius: 0px!important;
}
.el-pagination{
  background: #fff;
  display: inline-block;
  padding: 20px;
}
</style>
<style lang="less" scoped>
.zxgslier{
  width: 1200px;
  margin: 40px auto 60px;
.card{
  width: 280px;
  background: #fcf7f7;
  padding: 15px 22px 10px;
  box-sizing:border-box;
  margin: 10px;
  display: inline-block;
  border: 1px solid #fdd0cd;
  font-size: 16px;
  .img_box{
    height:120px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    padding: 10px 16px;
  }
  .imgs{
    position:relative;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    max-width:100%;
    max-height:100%;
  }
  p{
    margin: 12px 0;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.5);
    padding: 16px 0;
    margin: 0;
    text-align: center;
  }
  .dhbox{
    border: 1px solid #ff6843;
    border-radius: 6px;
    height: 32px;
    margin: 15px 0 20px;
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
  .service_box{
    min-height: 85px;
    text-align: left;
    overflow: hidden;
    font-size: 14px;
    line-height: 18px;
    div{
        margin-bottom: 10px;
    }
    .region{
      color:#716d6d;
      font-size: 16px;
    }
  }
}
}
</style>
