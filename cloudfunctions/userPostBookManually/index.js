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
  try {
    const status = event.status || true;
    const postTime = new Date(Date.now() - -8 * 60 * 60 * 1000).toJSON()
      .substr(0, 16)
      .replace(/T/g, ' ');
    return await db.collection('booksCollection').add({
      data: {
        method: event.method,
        bookID: event.bookID,
        bookName: event.bookName,
        bookImages: event.bookImages,
        ownerName: event.ownerName,
        ownerID: event.ownerID,
        holderName: event.holderName,
        holderID: event.holderID,
        postTime: postTime,
        bookStatus: status
      }
    })
  } catch (e) {
    console.log(e)
  }
}
