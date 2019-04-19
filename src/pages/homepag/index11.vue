<template>
		<!--<div class="el-header">
			<p>
				<img :src=marketdate.logo alt="" height="100%">
				<el-select :class="{'selectw':louc!=='0'}" v-model="louc" :popper-append-to-body=false>
					<el-option :label="marketdate.marketName" value="0">全部楼层</el-option>
					<el-option :label="marketdate.marketName+' '+item.floorName" :value="index+1" v-for="(item,index) in floorList" :key="index">西城红场 {{item.floorName}}</el-option>
				</el-select>
			</p>
			<Nav :URL="urls" :state='0'></Nav>
		</div>
		<div class="el-main">
			<div class="main_aside">
				<img src="../../../static/ViweImges/marketConcent/scds.png" width="100%" style="margin-top: 12px;" @click="jump({name: 'marketGuide', query: {floorName: floorname, logo: marketdate.logo}})">
				<img src="../../../static/ViweImges/marketConcent/ccds.png" width="100%" style="margin-top: 40px;" @click="jump({name: 'marketGuide', query: {floorName: 'B1', logo: marketdate.logo}})">
				<div style="margin-top: 56px;">
					<img src="../../../static/ViweImges/marketConcent/ewm.png" width="100%">
					<img class="imgs" :src=marketdate.qrCode>
				</div>
			</div>
			<div class="main_box">
				<div class="main_top">
					<swiper ref="mySwiper" :options="swiperOption">
						<swiper-slide  v-for="(item,index) in this.MarketDatalist" :key="index">
							<div class="mainimg_box" v-for="(item,index) in item" :key="index">
								<div><img :src=item.doorPhoto alt="" height="100%"><p>{{item.shopsSynopis}}</p></div>
								<h3 @click="onSlideChangeEnd('')">{{item.shopsName}}</h3>
							</div>
						</swiper-slide>
					</swiper>
				</div>
				<div>
					<el-pagination background :page-size= this.page :current-page="currentpage" layout="prev, pager, next" :total= this.total>
					</el-pagination>
					<div style="height:32px;width: 100%;position: relative;top: -32px;"></div>
				</div>
			</div>
		</div>-->
		<div class="el-footer">
			<div :style="{'width': Width2}">
			<div :style="{'width': Width}" id="footerbtnbox" ref="footerbtnbox">
				<div class="btn_box" @click="btnEnterEvent(item.id, index)" v-for="(item,index) in IndustryList" :key="index" :class="{'btn_box2 ':activeId===index}">
					<img :src=item.url alt="" height="60%">
					<p>{{item.industryname}}{{item.a}}</p>
				</div>
			</div>
			</div>
		</div>
