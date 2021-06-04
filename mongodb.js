//crud

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error){
        return console.log('unable to connect to databse')
    }

    const db = client.db(databaseName)

db.collection('users').insertOne({
    _id: id,
    name: 'Turtle',
    age: 26
}, (error, result) => {
    if(error){
        return console.log('Unablle to insert user')
    }

    console.log(result.ops)
})

// db.collection('users').insertMany([
//     {
//         name:'Billy',
//         age: 23
//     }, {
//         name: 'Niggy',
//         age: 53
//     }
// ], (error, result)=> {
//     if(error){
//         return console.log('Unable to insert')
//     }

//     console.log(result.ops)
// })


// db.collection('tasks').insertMany([
//     {
//         description:'buy doge',
//         completed: true
//     }, {
//         description:'cook fish',
//         completed: false
//     }, {
//         description:'caydino poopo',
//         completed: false
//     }
// ], (error, result)=> {
//     if(error){
//         return console.log('Unable to insert tasks!')
//     }

//     console.log(result.ops)
// })

})