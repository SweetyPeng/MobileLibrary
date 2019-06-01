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
  let hasUser = await db.collection('userList').where({
    _openID: event.userInfo.openId
  }).get()
    if (hasUser.data.length > 0) {
    try {
      let result = await db.collection('userList')
      .where({
        _openID: event.userInfo.openId
      })
      .update({
        data: {
          nickName: event.nickName,
          avatarUrl: event.avatarUrl,
        }
      })
      result = Object.assign(result, {
        openId: event.userInfo.openId
      })
      return result;
    } catch (e) {
      console.error(e)
    }
  } else {
    let result = await db.collection('userList')
    .add({
        data: {
          nickName: event.nickName,
          avatarUrl: event.avatarUrl,
          _openID: event.userInfo.openId
        }
      })
    result = Object.assign(result, {
      openId: event.userInfo.openId
    })
    return result;
  }
}
