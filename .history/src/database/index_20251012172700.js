import mongoose from 'mongoose';

const uri = process.env.user_uri;

const connectDB = async () => {
    mongoose.connect(uri)
    .then(() => console.log('>>>>>Connected to MongoDB<<<<<'))
    .catch(err => console.log(err));
};

export default connectDB;
