<template>
  <div class="cardlist">
    <div class="card" v-for="(time, index) in CardDate" :key="index">
      <div class="img_box" @click="clicklist(index)"><img class="imgs" :src=baseUrl+time.logo alt=""></div>
      <p>{{time.seller_name}}</p>
      <div class="dhbox"><img :src=icon alt="" ><span>{{time.phone}}</span></div>
      <div class="service_box">
        <span v-if="page === 'sjs'">擅长风格：</span>
        <span v-else style="font-weight: bold;">服务区域：</span>
        <span class="region">{{time.region}}</span>
      </div>
    </div>
    <div style="text-align: center;margin-top: 40px;">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :next-text="'下一页'" :prev-text="'上一页'" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="CardDate.length"> </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: 'http://www.qyaoq.com',
      icon: 'static/img/dh.png',
      src: 'static/img/photo.png',
      listQuery: {
        page: 1,
        limit: 10
      },
      total: 320
    }
  },
  props: {
    CardDate: {
      type: Array,
      default: ''
    },
    page: {
      type: String,
      default: ''
    }
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
    clicklist (index) {
      this.$emit('clicklist', this.CardDate[index])
    }
  }
}
</script>
<style>
.cardlist .btn-prev span, .cardlist .btn-next span{
  padding: 0 8px;
}
.cardlist .el-pagination .el-pager li, .cardlist .el-pagination button span{
  background: #fff;
  border: 1px solid #dddddd;
}
.cardlist .el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color:#dd1f00!important;
}
.cardlist .el-pagination span input{
  border-radius: 0px!important;
}
</style>

<style lang="less" scoped>
.cardlist{
  width: 100%;
  margin: 40px 0 60px;
}
.el-pagination{
  background: #fff;
  display: inline-block;
  padding: 20px;
}
.card{
  width: 280px;
  background: #fcf7f7;
  padding: 15px 22px;
  box-sizing:border-box;
  margin: 10px;
  display: inline-block;
  border: 1px solid #fdd0cd;
  font-size: 16px;
  .img_box{
    height:210px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    padding: 2px;
    box-sizing:border-box;
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
    text-align: center;
  }
  .dhbox{
    border: 1px solid #ff6843;
    border-radius: 6px;
    height: 32px;
    margin-bottom: 10px;
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
    height: 54px;
    text-align: left;
    overflow: hidden;
    .region{
      font-size: 14px;
      color:#716d6d ;
      line-height: 24px
    }
  }
}
</style>
