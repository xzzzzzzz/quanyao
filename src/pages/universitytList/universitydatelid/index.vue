<template>
    <div class="new-content pcWidth">
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

<style lang="less" scoped>
.new-content{
    padding: 25px 122px;
    margin-bottom: 20px;
    background: #fff;
    box-sizing: border-box;
    margin:30px auto;
    .content-head{
        text-align: center;
        margin-top: 20px;
        h2{
            font-size: 18px;
            color: #eb613d;
            font-weight: bold;
            margin-bottom: 17px;
        }
        p{
            font-size: 14px;
        }
    }
    .content-main{
        margin-top: 20px;
        width: 100%;
        overflow: hidden;
        line-height: 30px;
        min-height:400px;
    }
}
</style>


