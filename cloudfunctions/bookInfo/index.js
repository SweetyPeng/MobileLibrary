// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const rp = require('request-promise');
const getBookInfo = (event, context) => {
  if (event.isbn) {
    let res = rp('http://t.yushu.im/v2/book/isbn/' + event.isbn).then(
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
  if (event.id) {
    let res = rp('http://t.yushu.im/v2/book/id/' + event.id).then(
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
}
// 云函数入口函数
exports.main = async (event, context) => {
  return getBookInfo(event, context);
}