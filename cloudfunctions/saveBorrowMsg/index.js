// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  traceUser: true,
  env: 'develop-a5b2d2'
})

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const hasBorrow = db.collection('borrowMsg').where({
    userID: event.userInfo.openId,
    bookID: event.bookID,
    bookOwnerID: event.bookOwnerID
  })
  if (hasBorrow.data.length == 0) {
    try {
      return await db.collection('borrowMsg').add({
        data: {
          userID: event.userInfo.openId,
          bookID: event.bookID,
          bookOwnerID: event.bookOwnerID,
          bookOwnerName: event.bookOwnerName,
          borrowMessge: event.borrowMessge,
          borrowTime: event.borrowTime
        }
      })
    } catch (e) {
      console.log(e)
    }
  } else {
    return {
      code: 99999,
      message: '您已经提交借阅请，耐心等待，请勿重复申请'
    }
  }

}
