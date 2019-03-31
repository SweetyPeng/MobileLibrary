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
  const promise = await db.collection('bookList').where({
    bookID: event.bookID
  }).get()
  if (promise.data.length == 0) {
    try {
      let bookOwners = [];
      let {
        ownerName
      } = event.owner;
      const owner = {
        ownerName: ownerName,
        ownerID: event.userInfo.openId
      };
      bookOwners.unshift(owner);
      return await db.collection('bookList').add({
        data: {
          bookID: event.bookID,
          bookName: event.bookName,
          bookOwners: bookOwners
        }
      })
    } catch (e) {
      console.error(e)
    }
  } else {
    let {
      ownerName
    } = event.owner;
    const owner = {
      ownerName: ownerName,
      ownerID: event.userInfo.openId
    };
    const resp = await db.collection('bookList').doc(event.bookId).get();
    const bookOwners = resp.data.bookOwners || [];
    bookOwners.unshift(owner);
    console.log('bookOwners===', bookOwners);
    return await db.collection('bookList').where({
      bookID: event.bookID
    }).update({
      data: {
        bookOwners: bookOwners
      }
    })
  }
}
