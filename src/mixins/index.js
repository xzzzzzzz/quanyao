
const mixins = {
    methods: {
      // 切换路由(有历史记录)
      jump (to) {
        if (this.$router) {
          this.$router.push(to)
        }
      },
      // 切换路由(无历史记录)
      replaceTo (to) {
        if (this.$router) {
          this.$router.replace(to)
        }
      },
      // 前进或后退
      go (n) {
        if (this.$router) {
          this.$router.go(n)
        }
      },
      https (url, params) {
        var date = this.axios
          .post(url, params)
          .then(tranmsg => {
            return tranmsg.data
          })
          .catch(tranmsg => {
            return tranmsg
          })
        return date
      }
    }
  }
  
  export default mixins
  