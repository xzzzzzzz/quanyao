<template>
    <div class="hzms">
        <div class="pcWidth fix">
				<div class="help-right h13">
					<div class="right-content">
						<div class="content-top">
							招商动态
						</div>
						<div class="content-mid" v-html="cooperationContent.title">
						</div>
						<div class="content-top">
							入驻流程
						</div>
						<div class="content-mid">
                            <img :src="baseUrl+cooperationContent.image" alt="">
						</div>
						<div class="content-top">
							入驻指南
						</div>
						<div class="content-mid" v-html="cooperationContent.text">
						</div>
					</div>
				</div>
			</div>
    </div>
</template>
<script>
import api from '@/api/api.js'
export default {
    data () {
        return{
            cooperationContent: {
                title: '',
                image: '',
                text: ''
            },
            baseUrl: 'https://www.qyaoq.com'
        }
    },
    mounted() {
        this.get()
    },
    methods: {
        async get(){
            const params={}
            const data = await this.https(api.sjzx(), params);
            if(data.code == '2000'){
                let text = data.data.text
                let title = data.data.title
                let reg1=/&lt;/g;
                let reg2 = /&gt;/g;
                let newText = text.replace(reg1,'<').replace(reg2,'>')
                let newTitle = title.replace(reg1, '<').replace(reg2,'>')
                this.cooperationContent.text= newText
                this.cooperationContent.title= newTitle
                this.cooperationContent.image= data.data.image
            }
        }
    }
}
</script>


<style lang="less" scoped>
.h{
    color:#ff6d02;
}
.hzms{
    padding: 30px 0;
    .pcWidth{
        padding: 30px 10px;
        box-sizing: border-box;
        background:#fff;
    }
    .help-left{
        float: left;
        margin-right: 10px;
        width: 210px;
        background:#f8f6f4;
        border:1px solid #dcc8ac;
        .left-tit{
            height: 48px;
            line-height: 48px;
            font-size: 20px;
            color: #dd070b;
            padding-left: 10px;
        }
        .left-list{
            padding: 20px 10px;
            li{
                height: 50px;
                line-height: 50px;
                font-size: 16px;
                padding-left: 20px;
                color:#666;
                background:url(../../assets/img/libg.png) no-repeat 10px center;
                background-size: 5px 5px;
                cursor: pointer;
                &.active{
                    color:#dd070b;
                }
            }
        }
        .tel{
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            padding-left: 50px;
            color:#666;
            background:url(../../assets/img/tel2.png) no-repeat 15px center;
            background-size: 20px 20px;
            cursor: pointer;
            border-top:1px solid #dcc8ac;
        }
    }
    .h13{
        min-height: 526px;
        width: 100%;
        float: left;
        .right-content{
            padding: 0 20px 20px;
            .content-top{
                height: 40px;
                line-height: 40px;
                font-size: 20px;
                border-bottom: 1px solid #f7f5f3;
                color: #383838;
                padding-left: 10px;
                border-left: 5px solid #dd070b;
            }
            .content-mid{
                padding-top: 30px;
                line-height: 30px;
                text-align: left;
                margin-bottom:60px;
                h4{
                    font-size: 18px;
                }
            }
        }
    }
}
</style>
