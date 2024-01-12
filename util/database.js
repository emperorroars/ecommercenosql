const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
let _db
const mongoConnect=(callback)=>{
  MongoClient.connect('mongodb+srv://daemosares:mongodaemos@sharpcluster.6z0p3fp.mongodb.net/')
.then(client=>{
  console.log("connected")
  callback()
  _db=client.db()
})
.catch(err=>{
  console.log(err)
  throw err
})

}
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;