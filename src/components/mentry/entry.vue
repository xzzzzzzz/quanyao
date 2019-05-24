<template>
    <div class="register">
        <ul class="register-tab">
            <li :class="{active: tabActive == index}" v-for="(item,index) in tab" :key="index">{{item}}</li>
        </ul>
        <div class="register-step">
            <div class="step" v-if="tabActive == 0">
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
                <button class="nextbtn" @click="step1next">下一步</button>
                <p class="xy">注册即同意《<span @click="jump({path: 'agreement'})">全耀注册协议</span>》</p>
            </div>
            <div class="step" v-else-if="tabActive == 1">
                <div class="li">
                    <div class="type">营业执照：</div>
                    <div class="sr">
                        <el-upload
                        class="upload-demo"
                        :action="action"
                        :on-success="handleAvatarSuccessyy"
                        name="image"
                        :show-file-list="false"
                        >
                        <img v-if="step2.yyimage" :src="step2.yyimage" class="avatar">
                        <el-button v-else size="small" type="primary">点击上传</el-button>
                        </el-upload>
                    </div>
                </div>
                <div class="li">
                    <div class="type">商家分类：</div>
                    <div class="sr">
                       <input type="text" v-model="step2.spclassify">
                    </div>
                </div>
                <div class="li">
                    <div class="type">建材商分类：</div>
                    <div class="sr">
                       <input type="text" v-model="step2.buildtype">
                    </div>
                </div>
                <div class="li">
                    <div class="type">商铺名称：</div>
                    <div class="sr">
                       <input type="text" v-model="step2.spname">
                    </div>
                </div>
                <div class="li">
                    <div class="type">商铺电话：</div>
                    <div class="sr">
                       <input type="tel" v-model="step2.spphone">
                    </div>
                </div>
                <div class="li">
                    <div class="type">商铺地址：</div>
                    <div class="sr">
                       <input type="text" v-model="step2.spaddress">
                    </div>
                </div>
                <div class="li">
                    <div class="type">擅长类型：</div>
                    <div class="sr">
                       <input type="text" v-model="step2.style">
                    </div>
                </div>
                <div class="li">
                    <div class="type">公众号：</div>
                    <div class="sr">
                       <input type="text" v-model="step2.public">
                    </div>
                </div>
                <div class="li">
                    <div class="type">小程序二维码：</div>
                    <div class="sr">
                        <el-upload
                        class="upload-demo"
                        :action="action"
                        :on-success="handleAvatarSuccessewm"
                        name="image"
                        :show-file-list="false"
                        >
                        <img v-if="step2.xcxM" :src="step2.xcxM" class="avatar">
                        <el-button v-else size="small" type="primary">点击上传</el-button>
                        </el-upload>
                    </div>
                </div>
                <div class="li">
                    <div class="type">商铺logo：</div>
                    <div class="sr">
                        <el-upload
                        class="upload-demo"
                        :action="action"
                        :on-success="handleAvatarSuccesslogo"
                        name="image"
                        :show-file-list="false"
                        >
                        <img v-if="step2.splogo" :src="step2.splogo" class="avatar">
                        <el-button v-else size="small" type="primary">点击上传</el-button>
                        </el-upload>
                    </div>
                </div>
                <div class="li textli">
                    <div class="type">商铺简介：</div>
                    <div class="sr">
                        <textarea name="spjj" id="spjj" class="textar" v-model="step2.spjj"></textarea>
                    </div>
                </div>
                <div class="li textli">
                    <div class="type">经营范围：</div>
                    <div class="sr">
                        <textarea name="jyfw" id="jyfw" class="textar" v-model="step2.spjyfw"></textarea>
                    </div>
                </div>
                <div class="li textli">
                    <div class="type">服务区域：</div>
                    <div class="sr">
                        <textarea name="fwqy" id="fwqy" class="textar" v-model="step2.spfwqy"></textarea>
                    </div>
                </div>
                <div class="li">
                    <div class="type">服务区域图：</div>
                    <div class="sr">
                        <el-upload
                        class="upload-demo"
                        :action="action"
                        :on-success="handleAvatarSuccessfw"
                        name="image"
                        :show-file-list="false"
                        >
                        <img v-if="step2.spfwqyimage" :src="step2.spfwqyimage" class="avatar">
                        <el-button v-else size="small" type="primary">点击上传</el-button>
                        </el-upload>
                    </div>
                </div>
                <p class="error">{{step2.error}}</p>
                <button class="nextbtn" @click="step2next">下一步</button>
            </div>
            <div class="step" v-else-if="tabActive == 2">
                <div class="dui">
                    <img src="/static/img/dui.png" alt="">
                </div>
                <p style="text-align:center;color:#f90707;font-size:32px;">材料提交成功!</p>
                <p style="padding: 30px 60px; color:#0f0f0f;font-size:18px;">
                    请您耐心等待3-5个工作日,我们将对您的资质进行审核,请您保持电话畅通,届时将有专属客服联系您!
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/api.js'
export default {
    data () {
        return {
            baseUrl: 'https://www.qyaoq.com',
            tabActive: 0,
            tab:['①手机号码','②完善信息','③注册成功'],
            action:api.uploadImg(),
            step1: {
                phone: '', // 手机号码
                yzm: '', //验证码
                timeText: '获取验证码', //倒计时内容
                isfalg: false, //倒计时开关
                error: '',
                timer: '',
                count:''
            },
            step2: {
                id: '',
                yyimage: '',// 营业执照展示
                yyimages: '', //营业执照提交
                spclassify: '', //商铺分类
                spname: '', //商铺名称
                spphone: '', //商铺电话
                spaddress: '', //商铺地址
                splogo: '', //商铺logo
                splogos: '', //商铺logo提交
                spjj:'', //商铺简介
                spjyfw: '', //商铺经营范围
                spfwqy: '',//商铺服务区域
                spfwqyimage: '',//商铺服务区域图
                spfwqyimages: '', //商铺服务区域图提交
                public: '', //公众号
                xcxM: '', //小程序二维码
                xcxMs: '', //小程序二维码提交
                style:'', //擅长分类
                buildtype: '', //建材商分类
                error: ''
            }
        }
    },
    mounted() {
        if(this.$router.query.ID !== 'undefined'){
            this.tabActive = 1
            this.step2.id = this.$router.query.ID
        }else{
            this.tabActive = 0
        }
        
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
                const data = await this.https(api.step1next(),params)
                if(data.code == '2000'){
                    this.tabActive = 1
                    this.step2.id = data.data
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
        },
        async step2next(){
            let id = this.step2.id 
            let yyimage = this.step2.yyimages// 营业执照
            let spclassify = this.step2.spclassify//商铺分类
            let spname= this.step2.spname//商铺名称
            let spphone= this.step2.spphone//商铺电话
            let spaddress= this.step2.spaddress//商铺地址
            let splogo= this.step2.splogos//商铺logo
            let spjj= this.step2.spjj //商铺简介
            let spjyfw= this.step2.spjyfw//商铺经营范围
            let spfwqy= this.step2.spfwqy//商铺服务区域
            let spfwqyimage = this.step2.spfwqyimages // 服务区域图片 
            let publics = this.step2.public//公众号
            let xcxM = this.step2.xcxMs //小程序二维码
            let style=this.step2.style //擅长分类
            let buildtype = this.step2.buildtype //建材商分类
            if(yyimage === '' || spclassify == '' || spname == '' || spphone == '' || spaddress == '' || splogo == '' || spjj == '' || spjyfw == '' || spfwqy == '' || publics == '' || xcxM == '' || style == '' || spfwqyimage == '' || buildtype == ''){
                this.step2.error = '请补全全部信息'
                setTimeout(() => {
                    this.step2.error = ''
                }, 2000)
            }else{
                const params= {
                    id: id ,//id
                    seller_name : spname,//商家名称
                    logo :  splogo,//商家logo
                    phone : spphone,//商家号码
                    address : spaddress,//公司地址
                    code : publics,//公众号
                    program : xcxM,//小程序二维码
                    explain : spjj,// 商家/个人简介
                    image : spfwqyimage ,//服务区域图
                    type : spclassify,//商家属性分类
                    style : style,//擅长类型
                    region : spfwqy,//服务区域
                    buildtype : buildtype,//建材商分类
                    telephone : this.step1.phone,//注册申请的手机号码
                    license : yyimage// 营业执照
                }
                const data = await this.https(api.step2next(), params);
                if(data.code == '2000'){
                    this.tabActive = 2
                }else{
                    this.step2.error = data.msg
                    setTimeout(() => {
                        this.step2.error = ''
                    }, 2000)
                }
               
            }
        },
        handleAvatarSuccessyy(res, file) {
            this.step2.yyimage = URL.createObjectURL(file.raw);
            this.step2.yyimages = this.baseUrl+res.data
        },
        handleAvatarSuccessewm(res, file) {
            this.step2.xcxM = URL.createObjectURL(file.raw);
            this.step2.xcxMs = this.baseUrl+res.data
        },
        handleAvatarSuccesslogo(res, file) {
            this.step2.splogo = URL.createObjectURL(file.raw);
            this.step2.splogos = this.baseUrl+res.data
        },
        handleAvatarSuccessfw(res, file) {
            this.step2.spfwqyimage = URL.createObjectURL(file.raw);
            this.step2.spfwqyimages = this.baseUrl+res.data
        }
    }
}
</script>
<style>
.el-button--primary{
    background:#f88715;
    color:#fff;
    border:0;
}
.el-button--primary:hover{
    background:#f88715;
    color:#fff;
    border:0;
}
</style>

