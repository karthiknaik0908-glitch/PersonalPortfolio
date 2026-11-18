import mongoose from 'mongoose';

export const dbState = {
  isConnected: false,
  mode: 'disconnected', // 'atlas', 'local', or 'in-memory-fallback'
  host: null,
  databaseName: null,
  error: null,
};

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  // Check if URI is default placeholder or missing
  if (!uri || uri.includes('<username>') || uri.includes('<password>')) {
    console.warn('\n======================================================');
    console.warn('⚠️  MONGODB_URI contains placeholder or is missing.');
    console.warn('ℹ️  Operating in in-memory storage fallback mode.');
    console.warn('👉 To connect MongoDB Atlas:');
    console.warn('   1. Create a cluster on https://cloud.mongodb.com');
    console.warn('   2. Create a database user & whitelist IP 0.0.0.0/0');
    console.warn('   3. Put your real URI into backend/.env (MONGODB_URI)');
    console.warn('======================================================\n');
    dbState.isConnected = false;
    dbState.mode = 'in-memory-fallback';
    dbState.error = 'MONGODB_URI is using placeholder values. Messages will be stored in-memory during testing.';
    return;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });

    dbState.isConnected = true;
    dbState.mode = uri.includes('mongodb+srv') ? 'atlas' : 'local';
    dbState.host = conn.connection.host;
    dbState.databaseName = conn.connection.name;
    dbState.error = null;

    console.log(`✅ MongoDB Connected successfully [${dbState.mode.toUpperCase()}]: ${dbState.host}/${dbState.databaseName}`);
  } catch (err) {
    dbState.isConnected = false;
    dbState.mode = 'in-memory-fallback';
    dbState.error = err.message;
    console.error(`❌ MongoDB Connection Error: ${err.message}`);
    console.warn('ℹ️  Fallen back to in-memory message storage so the server stays operational.\n');
  }
};

mongoose.connection.on('disconnected', () => {
  dbState.isConnected = false;
  console.warn('⚠️  MongoDB disconnected.');
});

mongoose.connection.on('reconnected', () => {
  dbState.isConnected = true;
  console.log('🔄 MongoDB reconnected.');
});
