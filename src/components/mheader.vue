<template>
    <div class="mHeader">
        <div class="header-lfet fl">
            <span>上海</span>
            <span>[切换]</span>
        </div>
        <div class="header-right fr">
            <span class="el-icon-search"></span>
            <span>商务中心</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';
.mHeader{
    width:100%;
    height: px2rem(60);
    line-height: px2rem(60);
    position:fixed;
    top:0;
    left:0;
    background:#f4f4f4;
    font-size: px2rem(14);
    color:#121212;
    z-index: 333;
    span{
        margin-right:px2rem(10);
    }
    .header-lfet {
        padding-left: px2rem(20);
    }
    .header-right{
        padding-right: px2rem(10);
    }
}
</style>
