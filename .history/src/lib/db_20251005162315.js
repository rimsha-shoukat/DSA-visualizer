import { MongoClient, ServerApiVersion } from 'mongodb';

const DB_URI = "mongodb+srv://DSA:visualizer@data.bff1moy.mongodb.net/?retryWrites=true&w=majority&appName=Data"

if(!DB_URI){
    throw new Error('Mongo URI not fount');
}

const client = new MongoClient(DB_URI, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function getDB(dbName){
    try {
        await client.connect();
        console.log('>>>>Connected to DB<<<<');
        return client.db(dbName);
    }catch (err){
        console.log(err)
    }
}

export async function getCollection(collName){
    c
}