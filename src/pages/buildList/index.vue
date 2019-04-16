<template>
  <div class="sgdList">
    <div></div>
    <card :CardDate='CardDate' @viewDetails='viewDetails' @clicklist='cardclicklist' ></card>
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
      const date = await this.https(api.sgdlils(), params)
      if (date.code === '2000') {
        this.CardDate=date.data
      }
    },
    viewDetails (val) {
      alert(val)
    },
    cardclicklist (date) {
      this.jump({name: 'builddetails', query: {ID: date.id}})
    }
  },
  components: {
    card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sgdList{
  width: 1200px;
  margin: 0 auto;
}
</style>
