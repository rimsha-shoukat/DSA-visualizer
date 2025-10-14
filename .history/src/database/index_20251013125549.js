import mongoose from 'mongoose';

// Global caching for Next.js (prevents reconnects in dev/hot-reload)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// User Schema (aligned with your signup code: 'name' instead of 'username', 'password' instead of 'pass')
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },  // Changed from 'username' to 'name'
    email: { type: String, unique: true, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },  // Changed from 'pass' to 'password' (hashed)
  },
  { 
    collection: 'users',  // Keep your custom collection name
    timestamps: true,     // Optional: Adds createdAt/updatedAt
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
      dbName: 'dsa-data',        // Your DB name
      bufferCommands: false,     // Disable buffering for Next.js/serverless
      // Add more if needed: e.g., { useNewUrlParser: true, useUnifiedTopology: true } for older Mongoose
    };

    cached.promise = mongoose
      .connect(process.env.MONGODB_URI, opts)  // Fixed: Use MONGODB_URI
      .then((mongooseVal) => {
        console.log('>>>>>Connected to MongoDB<<<<<');
        return mongooseVal;
      })
      .catch((err) => {
        console.error('Error while connecting to MongoDB:', err.message);  // Detailed error (e.g., "Authentication failed")
        throw new Error(`Failed to connect to DB: ${err.message}`);  // More informative throw
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
