import mongoose from 'mongoose';

const connectToDB = async () => {
    const connectionUrl = 'mongodb+srv://DSA:visualizer@data.bff1moy.mongodb.net/';
    mongoose.connect(connectionUrl)
    .then(()=> console.log(">>>>>Database connected<<<<<"))
    .catch((error)=> console.log(error))
}
         
// export default connectToDB;.lllllllllllllll-