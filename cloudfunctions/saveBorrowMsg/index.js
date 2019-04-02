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
  const hasBorrow = await db.collection('borrowMsg').where({
    userID: event.userInfo.openId,
    bookID: event.bookID,
    bookOwnerID: event.bookOwnerID
  }).get()
  if (hasBorrow.data.length == 0) {
    try {
      return await db.collection('borrowMsg').add({
        data: {
          userID: event.userInfo.openId,
          bookID: event.bookID,
          bookOwnerID: event.bookOwnerID,
          bookOwnerName: event.bookOwnerName,
          borrowMessage: event.borrowMessage,
          borrowTime: event.borrowTime
        }
      })
    } catch (e) {
      console.log(e)
    }
  } else {
    return {
      code: 99999,
      message: '您已经提交申请，请耐心等待'
    }
  }

}
