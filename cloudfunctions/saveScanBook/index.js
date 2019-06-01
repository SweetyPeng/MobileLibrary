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
  const hasBook = await db.collection('bookLibrary').where({
    isbn: event.isbn
  }).get()
  if (!hasBook.data) {
    try {
      return await db.collection('bookLibrary').add({
        data: {
          id_scan: event.id_scan,
          isbn: event.isbn,
          author: event.author,
          title: event.title,
          pubdate: event.pubdate,
          publisher: event.publisher,
          image: event.image,
          image_large: event.images.large,
          summary: event.summary
        }
      })
    } catch (e) {
      console.log(e)
    }
  } else {
    try {
      return await db.collection('bookLibrary')
        .where({
          isbn: event.isbn
        })
        .update({
          data: {
            id_scan: event.id_scan,
            isbn: event.isbn,
            author: event.author,
            title: event.title,
            pubdate: event.pubdate,
            publisher: event.publisher,
            image: event.image,
            image_large: event.image_large,
            summary: event.summary
          }
        })
    } catch (e) {
      console.log(e)
    }
  }
}
