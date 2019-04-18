<template>
  <div class="moblie-wrapper">
    <!-- 头部 -->
    <div>
      <m-header></m-header>
    </div>
    <!-- 内容 -->
    <div class="mContent" id="scroller-box">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <div class="buttombox">quanyao &copy;2009-2019 沪ICP备19009071号-1</div>
    <!-- 工具 -->
    <tool></tool>
  </div>
</template>

<script>
import mHeader from '@/components/mheader'
import tool from '@/components/tool'
export default {
    components: {mHeader,tool}
}
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
.moblie-wrapper{
    height:100%;
    .mContent{
        padding: px2rem(60) 0;
        height:100%;
        width:100%;
        box-sizing: border-box;
        overflow: auto;
    }
    .buttombox{
        width:100%;
        height: px2rem(60);
        line-height: px2rem(60);
        text-align: center;
        background:#000;
        color:#fff;
        position: fixed;
        bottom:0;
        left:0;
        font-size: px2rem(12);
        z-index: 333;
    }
}


</style>

