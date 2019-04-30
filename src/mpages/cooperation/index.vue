<template>
    <div class="hzms">
        <div class="mWidth fix">
			<!-- 左边导航区域 -->
				<!-- <div class="help-left">
					<h2 class="left-tit">帮助中心</h2>
					<ul class="left-list">
						<li>
							服务协议
						</li>
						<li>
							隐私协议
						</li>
					</ul>
                    <div class="tel">
                        联系我们
                    </div>
				</div> -->
			<!-- 右侧内容区域 -->
				<div class="help-right h13">
					<div class="right-content">
						<div class="content-top">
							招商动态
						</div>
						<div class="content-mid">
                           <h4 class="h">全耀装修社区平台，强势来袭！</h4>
                           <p>
                                集实体店、电子商务、微信公众号、小程序为一体
                                的装饰装修行业以业主、装饰公司、建材商家及广大从
                                业人员为核心的专业型服务型的社区服务平台；帮助广
                                大业主、装饰公司、建材商家及广大从业人员构建线下
                                实体、线上电子商务、移动社交等多种交易场景于一体
                                的商业交易模式；为广大业主、装饰公司、建材商家及
                                广大从业人员提供近距离便捷、经济的社区化交易服务
                                ；
                           </p>
                            <p class="h" style="margin-top:50px;">
                                去全耀装修社区服务平台专业便捷经济品质看得见！
                            </p>
						</div>
						<div class="content-top">
							入驻流程
						</div>
						<div class="content-mid">
                            <img src="/static/img/sw_5.png" alt="">
						</div>
						<div class="content-top">
							入驻指南
						</div>
						<div class="content-mid">
                            <p>
                                【1】提交入驻公司完善的公司资质，包括公司营业
                                执照、税务登记证、组织机构代码证或者是统一社会
                                信用代码证（均需加盖企业公章）。<br>
                                【2】品牌授权、商标注册、渠道证明；<br>
                                【3】平台审核，通过审核则有客服与您联系，若未
                                通过审核，客服也将联系您，并提供进一步的协助；<br>
                                【4】通过审核的用户，请在规定时间内缴纳平台费
                                用，当您缴纳完费用后，您的商品便可在全耀平台上
                                线。
                            </p>
						</div>
					</div>
				</div>
			</div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            imgList:[
                '/static/img/sw_1.png','/static/img/sw_2.png',
                '/static/img/sw_3.png','/static/img/sw_4.png',
                '/static/img/sw_5.png',
            ]
        }
    }
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
        min-height: px2rem(526);
        width: 100%;
        float: left;
        .right-content{
            padding: 0 px2rem(20) px2rem(20);
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
