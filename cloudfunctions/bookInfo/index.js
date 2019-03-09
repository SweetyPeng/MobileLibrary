// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
var rp = require('request-promise');
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  var res = rp('https://api.douban.com/v2/book/isbn/' + event.isbn).then(
    html => {
      return html;
    }
  ).catch(
    err => {
      console.log(err);
    }
  );
  return res;
}