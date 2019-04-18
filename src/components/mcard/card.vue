<template>
  <div class="cardlist">
    <div class="card" v-for="(time, index) in CardDate" :key="index" @click="clicklist(index)">
      <div class="img_box"><img class="imgs" :src=baseUrl+time.logo alt=""></div>
      <p>{{time.seller_name}}</p>
      <div class="dhbox"><img :src=icon alt="" ><span>{{time.phone}}</span></div>
      <div class="service_box">
        <span v-if="page === 'sjs'">擅长风格：</span>
        <span v-else style="font-weight: bold;">服务区域：</span>
        <span class="region">{{time.region}}</span>
      </div>
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
    clicklist (index) {
      this.$emit('clicklist', this.CardDate[index])
    }
  }
}
</script>

<style lang="scss" scoped>
@import './static/styles/global.scss';
.cardlist{
  padding: px2rem(10);
  overflow: hidden;
}
.card{
  width: 49%;
  float: left;
  background: #fcf7f7;
  padding: px2rem(15) px2rem(15);
  box-sizing:border-box;
  border: 1px solid #fdd0cd;
  font-size: px2rem(16);
  .img_box{
    height:px2rem(60);
    overflow: hidden;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    padding: px2rem(2);
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
    margin: px2rem(12) 0;
    font-weight: bold;
    text-align: center;
  }
  .dhbox{
    border: 1px solid #ff6843;
    border-radius: 6px;
    height: px2rem(30);
    margin-bottom: px2rem(10);
    color: #ff2400;
    font-size: px2rem(10);
    span{
      float: left;
      line-height: px2rem(32);
    }
    img{
      width: px2rem(20);
      float: left;
      margin: px2rem(8) px2rem(5);
      height: auto;
    }
  }
  .service_box{
    height: px2rem(55);
    text-align: left;
    overflow: hidden;
    font-size: px2rem(14);
    .region{
      font-size: px2rem(12);
      color:#716d6d ;
      line-height: px2rem(20)
    }
  }
  &:nth-child(2n){
    float: right;
  }
}
</style>
