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
      let bookOwners = [];
      let owner = {
        ownerID: event.userInfo.openid
      }
      bookOwners.unshift(owner);
      return await db.collection('bookList').add({
        data: {
          bookID: event.bookId,
          bookName: event.bookName,
          bookOwners: bookOwners
        }
      })
    } catch (e) {
      console.error(e)
    }
  } else {
    return await db.collection('bookList').where({
      bookID: event.bookId
    }).update({
      data: {
        bookOwners: bookOwners
      }
    })
  }
}