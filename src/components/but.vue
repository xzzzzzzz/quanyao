<template>
    <div class="btn">
        <el-button type="primary" @click="countDown">{{content}}</el-button>
    </div>
</template>

<script>
import { clearInterval } from 'timers';
export default {
  data () {
    return {
      content: '发送验证码',
      totalTime: 10,
      canClick: true // 添加canClick
    }
  },
  methods: {
    countDown () {
    //     if (!this.canClick) return  // 防止重复点击倒计时时间问题
    //     this.canClick = false
    //     this.content = this.totalTime + 's后重新发送'
    //     let clock = window.setInterval(() => {
    //     this.totalTime--
    //     this.content = this.totalTime + 's后重新发送'
    //     if (this.totalTime < 0) {
    //       window.clearInterval(clock)
    //       this.content = '重新发送验证码'
    //       this.totalTime = 10
    //       this.canClick = true  // 这里重新开启
    //     }
    //   },1000)
      this.startMove()
    },
    startMove () {
        window.clearInterval(timer);
        let timer = window.setInterval(() => {
            this.totalTime --
            console.log(this.totalTime)
            if(this.totalTime < 0){
                this.totalTime = 10
                window.clearInterval(timer)
            }
        }, 1000);
    }
  }
}
</script>