<style lang="scss" scoped>
@import './static/styles/global';
.register{
    .register-tab{
        overflow: hidden;
        width:100%;
        height:px2rem(50);
        line-height: px2rem(50);
        box-sizing: border-box;
        padding: 0 px2rem(20);
        li{
            float: left;
            width:33.3333333%;
            height:100%;
            text-align: center;
            border-bottom: 1px solid #e7e3e3;
            box-sizing: border-box;
            &.active{
                border-bottom:1px solid #f97e05;
            }
        }
    }
    .register-step{
        .error{
            font-size: 14px;
            text-align: center;
            color:red;
            height: px2rem(50);
        }
        margin-top: px2rem(40);
        padding: 0 px2rem(10);
        .dui{
            width:100%;
            height:px2rem(150);
            margin:px2rem(10) 0;
            img{
                width: 50%;
                height:80%;
                display: block;
                margin: 0 auto;
            }
        }
        .step{
            .li{
                margin-bottom: px2rem(10);
                height:px2rem(40);
                line-height: px2rem(40);
                img{
                    width:px2rem(40);
                    height:px2rem(40);
                    display: block;
                }
                .updateImage{
                    width:80%;
                    background:#f88715;
                    color:#fff;
                    height: px2rem(40);
                }
                .textar{
                    width:100%;
                    height: px2rem(60);
                    border:1px solid #e4e2e0;
                }
                &.textli{
                    height:px2rem(60);
                }
            }
            .type{
                float: left;
                width:30%;
                text-align: center;
                font-size: 12px;
                color:#3f3f3f;
            }
            .sr{
                float: left;
                width:70%;
                input{
                    height:px2rem(40);
                    box-sizing: border-box;
                    border:1px solid #e4e2e0;
                    padding:px2rem(5);
                    text-align: center;
                    width: 100%;
                }
                &.yzm{
                    input{
                        float: left;
                        width:60%;
                        
                    }
                    button{
                        float: right;
                        width:39%;
                        height:px2rem(40);
                        line-height: px2rem(40);
                        font-size: 12px;
                        background:#f88715;
                        color:#fff;
                    }
                }
            }
            .nextbtn{
                width:80%;
                height: px2rem(50);
                background:#f88715;
                color:#fff;
                text-align: center;
                line-height: px2rem(50);
                margin: 0 auto px2rem(20);
                display:block;
            }
            .xy{
                text-align: center;
                font-size: 16px;
                span{
                    color:#f88715;
                }
            }
        }
    }
}
</style>
