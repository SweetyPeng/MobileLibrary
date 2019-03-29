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
  const promise = await db.collection('userList').where({
    _openID: event.userInfo.openid
  }).get()
  if (promise.data.length == 0) {
    try {
      return await db.collection('userList').add({
        data: {
          nickName: event.nickName,
          avatarUrl: event.avatarUrl,
          _openID: event.userInfo.openid
        }
      })
    } catch (e) {
      console.error(e)
    }
  } else {
    return await db.collection('userList').update({
      data: {
        nickName: event.nickName,
        avatarUrl: event.avatarUrl,
        _openID: event.userInfo.openid
      }
    })
  }
}