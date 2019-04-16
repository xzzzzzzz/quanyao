<template>
    <div class="new-content mWidth">
        <div class="content-head">
            <h2 class="">{{title}}</h2>
            <!-- <p class="fb-time">发布时间：2018-09-30</p> -->
        </div>
        <div class="content-main" v-html="newstext">
		
        </div>
    </div>
</template>
<script>
import api from '@/api/api.js'
export default {
    data () {
        return {
            newstext: '',
            title: ''
        }
    },
    created () {
        this.title = decodeURI(this.$route.query.title)
        this.getData()
    },
    methods: {
        async getData () {
            const params = {
                id: this.$route.query.ID
            }
            const data = await this.https(api.universitydetails(), params);
            if(data.code == '2000'){
                let text = data.data[0].text
                let reg1=/&lt;/g;
                let reg2 = /&gt;/g;
                let newText = text.replace(reg1,'<').replace(reg2,'>')
                this.newtext = newText
                this.newstext = text
            }else{
                this.$message.error('获取内容失败，请稍后再试')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './static/styles/global.scss';
.new-content{
    padding: px2rem(20);
    margin-bottom: px2rem(20);
    background: #fff;
    box-sizing: border-box;
    .content-head{
        text-align: center;
        margin-top: px2rem(20);
        h2{
            font-size: px2rem(18);
            color: #eb613d;
            font-weight: bold;
            margin-bottom: px2rem(17);
        }
        p{
            font-size: px2rem(14);
        }
    }
    .content-main{
        margin-top: px2rem(20);
        width: 100%;
        overflow: hidden;
        line-height: px2rem(30);
        min-height:px2rem(400);
    }
}
</style>


