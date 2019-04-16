<template>
  <div class="sjsList">
    <card :CardDate='CardDate' @viewDetails='viewDetails' @clicklist='cardclicklist' :page='"sjs"'></card>
  </div>
</template>

<script>
import api from '@/api/api'
import card from '@/components/card'
export default {
  data () {
    return {
      CardDate: []
    }
  },
  mounted () {
    this.requestlist()
  },
  methods: {
    async requestlist () {
      const params = {
        q_id: ''
      }
      const date = await this.https(api.sjslils(), params)
      if (date.code === '2000') {
        this.CardDate=date.data
      } else {
        this.$message.error('获取列表失败，请稍后再试');
      }
    },
    viewDetails (val) {
      alert(val)
    },
    cardclicklist (date) {
      this.jump({name: 'designerdetails', query: {ID: date.id}})
    }
  },
  components: {
    card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sjsList{
  width: 1200px;
  margin: 0 auto;
}
</style>
