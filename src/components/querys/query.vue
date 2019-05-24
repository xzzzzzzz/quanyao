<template>
    <div class="register">
        <div class="register-step">
            <div class="step" v-if="tabActive == 0">
                <div class="title">
                    我的进度
                </div>
                <div class="li">
                    <div class="type">手机号码：</div>
                    <div class="sr">
                        <input type="tel" v-model="step1.phone">
                    </div>
                </div>
                <div class="li">
                    <div class="type">验证码：</div>
                    <div class="sr yzm">
                        <input type="text" v-model="step1.yzm">
                        <button @click="getCode">{{step1.timeText}}</button>
                    </div>
                </div>
                <div class="error">{{step1.error}}</div>
                <button class="nextbtn" @click="step1next">点击查询</button>
            </div>
            <div class="step stepjg" v-else-if="tabActive == 1">
                 <div class="title">
                    查询结果
                </div>
                <div class="li">
                    <div class="type">店铺名称：</div>
                    <div class="sr">
                        <span>{{step2.seller_name}}</span>
                    </div>
                </div>
                <div class="li">
                    <div class="type">商家分类：</div>
                    <div class="sr">
                        <span>{{step2.type}}</span>
                    </div>
                </div>
                <div class="li">
                    <div class="type">审核进度：</div>
                    <div class="sr" v-if="step2.status == 0">
                        <span style="">请完善信息</span>
                        <button class="toJump" @click="jump('/pages/works/main?ID='+step2.id)">前往完善</button>
                    </div>
                    <div class="sr" v-else-if="step2.status == 1">
                        <span style="">等待审核</span>
                    </div>
                    <div class="sr" v-else-if="step2.status == 2">
                        <span style="">审核成功等待缴费</span>
                    </div>
                    <div class="sr" v-else-if="step2.status == 3">
                        <span style="">成功入驻</span>
                    </div>
                    <div class="sr" v-else-if="step2.status == 4">
                        <span style="">审核不合格</span>
                    </div>
                    <div class="sr" v-else-if="step2.status == 5">
                        <span style="">缴费成功等待上线</span>
                    </div>
                </div>
                
            </div>
        </div>
        <p class="bottom">如有疑问,请拨打客服电话: <span>021-52271027</span> </p>
    </div>
</template>

<script>
import api from '@/api/api.js'
export default {
    data () {
        return {
            baseUrl: 'https://www.qyaoq.com',
            tabActive: 0,
            step1: {
                phone: '', // 手机号码
                yzm: '', //验证码
                timeText: '获取验证码', //倒计时内容
                error: '',
                timer: '', // 倒计时动画
                count:'' // 倒计时秒数
            },
            step2: {}
        }
    },
    mounted() {
        this.tabActive = 0
    },
    methods: {
        async getsumber() {
            const params = {
                'phone': this.step1.phone
            }
            const data = await this.https(api.getCode(),params)
            if(data.code == '2000'){

            }else{
                this.step1.error = '验证码发送失败'
                setTimeout(() => {
                    this.step1.error = ''
                }, 2000)
            }
        },
        getCode(){
            const TIME_COUNT = 60;
            let yzm = this.step1.yzm// 验证码
            let phone = this.step1.phone//手机号码
            const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
            if(phone == ''){
                this.step1.error = '请输入手机号码'
                setTimeout(() => {
                    this.step1.error = ''
                }, 2000)
            }else if(!reg.test(phone)){
                 this.step1.error = '输入手机号码格式不正确'
                setTimeout(() => {
                    this.step1.error = ''
                }, 2000)
            }else {
                if (!this.step1.isfalg) {
                    this.step1.isfalg = true
                    this.getsumber()
                    this.step1.count = TIME_COUNT; 
                    
                    this.step1.timer = setInterval(() => {
                        if (this.step1.count > 0 && this.step1.count <= TIME_COUNT) {
                            this.step1.count--;
                            this.step1.timeText = this.step1.count+ '秒获取'
                           
                        } else {
                            clearInterval(this.timer);
                            this.step1.timeText = '重新获取'
                            this.step1.timer = null;
                            this.step1.isfalg = false
                        }
                    }, 1000)
                }
            }
            
        } ,
        async step1next(){
            let yzm = this.step1.yzm// 验证码
            let phone = this.step1.phone//手机号码
            const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
            if(phone == ''){
                this.step1.error = '请输入手机号码'
                setTimeout(() => {
                    this.step1.error = ''
                }, 2000)
            }else if(!reg.test(phone)){
                 this.step1.error = '输入手机号码格式不正确'
                setTimeout(() => {
                    this.step1.error = ''
                }, 2000)
            }else if(yzm === ''){
                this.step1.error = '请输入验证码'
                setTimeout(() => {
                    this.step1.error = ''
                }, 2000)
            }else{
                const params = {
                    'phone': this.step1.phone,
                    'code': this.step1.yzm
                }
                const data = await this.https(api.schedule(),params)
                if(data.code == '2000'){
                    this.tabActive = 1
                    this.step2 = data.data
                }else if(data.code == '1010'){
                    this.step1.error = data.msg
                    setTimeout(() => {
                        this.step1.error = ''
                    }, 2000)
                }else if(data.code == '1020'){
                    this.step1.error = '验证码错误'
                    setTimeout(() => {
                        this.step1.error = ''
                    }, 2000)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.register{
    position: relative;
    .bottom{
        padding: 20px 0;
        width:100%;
        text-align: center;
        font-size: 16px;
        span{
            color:#fb3507;
        }
        
    }
    .title{
        font-size: 20px;
        padding-left: 20px;
        line-height: 45px;
        
    }
    .register-step{
        .error{
            font-size: 14px;
            text-align: center;
            color:red;
            height: 45px;
        }
        padding: 0 10px;
        .step{
            .li{
                margin-bottom: 10px;
                height:40px;
                line-height: 40px;
                .textar{
                    width:100%;
                    height: 120px;
                    border:1px solid #e4e2e0;
                }
                &.textli{
                    height:120px;
                }
            }
            .type{
                float: left;
                width:30%;
                text-align: center;
                font-size: 16px;
                color:#3f3f3f;
            }
            .sr{
                float: left;
                width:70%;
                .toJump{
                    width:50%;
                    background:#f88715;
                    color:#fff;
                    margin: 0 0;
                }
                span{
                    font-size: 16px;
                    color:#fb3507;
                }
                input{
                    height:40px;
                    box-sizing: border-box;
                    border:1px solid #e4e2e0;
                    padding:10px;
                    text-align: center;
                    width:100%;
                }
                &.yzm{
                    input{
                        float: left;
                        width:60%;
                        
                    }
                    button{
                        float: right;
                        width:39%;
                        height:40px;
                        line-height: 40px;
                        font-size: 14px;
                        background:#f88715;
                        color:#fff;
                    }
                }
            }
            .nextbtn{
                width:80%;
                height: 50px;
                background:#f88715;
                color:#fff;
                text-align: center;
                line-height: 50px;
                display: block;margin:0 auto 20px;
            }
        }
    }
}
</style>
