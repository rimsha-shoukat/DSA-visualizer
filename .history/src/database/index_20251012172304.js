import mongoose from 'mongoose;
import dotenv from 'dotenv';

dotenv.config();
const uri = process.env.user_uri;

export const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
};
