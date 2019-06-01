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
  const userName = event.userName;
  const updateTime = new Date(Date.now() - -8 * 60 * 60 * 1000).toJSON()
        .substr(0, 16)
        .replace(/T/g, ' ');
  const isHolder = await db.collection('booksCollection').where({
    bookID: event.bookID,
    ownerID: event.ownerID,
    holderID: userID,
    holderName: userName
  }).get()
  const hasBorrow = await db.collection('borrowMsg').where({
    userID: userID,
    bookID: event.bookID,
    bookOwnerID: event.ownerID,
    bookHolderID: event.holderID
  }).get()
  if (isHolder.data) {
    return {
      code: 99999,
      message: '您已是该书持有者，请勿重复操作'
    }
  } else if (hasBorrow.data) {
    return await db.collection('booksCollection')
    .where({
      bookID: event.bookID,
      ownerID: event.ownerID,
      holderID: event.holderID
    })
    .update({
      data: {
        holderID: userID,
        holderName: userName,
        updateTime: updateTime
      }
    })
  } else if (!hasBorrow.data) {
    return {
      code: 99998,
      message: '您还没有申请借阅此书哦，请先去借阅'
    }
  } else {
    return {
      code: 99997,
      message: '好像出了点小问题，去反馈一下吧'
    }
  }
}
