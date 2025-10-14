import mongoose  from 'mongoose';
let isConn = false;

export const connectDB = async () => {
    if (isConn){
        console.log('>>>>>Already connected to MongoDB<<<<<');
        return mongoose.connection;
    };
    try{
        const conn = await mongoose.connect(process.env.user_uri, {
            dbName: 'dsa-data',
        })
            console.log('>>>>>Connected to MongoDB<<<<<');
            isConn = true;
            re
    }catch(err){
        console.log('Error while connecting to MongoDB');
        throw new Error('Failed to connect to DB')
    }
};

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
}, {collection: 'users'});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
