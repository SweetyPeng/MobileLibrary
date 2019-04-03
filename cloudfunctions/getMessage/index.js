// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  traceUser: true,
  env: 'develop-a5b2d2'
})
const db = cloud.database({})

// 云函数入口函数
exports.main = async (event, context) => {
  const isDetail = Boolean(event.isDetail)
  if (isDetail) {
    return await db.collection('borrowMsg')
      .where({
        _id: event._id
      })
      .get()
  } else {
    return await db.collection('borrowMsg')
      .field({
        bookOwnerID: true,
        borrowMessage: true,
        borrowTime: true,
        bookName: true,
        userName: true
      })
      .where({
        bookOwnerID: event.userInfo.openId
      })
      .orderBy('borrowTime', 'desc')
      .get()
  }
}