</template>
<script>
import { log } from 'util';
//import Nav from '../indexBus/toprouter'
//数组
var timer = null
export default {
	data(){
		const _this = this
		return{
			total: 1,//分页条数
			currentpage: 1,//当前第几页
			page: 8,//每页条数
			louc: '0',//头部当前楼层
			activeId: '',//当前前行业
			urls:'/indexView',
			MarketDatalist: [],// 商家列表
			Market: [],
			marketdate: {//商家信息
				marketName: '',// 商城名称
				logo: '',// 商城logo
			},
			floorList: '',//楼层
			IndustryList:[],//行业类型
			len: 0,
			wlen: 0,
			Listdate:[],//行业类型
			swiperOption: {
				on:{
					slideChangeTransitionStart: function(event){
						//你的事件
						_this.currentpage = this.activeIndex+1
					}
				}
			},
			getshoplist: {
				recommend: 1,// 推荐
				induestryId: '',// 行业ID
				floorId: '',// 楼层ID
				marketId: sessionStorage.getItem('MarketId'),// 商城ID
			}
		}
	},
	methods:{
		btnEnterEvent(ID, index) {//点击底部按钮
			var odiv = this.$refs.footerbtnbox
			this.getshoplist.floorId=this.floorid
			var len= Math.ceil(this.IndustryList.lengt/2)
			if(this.IndustryList.length){
				this.startMover(index, this.activeId)
			}else{
				if(index<4){
					odiv.style.left ='-1800px'
					switch(index){
						case 0:
							index=9
							break;
						case 1:
							index=10
							break;
						case 2:
							index=11
							break;
						case 3:
							index=12
							break;
						case 14:
					}
					this.activeId=13
				}
				var nu = this.len+Math.ceil(this.len/2)
				if(nu<=index){
					var leftnudq = Number(odiv.style.left.substr(odiv.style.left, odiv.style.left.length-2))
					odiv.style.left = leftnudq+this.len*200+'px'
					index=index-this.len
					this.activeId=this.activeId-this.len
				}
				this.startMover(index, this.activeId)
			}

			if (ID===0){
				this.getshoplist.recommend=1
				this.getshoplist.induestryId=''
			} else{
				this.getshoplist.recommend=''
				this.getshoplist.induestryId=ID
			}

			//this.getMarketDatalist()
		},
		Lessthan(index){
			var newList=[] 
			var lent=Math.ceil(this.len/2)
			newList[lent-1]=this.IndustryList[index]
			for (var x = 0; x <this.IndustryList.lengt; x++) {
				newList.push(this.IndustryList[i])
			}
			this.activeId = index
		},
		startMover (index, activeId) {//底部动画
			clearInterval(timer);
			var odiv = this.$refs.footerbtnbox
			var leftnudq = Number(odiv.style.left.substr(odiv.style.left, odiv.style.left.length-2))
			var leftnu = ''
			var _this = this
			timer = setInterval(function(){
				var speed = Number(odiv.style.left.substr(odiv.style.left, odiv.style.left.length-2))
				if(activeId > index){
					leftnu = leftnudq + (activeId-index)*200
				}else{
					leftnu = leftnudq - (index-activeId)*200
				}
				if(speed === leftnu){
					clearInterval(timer)
					_this.activeId = index
					return
				}
				if(activeId > index){
					odiv.style.left = speed+20+'px';
				}else{
					odiv.style.left = speed-20+'px';
				}
			},0);
		},
		jump (to) {
			if (this.$router) {
				this.$router.push(to)
			}
		},
		onSlideChangeEnd (e){
		}
	},
	computed: {
		Width() {
			return String(this.IndustryList.length*200*2+12)+"px";
		},
		Width2() {
			var le=0
			if(this.len<9){
				le=this.len*200
			}else{
				le=1800
			}
			return le+"px";
		},
		floorname() {//楼层
			return this.louc==='0'?'':this.floorList[this.louc-1].floorName;
		},
		floorid() {//楼层ID
			return this.louc==='0'?'':this.floorList[this.louc-1].id;
		}
	},
	mounted(){
		//this.getMarketData()
		// this.getMarketDatalist()
		this.IndustryList = [{a:'0'},{a:'1'},{a:'2'},{a:'3'},{a:'4'}]
		//this.IndustryList = [{a:'0'},{a:'1'},{a:'2'},{a:'3'},{a:'4'},{a:'5'},{a:'6'},{a:'7'},{a:'8'}]
		this.len=this.IndustryList.length
		this.len%2==1?this.activeId=Math.ceil(this.len/2)-1:this.activeId=Math.ceil(this.len/2)
		for(let i=0;i<this.len; i++){
			this.IndustryList.push(this.IndustryList[i])
		}
	},
	watch: {
	  IndustryList () {
		var footerbtnbox = this.$refs.footerbtnbox
		if (this.len>8) {
		  footerbtnbox.style.left="-"+String((this.len*200-1800)/2)+'px'
		  if(this.len%2!=1){
			  footerbtnbox.style.left="-"+String((this.len*200-1800)/2+100)+'px'
		  }
		}else {
		  footerbtnbox.style.left=0+'px'
		}
		footerbtnbox.style.left===''?this.wlen="0px":this.wlen=footerbtnbox.style.left
	  }
	},

}
</script>
<style>
	.business .el-select .el-input__inner{
		background: none!important;
		height: 54px!important;
		color: #fff;
		font-size: 48px;
		border: none!important;
		padding: 0 30px 0 4px;
		height: 66px!important;
	}
	/* 头部弹出框 */
   .business .el-select-dropdown{
		width: 25%;
		left: 50%!important;
		transform:translate(-50%,0);
		border: 1px #bfbfbf solid;
	}
	.business .el-select-dropdown__wrap {
		max-height: 370px;
	}
	.business .el-select-dropdown .popper__arrow{
		display: none!important;
	}
	.business .el-select-dropdown li{
		font-size: 24px!important;
		height: 52px;
		line-height: 52px;
		text-align: center;
		border-bottom: 1px #bfbfbf solid;
		color: #333;
		font-weight: normal;
	}
	.business .el-select-dropdown .el-select-dropdown__item.selected{
		color: #333!important;
		background: #f2f2f2;
	}
	/* 分页按钮 */
	.business .btn-prev, .business .btn-next{
		display: none;
	}
	.business .el-pagination.is-background .el-pager li:not(.disabled).active {
		background-color: #fff!important;
		color: #333!important;
	}
	.business .el-pager li{
		background-color: #c1bcc7!important;
	}
	.business .el-input__suffix{
		right: -10px !important;
	}
