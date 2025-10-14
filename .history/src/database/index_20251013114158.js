import mongoose  from 'mongoose';
let conn = false;

export const connectDB = async () => {
    if (conn){
        console.log('>>>>>Already connected to MongoDB<<<<<');
        return;
    };
    try{}
    await mongoose.connect(process.env.user_uri, {
        dbName: 'dsa-data'
    })
    .then(() => console.log('>>>>>Connected to MongoDB<<<<<'))
    .catch(err => console.log(err));
};

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
}, {collection: 'users'});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
