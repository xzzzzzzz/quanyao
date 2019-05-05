<template>
    <div class="mHeader">
        <div class="back el-icon-arrow-left fl" v-if="showBack" @click="back"></div>
        <div class="header-lfet fl">
            <span>上海</span>
            <span>[切换]</span>
        </div>
        <div class="header-right fr">
            <span class="el-icon-search"></span>
            <span @click="jump({name:'mcooperation'})">商务中心</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            nowCity: '上海',
            showBack: false
        }
    },
    watch: {
        $route(to,from){
            if(to.path == '/Home'){
                this.showBack = false
            }else{
                this.showBack = true
            }
        }
    },
    methods: {
        address() {
            this.jump({path:'positionpage'})
        },
        back () {
            this.$router.go(-1)
        }
    }
}
</script>


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
    padding: 0 px2rem(20);
    box-sizing: border-box;
    span{
        margin-right:px2rem(10);
    }
    .back{
        height: 100%;
        width: px2rem(30);
        line-height: px2rem(60);
        font-size: 16px;
    }
}
</style>
