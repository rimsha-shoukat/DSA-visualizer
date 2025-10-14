import mongoose from 'mongoose';

const uri = process.env.user_uri;

export const connectDB = async () => {
    mongoose.connect(uri)
    .then(() => console.log('>>>>>Connected to MongoDB<<<<<'))
    .catch(err => console.log(err));
};

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    date: { type: Date, default: Date.now }
});

export const User = mmongoose.model('User', userSchema);
