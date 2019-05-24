<template>
    <div class="hzms">
        <div class="mWidth fix">
            <div class="help-left">
                <ul class="left-list">
                    <li v-for="(item,index) in leftList" @click="leftActive(index)" :class="{'active': leftactive == index}" :key="index">{{item.name}}</li>
                </ul>
            </div>
				<div class="help-right h13">
					<div class="right-content" v-if="leftactive==0">
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
                    <div class="right-content" v-else-if="leftactive==1">
                        <entry></entry>
                    </div>
                    <div class="right-content" v-else>
                        <querys></querys>
                    </div>
				</div>
			</div>
    </div>
</template>
<script>
import api from '@/api/api.js'
import entry from '@/components/mentry'
import querys from '@/components/mquerys'
export default {
    data () {
        return{
            cooperationContent: {
                title: '',
                text: '',
                image: ''
            },
            baseUrl: 'https://www.qyaoq.com',
            leftList: [
                {
                    name: '入驻指南',
                },{
                    name: '自动入驻'
                },{
                    name: '进度查询'
                }
            ],
            leftactive: 0
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
        },
        leftActive(index){
            this.leftactive = index
        }
    },
    components:{entry,querys}
}
</script>
<style lang="scss" scoped>
@import './static/styles/global';
.h{
    color:#ff6d02;
}
.hzms{
    .mWidth{
        padding: px2rem(20) 0;
        box-sizing: border-box;
        background:#fff;
    }
    .help-left{
        float: left;
        width: 100%;
        background:#f8f6f4;
        border:1px solid #dcc8ac;
        margin-bottom:px2rem(20);
        .left-list{
            li{
                height: px2rem(50);
                line-height: px2rem(50);
                font-size: 16px;
                float: left;
                width:33.33333%;
                color:#666;
                cursor: pointer;
                text-align: center;
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
        min-height: px2rem(526);
        width: 100%;
        float: left;
        .right-content{
            padding: 0 px2rem(10) px2rem(20);
            box-sizing: border-box;
            .content-top{
                height: px2rem(40);
                line-height: px2rem(40);
                font-size: px2rem(20);
                border-bottom: 1px solid #f7f5f3;
                color: #383838;
                padding-left: px2rem(10);
                border-left: px2rem(5) solid #dd070b;
            }
            .content-mid{
                padding-top: px2rem(30);
                line-height: px2rem(30);
                text-align: left;
                box-sizing: border-box;
                margin-bottom:px2rem(60);
                h4{
                    font-size: px2rem(18);
                }
            }
        }
    }
}
</style>
