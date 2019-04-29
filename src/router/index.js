import Vue from 'vue'
import Router from 'vue-router'
const index = resolve => require(['@/pages'], resolve)
const Home = resolve => require(['@/pages/homepag'], resolve)
//公告和说说详情
const news = resolve => require(['@/pages/homepag/newstext'], resolve)
// 施工队
const build = resolve => require(['@/pages/buildList'], resolve)
const builddetails = resolve => require(['@/pages/buildList/builddetails'], resolve)
//第三方管理
const supervise = resolve => require(['@/pages/superviseList'], resolve)
const supervisedetails = resolve => require(['@/pages/superviseList/supervisedetails'], resolve)
//设计师
const designer = resolve => require(['@/pages/designerList'], resolve)
const designerdetails = resolve => require(['@/pages/designerList/designerdetails'], resolve)
//装修大课堂
const university = resolve => require(['@/pages/universitytList'], resolve)
const universityDetails = resolve => require(['@/pages/universitytList/universitydatelid'], resolve)
// 装修公司
const companyList = resolve => require(['@/pages/companyList'], resolve)
const companydetails = resolve => require(['@/pages/companyList/companydetails'], resolve)

//材料供应商
const supplier = resolve => require(['@/pages/supplier'], resolve)
const supplierdetails = resolve => require(['@/pages/supplier/supplierdetails'], resolve)

//商家入驻
const cooperation = resolve => require(['@/pages/cooperation'], resolve)

//手机端首页
const mIndex = resolve => require(['@/mpages'], resolve)
const mHome = resolve => require(['@/mpages/home'], resolve)
//公告和说说详情
const mnews = resolve => require(['@/mpages/home/newstext'], resolve)

// 移动端施工队
const mbuild = resolve => require(['@/mpages/buildList'], resolve)
const mbuilddetails = resolve => require(['@/mpages/buildList/builddetails'], resolve)

//第三方管理
const msupervise = resolve => require(['@/mpages/superviseList'], resolve)
const msupervisedetails = resolve => require(['@/mpages/superviseList/supervisedetails'], resolve)
//设计师
const mdesigner = resolve => require(['@/mpages/designerList'], resolve)
const mdesignerdetails = resolve => require(['@/mpages/designerList/designerdetails'], resolve)
//装修大课堂
const muniversity = resolve => require(['@/mpages/universitytList'], resolve)
const muniversityDetails = resolve => require(['@/mpages/universitytList/universitydatelid'], resolve)
// 装修公司
const mcompanyList = resolve => require(['@/mpages/companyList'], resolve)
const mcompanydetails = resolve => require(['@/mpages/companyList/companydetails'], resolve)

//材料供应商
const msupplier = resolve => require(['@/mpages/supplier'], resolve)
const msupplierdetails = resolve => require(['@/mpages/supplier/supplierdetails'], resolve)

//商家入驻
const mcooperation = resolve => require(['@/mpages/cooperation'], resolve)

// 手机定位页面
const positionpage = resolve => require(['@/mpages/position'], resolve)

Vue.use(Router)
const isMoblie = (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
let router = null;
if(isMoblie){
  router = new Router({
    routes: [
      {
        path: '/',
        name: 'mIndex',
        component: mIndex,
        redirect: 'Home',
        children: [
          { // 移动端首页
            path: 'Home',
            name: 'mHome',
            component: mHome
          },
          { // 新闻页
            path: 'news',
            name: 'mnews',
            component: mnews
          },
          { // 施工队
            path: 'build',
            name: 'mbuild',
            component: mbuild
          },
          { // 施工队列表详情
            path: 'builddetails',
            name: 'mbuilddetails',
            component: mbuilddetails
          },
          { // 第三方管理列表
            path: 'supervise',
            name: 'msupervise',
            component: msupervise
          },
          { // 第三方管理列表详情
            path: 'supervisedetails',
            name: 'msupervisedetails',
            component: msupervisedetails
          },
          { // 设计师列表
            path: 'designer',
            name: 'mdesigner',
            component: mdesigner
          },
          { // 设计师列表详情
            path: 'designerdetails',
            name: 'mdesignerdetails',
            component: mdesignerdetails
          },
          { // 装修大课堂
            path: 'university',
            name: 'muniversity',
            component: muniversity
          },
          { // 装修大课堂详情
            path: 'universityDetails',
            name: 'muniversityDetails',
            component: muniversityDetails
          },
          { // 材料供应商列表
            path: 'supplier',
            name: 'msupplier',
            component: msupplier
          },
          { // 材料供应商列表详情
            path: 'supplierdetails',
            name: 'msupplierdetails',
            component: msupplierdetails
          },
          { // 商家入驻
            path: 'cooperation',
            name: 'mcooperation',
            component: mcooperation
          },
          { // 装修公司
            path: 'companyList',
            name: 'mcompanyList',
            component: mcompanyList
          },
          { // 装修公司详情
            path: 'companydetails',
            name: 'mcompanydetails',
            component: mcompanydetails
          },
          { // 城市定位
            path: 'positionpage',
            name: 'positionpage',
            component: positionpage
          }
        ]
      }
    ]
  })
}else{
  router = new Router({
    routes: [
      {
        path: '/',
        name: 'index',
        component: index,
        redirect:'Home',
        children: [
          { // 首页
            path: 'Home',
            name: 'Home',
            meta: {
              toTOP: 'no'
            },
            component: Home
          },
          { // 新闻页
            path: 'news',
            name: 'news',
            component: news
          },
          { // 施工队列表
            path: 'build',
            name: 'build',
            component: build
          },
          { // 施工队列表详情
            path: 'builddetails',
            name: 'builddetails',
            component: builddetails
          },
          { // 第三方管理列表
            path: 'supervise',
            name: 'supervise',
            component: supervise
          },
          { // 第三方管理列表详情
            path: 'supervisedetails',
            name: 'supervisedetails',
            component: supervisedetails
          },
          { // 设计师列表
            path: 'designer',
            name: 'designer',
            component: designer
          },
          { // 设计师列表详情
            path: 'designerdetails',
            name: 'designerdetails',
            component: designerdetails
          },
          { // 装修大课堂
            path: 'university',
            name: 'university',
            component: university
          },
          { // 装修大课堂详情
            path: 'universityDetails',
            name: 'universityDetails',
            component: universityDetails
          },
          { // 材料供应商列表
            path: 'supplier',
            name: 'supplier',
            component: supplier
          },
          { // 材料供应商列表详情
            path: 'supplierdetails',
            name: 'supplierdetails',
            component: supplierdetails
          },
          { // 商家入驻
            path: 'cooperation',
            name: 'cooperation',
            component: cooperation
          },
          { // 装修公司
            path: 'companyList',
            name: 'companyList',
            component: companyList
          },
          { // 装修公司详情
            path: 'companydetails',
            name: 'companydetails',
            component: companydetails
          },
        ]
      }
    ]
  })
}
export default router

// 时间格式化
Date.prototype.Format = function (fmt) { 
  var o = {
      "M+": this.getMonth() + 1, //月份 
      "d+": this.getDate(), //日 
      "h+": this.getHours(), //小时 
      "m+": this.getMinutes(), //分 
      "s+": this.getSeconds(), //秒 
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
      "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}