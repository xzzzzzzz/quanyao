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
import carddetails from '@/components/carddetails'
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
<style lang="less" scoped>
.dateunll{
  height: 680px;
  color: #333;
  font-size: 30px;
  text-align: center;
  line-height: 400px;
  i{
    margin: 0 20px;
    font-size: 40px;
  }
}
</style>
