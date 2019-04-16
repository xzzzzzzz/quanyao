<template>
  <div>
    <carddetails :sgddetaildata='sgddedata' :page='0' v-if="this.sgddedata!==''"></carddetails>
    <div class="dateunll" v-else>
      <i :class='{"el-icon-loading": text === "拼命加载中...", "el-icon-success": text === "暂无数据"}'></i>
      {{text}}</div>
  </div>
</template>

<script>
import api from '@/api/api'
import carddetails from '@/components/mcarddetails'
export default {
  data () {
    return {
      text: '加载中...',
      sgddedata: ''
    }
  },
  mounted () {
    let id = this.$route.query.ID
    this.requestdetail(id)
  },
  methods: {
    async requestdetail (ID) {
      const params = {
        id: ID
      }
      const date = await this.https(api.sgddetail(), params)
      if (date.code === '2000') {
        this.sgddedata = date.data
        if(this.sgddedata==='') {
          this.text = '暂无数据'
        }
      } else {
        this.text = '暂无数据'
      }
    }
  },
  components: {
    carddetails
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './static/styles/global.scss';
.dateunll{
  height: px2rem(680);
  color: #333;
  font-size: px2rem(30);
  text-align: center;
  line-height: px2rem(400);
  i{
    margin: 0 px2rem(20);
    font-size: px2rem(40);
  }
}
</style>
