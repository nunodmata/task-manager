//crud

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error){
        return console.log('unable to connect to databse')
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({ 
        description : "buy doge"}).then ((result) =>{
            console.log(result)
        }).catch((error) =>{
            console.log(error)
        })
     })