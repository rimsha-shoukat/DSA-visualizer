import mongoose from 'mongoose';

const uri = process.env.user_uri;

export const connectDB = async () => {
    mongoose.connect(uri)
    .then(() => console.log('>>>>>Connected to MongoDB<<<<<'))
    .catch(err => console.log(err));
};

const userSchema = new mongoose.Schema({
    username: String,
    email: {type: String, unique: true},
    password: String,
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
