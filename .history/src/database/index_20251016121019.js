import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const userSchema = new mongoose.Schema(
  {
    _id: { 
      type: mongoose.Schema.Types.ObjectId, 
      auto: true,
    },
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },
  },
  {
    collection: 'users', 
  }
);

userSchema.index({ _id: 1 });  

export const User = mongoose.models.User || mongoose.model('User', userSchema);

export const connectDB = async () => {
  if (cached.conn) {
    console.log('>>>>>Already connected to MongoDB<<<<<');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      dbName: 'dsa-data',       
      bufferCommands: false,   
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose
      .connect(process.env.MONGODB_URI, opts)
      .then((mongooseVal) => {
        console.log('>>>>>Connected to MongoDB<<<<<');
        return mongooseVal;
      })
      .catch((err) => {
        throw new Error(`Failed to connect to DB: ${err.message}`);
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};
