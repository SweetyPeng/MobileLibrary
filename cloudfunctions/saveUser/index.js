// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  traceUser: true,
  env: 'develop-a5b2d2'
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try {
    let { avatarUrl, nickName } = event
    if (event._id) {
      return await db.collection('users').doc(wxContext.OPENDID).update({
        // data 传入需要局部更新的数据
        data: { avatar, nickName }
      })
    } else {
      return await db.collection('users').add({
        data: {
          avatarUrl, nickName,
          _openid: event.userInfo.openId
        }
      })
    }
  } catch(e) {
    console.error(e)
  }
}