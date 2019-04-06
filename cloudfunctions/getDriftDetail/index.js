// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  traceUser: true,
  env: 'develop-a5b2d2'
})
const db = cloud.database({})

// 云函数入口函数
exports.main = async (event, context) => {
  let resp = await db.collection('booksCollection')
    .where({
      _id: event._id
    })
    .get();
  const detailInfo = resp.data[0] || {};

  let res = await db.collection('borrowMsg')
    .field({
      borrowTime: true,
      userName: true
    })
    .where({
      bookID: detailInfo.bookID,
      bookHolderID: detailInfo.bookHolderID
    })
    .orderBy('borrowTime', 'desc')
    .get();
  let data = res.data;
  let total = data.length;
  return {
    count: total,
    chainData: data,
    detailData: detailInfo,
  }
}
