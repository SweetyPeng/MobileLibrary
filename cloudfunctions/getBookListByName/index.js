  // 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const rp = require('request-promise');
// 通过关键字查询图书
// api: 1、https://api.douban.com 2、http://t.yushu.im
const getBookListByName = (event, context) => {
  let res = rp('http://t.yushu.im/v2/book/search?q=' + event.name).then(
    data => {
      return data;
    }
  ).catch(
    err => {
      console.log(err);
    }
  )
  return res;
}
// 云函数入口函数
exports.main = async (event, context) => {
  return getBookListByName(event, context);
}