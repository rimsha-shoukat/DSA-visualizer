import { mongoose } from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect(process.env.user_uri)
    .then(() => console.log('>>>>>Connected to MongoDB<<<<<'))
    .catch(err => console.log(err));
};

const userSchema = new mongoose.Schema({
    username: String,
    email: {type: String, unique: true},
    password: String,
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
