const MongoClient = require('mongodb').MongoClient
const username = "admin"
const password = "12345678"
const dbname = "workshophy"
const url = 'mongodb://'+username+':'+password+'@203.154.59.66:27017/'+dbname

const ObjectId = require('mongodb').ObjectId

MongoClient.connect(url , { useUnifiedTopology: true , useNewUrlParser:true} , (err,client)=>{
    if(err) throw err
    console.log('DB connect !!')
    const db = client.db(dbname)

    // insert
    // db.collection('students').insertOne({
    //     firstname:'chaloemphong',
    //     lastname:'nima'
    // }, (err , result)=>{
    //     if(err) throw err
    //     console.log('insert success')
    //     client.close()
    // })

    // update
    // db.collection('students').updateOne({
    //     _id:ObjectId("5daead74c62b83152843d16e")
    // }, {$set:{firstname:'node',skill:'node js '
    // }},(err,result)=>{
    //     if(err) throw err
    //     console.log('update success')
    //     client.close()
    // })


    // delete
    // db.collection('students').deleteOne({
    //     _id:ObjectId("5daead8af5ac4b0344cdd7f7")
    // },(err,result)=>{
    //     if(err) throw err
    //     console.log('delete success')
    //     client.close()
    // })

    db.collection('students').insertMany([
        {
            firstname: 'Tony',
            lastname:'Stark'
        },
        {
            firstname: 'Lindis',
            lastname:'Rouke'
        }
    ],(err , result)=>{
        if(err) throw err
        console.log('insert many success')
        client.close()
    })


    client.close()
})

