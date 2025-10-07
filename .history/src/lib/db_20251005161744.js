import { MongoClient, ServerApiVersion } from 'mongodb';

const DB_URI = "mongodb+srv://DSA:visualizer@data.bff1moy.mongodb.net/?retryWrites=true&w=majority&appName=Data"

if(!DB_URI){
    throw new Error('Mongo URI not fount');
}

const client = new MongoClient(process.env.DB_URI, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})