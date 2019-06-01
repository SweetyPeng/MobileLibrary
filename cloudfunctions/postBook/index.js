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
      const postTime = new Date(Date.now() - -8 * 60 * 60 * 1000).toJSON()
        .substr(0, 16)
        .replace(/-/g, '/')
        .replace(/T/g, ' ');
      let bookOwners = [];
      let {
        ownerName
      } = event.owner;
      const owner = {
        ownerName: ownerName,
        ownerID: event.userInfo.openId,
        ownerPostTime: postTime 
      };
      bookOwners.unshift(owner);
      return await db.collection('bookList').add({
        data: {
          bookID: event.bookID,
          bookName: event.bookName,
          bookAuthor: event.bookAuthor,
          bookPublisher: event.bookPublisher,
          bookPubdate: event.bookPubdate,
          bookSummary: event.bookSummary,
          bookImages: event.bookImages,
          bookOwners: bookOwners,
          postTime: postTime
        }
      })
    } catch (e) {
      console.error(e)
    }
  } else {
    const postTime = new Date(Date.now() - -8 * 60 * 60 * 1000).toJSON()
        .substr(0, 16)
        .replace(/-/g, '/')
        .replace(/T/g, ' ');
    let {
      ownerName
    } = event.owner;
    const newowner = {
      ownerName: ownerName,
      ownerID: event.userInfo.openId,
      ownerPostTime: postTime
    };
    const resp = await db.collection('bookList').doc(event.bookId).get();
    const bookOwners = resp.data.bookOwners || [];
    bookOwners.unshift(newowner);
    console.log('bookOwners===', bookOwners);
    return await db.collection('bookList').where({
      bookID: event.bookID
    }).update({
      data: {
        bookOwners: bookOwners,
        postTime: postTime
      }
    })
  }
}
