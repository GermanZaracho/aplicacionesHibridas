import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb+srv://project:486njikl@project.gobfbbu.mongodb.net')
const db = client.db("AH20232CP1")

client.connect()
    .then( async() => {
        console.log("connected")
        const data = await db.collection("peripherals").find().toArray()
        console.log(data)
    } )
    .catch( () => console.log("I didn't connect") )