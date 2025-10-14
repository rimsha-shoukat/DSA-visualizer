import mongoose from 'mongoose';

// Global caching for Next.js (prevents reconnect loops in dev mode)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// User Schema (aligned to signup: 'name' instead of 'username', 'password' instead of 'pass')
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },
  },
  {
    collection: 'users',  // Your specified collection
    timestamps: true,     // Auto-adds createdAt/updatedAt
  }
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);

export const connectDB = async () => {
  if (cached.conn) {
    console.log('>>>>>Already connected to MongoDB<<<<<');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      dbName: 'dsa-data',       // Your database
      bufferCommands: false,    // For Next.js/serverless
      serverSelectionTimeoutMS: 30000,  // 30s timeout for Atlas
      socketTimeoutMS: 45000,   // Socket idle timeout
    };

    cached.promise = mongoose
      .connect(process.env.MONGODB_URI, opts)  // Uses MONGODB_URI (fixed from user_uri)
      .then((mongooseVal) => {
        console.log('>>>>>Connected to MongoDB<<<<<');
        return mongooseVal;
      })
      .catch((err) => {
        console.error('Error while connecting to MongoDB:', err.message);  // Detailed log (e.g., "Authentication failed")
        throw new Error(`Failed to connect to DB: ${err.message}`);  // Throws for signup catch
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
