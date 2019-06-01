// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  traceUser: true,
  env: 'develop-a5b2d2'
})
const db = cloud.database({})

// 云函数入口函数
exports.main = async (event, context) => {
  const userID = event.userInfo.openId;
  if (event.ownerID == userID && event.holderID == userID) {
    return await db.collection('booksCollection')
      .where({
        bookID: event.bookID,
        ownerID: event.ownerID,
        holderID: event.holderID
      })
      .remove()
  } else {
    return {
      code: 99999,
      message: '您不是本书的发布者和持有者，无法删除'
    }
  }

}
