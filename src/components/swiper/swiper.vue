<template>
    <div class="swiper-wrapper">
        
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    mounted() {
        this.handleSwiper()
    },
    methods: {
        handleSwiper() {
           let targetSwiper = document.getElementsByClassName("swiper-wrapper")[0]
            targetSwiper.onmousedown = function (e){
                let a1= e.screenX;
                targetSwiper.onmouseup=function (e){
                    var a2=e.screenX;
                    if(a1>a2){alert("左滑啊")}
                    if(a1<a2){alert("右滑啊")}
                }
            }
            
        }
    }
}
</script>


<style lang="scss" scoped>
.swiper-wrapper{
    width:100%;
    height:300px;
    background:#000;
    position: relative;
    overflow: hidden;
    .swiper-wrapper{
        position: absolute;
        height:100%;
    }
    .slied{
        float: left;
        width:1920px;
        height:100%;
        
    }
}
</style>



