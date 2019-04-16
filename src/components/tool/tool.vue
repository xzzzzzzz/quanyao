<template>
    <div class="tool-wrapper">
        <div class="tool-list">
            <div class="tool-item" :class='[item.className, {"active":active == index}]' v-for="(item,index) in toolList" :key="index" @click="showChild(index)">
                <span :class="item.icon"></span>
                <div class="item-child" v-html="item.childrenText">
                </div>
            </div>
            <div class="tool-item up" v-if="showUp" @click="scrollToTop">
                <span class="el-icon-arrow-up"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            showUp: false,
            active: -1,
            toolList:[
                {className: 'phone',icon: 'el-icon-phone',childrenText:'<p>联系电话</p><p>021-52271027</p>'},
                {className: 'code',icon: 'el-icon-code',childrenText:'<img :src="/static/img/code.png" alt=""/>'},
                {className: 'program',icon: 'el-icon-program',childrenText:'<img :src="/static/img/p.png" alt=""/>'},
            ]
        }
    },
    mounted() {
        this.$nextTick(function () {
            let targetScroll = document.getElementById("scroller-box")
            targetScroll.addEventListener('scroll', this.handleScroll)
            targetScroll.addEventListener('click', this.showChild)
        });
    },
    methods: {
        handleScroll() {
        //id scroller-box是自己在组件上添加的，为了方便获取dom
        this.scrollTop = document.getElementById("scroller-box").scrollTop
        if (this.scrollTop > 50) {
          this.showUp = true
        }else {
          this.showUp = false
        }
      },
      scrollToTop() {
        let timer = null, _that = this
        //动画，使用requestAnimationFrame代替setInterval
        cancelAnimationFrame(timer)
        timer = requestAnimationFrame(function fn() {
          if (_that.scrollTop > 0) {
            _that.scrollTop -= 50
            document.getElementById("scroller-box").scrollTop = _that.scrollTop
            timer = requestAnimationFrame(fn)
          } else {
            cancelAnimationFrame(timer)
            _that.toTopShow = false
          }
        })
      },
      showChild(index) {
          this.active = index
      }
    },
    destroyed() {
      let targetScroll = document.getElementById("scroller-box")
      window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="scss" scoped>
@import './static/styles/global.scss';
.tool-wrapper{
    position: fixed;
    right:0;
    top: 50%;
    transform: translateY(-50%);
    width:px2rem(40);
    z-index: 999;
    .tool-list{
        .tool-item{
            height:px2rem(40);
            width:100%;
            background:rgba(0,0,0,.5);
            line-height: px2rem(40);
            font-size: px2rem(18);
            text-align: center;
            color:#fff;
            &.phone{
                background:#2599e6;
                border-radius: px2rem(5) 0 0 0;
                .item-child{
                    width:px2rem(120);
                    line-height: px2rem(20);
                }
            }
            &.code{
                background: #f3210d url(/static/img/code.png) no-repeat center;
            }
            &.program{
                background:#23b727 url(/static/img/p.png) no-repeat center;
            }
            &.up{
                border-radius:0 0 0 px2rem(5);
            }
            .item-child{
                position: absolute;
                background:rgba(0,0,0,.5);
                right:px2rem(40);
                top:0;
                font-size: px2rem(12);
                opacity: 0;
                filter: alpha(opacity=0);
                transform: scale(0.01);
            }
            &.active{
                .item-child{
                    opacity: 1;
                    filter: alpha(opacity=1);
                    transform: scale(1);
                }
            }
        }
    }
}
</style>

