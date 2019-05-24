/* jshint esversion: 6 */
//let baseUrl = '/api'
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://'+ window.location.host + '' : '/api'
// 启动页
export const startup = {
  // 签到
  // signin: '/transfer/read/getBrowseTimes'
}
export default {
  home () { // 首页1
    return baseUrl + '/index/index/basic'
  },
  home2 () { // 首页品牌施工、优质建材
    return baseUrl + '/index/index/hotImage'
  },
  city () { // 城市接口
    return baseUrl + '/index/index/city'
  },
  news () { // 说说和公告详情
    return baseUrl + '/index/index/detail'
  },
  sgdlils () { // 施工管理列表
    return baseUrl + '/index/build/index'
  },
  sgddetail () { // 施工管理列表详情
    return baseUrl + '/index/build/detail'
  },
  dsfjglils () { // 登录第三方监管列表
    return baseUrl + '/index/supervise/index'
  },
  dsfjgdetail () { // 登录第三方监管列表详情
    return baseUrl + '/index/supervise/detail'
  },
  sjslils () { // 设计师列表
    return baseUrl + '/index/Plan/index'
  },
  sjsdetail () { // 设计师列表详情
    return baseUrl + '/index/Plan/detail'
  },
  zxgslils () { // 装修公司列表
    return baseUrl + '/index/decorate/index'
  },
  zxgsdetail () { // 装修公司列表详情
    return baseUrl + '/index/decorate/detail'
  },
  clgyslils () { // 材料供应商列表
    return baseUrl + '/index/stuff'
  },
  clgysdetail () { // 材料供应商列表详情
    return baseUrl + '/index/stuff/detail'
  },
  universityList () { // 装修大学堂
    return baseUrl + '/index/school/index'
  },
  universitydetails () { // 装修大学堂详情
    return baseUrl + '/index/school/detail'
  },
  inforadd () { // 投诉建议咨询
    return baseUrl + '/index/index/inforadd'
  },
  sjzx() { // 商家入驻
    return baseUrl+ '/index/content/index'
  },
  getCode() { //获取验证码
    return `${baseUrl}/index/Settled/sendsms`
  },
  step1next() { // 入驻第一步
    return `${baseUrl}/index/Settled/smstrue`
  },
  step2next() { // 入驻第二步
    return `${baseUrl}/index/Settled/userinfoadd`
  },
  uploadImg() { //图片上传
    return `${baseUrl}/index/Settled/uploadImg`
  },
  schedule() { //进度查询
    return `${baseUrl}/index/Settled/statusTrue`
  }


}
