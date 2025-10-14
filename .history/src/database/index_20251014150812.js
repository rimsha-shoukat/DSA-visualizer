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
      // ObjectId is inherently cluster-based: Includes timestamp + machine ID for distribution
    },
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    // No custom Date fields – use _id.getTimestamp() for time-based queries if needed
  },
  {
    collection: 'users',  // Your collection
    // No timestamps: true – avoids Date validation errors
  }
);

// Indexes for performance (email unique, _id auto-indexed)
userSchema.index({ email: 1 });
userSchema.index({ _id: 1 });  // Explicit on _id (cluster-distributed)

export const User = mongoose.models.User || mongoose.model('User', userSchema);

export const connectDB = async () => {
  if (cached.conn) {
    console.log('>>>>>Already connected to MongoDB<<<<<');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      dbName: 'dsa-data',       // Your DB
      bufferCommands: false,    // For Next.js
      serverSelectionTimeoutMS: 30000,  // 30s timeout (number, not Date)
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose
      .connect(process.env.MONGODB_URI, opts)
      .then((mongooseVal) => {
        console.log('>>>>>Connected to MongoDB<<<<<');
        return mongooseVal;
      })
      .catch((err) => {
        console.error('Error while connecting to MongoDB:', err.message);
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
