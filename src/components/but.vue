<template>
    <div class="btn">
        <el-carousel :interval="4000" type="card" height="300px" :autoplay="false" arrow="never" indicator-position="none">
            <el-carousel-item v-for="item in 6" :key="item">
                <div class="item-content">
                    <h3>{{item}}</h3>
                </div>
            </el-carousel-item>
        </el-carousel>
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

  }
}
</script>

<style lang="less">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }
  .item-content{
        width: 300px;
        height:300px;
        margin: 0 auto;
        border-radius: 50%;
        background-color: #d3dce6;
    }
  .el-carousel__item.is-active {
    .item-content{
        width: 300px;
        height:300px;
        margin: 0 auto;
        border-radius: 50%;
        background-color: #99a9bf;
    }
  }
  
</style>
