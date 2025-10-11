import mongoose from 'mongoose';

export const connectToDB = async () => {
    const connectionUrl = 'mongodb+srv://DSA:visualizer@data.bff1moy.mongodb.net/';
    mongoose.connect(connectionUrl)
    .then(()=> console.log(">>>>>Database connected<<<<<"))
    .catch((error)=> console.log(error))
}

const schema = new mongoose.Schema({
    name : String,
    email : {type:String, unique:true},
    password : String,
})

export const user = mongoose.models.user || mongoose.model('us')