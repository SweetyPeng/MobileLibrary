// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  traceUser: true,
  env: 'develop-a5b2d2'
})
const db = cloud.database({})

// 云函数入口函数
exports.main = async (event, context) => {

  return await db.collection('borrowMsg').count()
}