</style>
<style lang="scss" scoped>
	.el-header{
		height: 13%;
		background: rgba(0, 0, 0, 0.2);
		text-align: center;
		color: #fff;
		font-size: 48px;
		font-weight: bold;
		width: 100%;
		p{
			position: relative;
			z-index: 100;
			padding: 2.5% 0 0 14%;
			margin-right: 14%;
			.el-select{
				width: 260px;
			}
			.selectw{
				width: 330px;
			}
		}
	}
	.el-main{
		padding: 50px 48px 0 58px;
		overflow: hidden;
		height: 64.8%;
		.main_aside{
			padding-right: 1.9%;
			box-sizing: border-box;
			text-align: center;
			overflow: hidden;
			width: 19.5%;
			float: left;
			div{
				background: #fff;
				width: 100%;
				position: relative;
				.imgs{
					position: absolute;
					top: 10%;
					left: 16.5%;
					width: 67%;
					height: 67%;
					border: 1px solid rgb(207, 207, 207);
				}
			}
		}
		.main_box{
			padding: 0 0 0 20px;
			text-align: center;
			width: 80.5%;
			float: left;
			.main_top{
				overflow: hidden;
				height: 580px;
				.mainimg_box{
					float: left;
					color: #fff;
					div{
						margin: 10px;
						width: 340px;
						height: 200px;
						background: #fff;
						border-radius: 6px;
						padding: 10px;
						box-sizing: border-box;
						overflow: hidden;
						p{
							background: rgba(0, 0, 0, 0.6);
							position: relative;
							top: -30px;
							line-height: 30px;
							font-size: 16px;
						}
					}
					h3{
						margin: 20px 0 40px;
						font-size: 20px;
						font-weight: bold;
					}
				}
			}
		}
	}
	.el-footer{
		padding: 0;
		overflow: hidden;
		height: 22.2%;
		font-size: 40px;
	  width: 1820px;
    box-sizing: border-box;
		div{
			background: rgb(207, 204, 204);
			height: 160px;
			overflow: hidden;
			margin: 0 auto;
	  	div{
				height:100%;
				position: relative;
				.btn_box{
					width: 160px;
					height: 160px;
					background: rgba(255, 255, 255, 0.2);
					border-radius: 200px;
					position:relative;
					float: left;
					text-align: center;
					top:50%;
					transform:translate(0,-50%);
					margin: 0 20px;
					font-size: 20px;
					color: #fff;
					background: #000;
					img{
						margin-top: 10px;
					}
					p{
						line-height: 20px;
						position: absolute;
						bottom: 16%;
						width: 100%;
					}
				}
				.btn_box2{
					width: 180px;
					height: 180px;
					margin: 0 10px;
					font-size: 24px;
					background: linear-gradient(rgba(246, 209, 101, 0.6),rgba(253, 97, 81, 0.6));
				}
			}
	  }
}
</style>
