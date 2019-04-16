<template>
  <div>
    <!-- 头部 -->
    <div>
      <header-top></header-top>
    </div>
    <!-- 内容 -->
    <div >
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <div class="buttombox">quanyao &copy; 2009-2019 quanyao.com All Rights Reserved</div>
  </div>
</template>

<script>
import api from '@/api/api'
import headerTop from '@/components/header'
export default {
  data () {
    return {
      msg: '首页'
    }
  },
  components: {
    headerTop
  },
  mounted () {
    // this.jumpa()
  },
  methods: {
    async jumpa () {
      const params = {}
      const date = await this.https(api.home(), params)
      console.log(date)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .buttombox{
    width: 100%;
    height: 90px;
    background: #000;
    color: #f3f3f3;
    text-align: center;
    line-height: 90px
  }
</style>
