import { dbState } from '../config/db.js';
import mongoose from 'mongoose';

/**
 * @desc    API Health & Diagnostic Status
 * @route   GET /api/health
 * @access  Public
 */
export const getHealthStatus = (req, res) => {
  const isMongoReady = mongoose.connection.readyState === 1;

  res.status(200).json({
    status: 'online',
    service: 'Karthik Janardhan Naik Portfolio API',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || 'development',
    database: {
      connected: isMongoReady,
      status: isMongoReady ? 'connected' : 'fallback-or-disconnected',
      mode: dbState.mode,
      host: dbState.host || 'N/A',
      databaseName: dbState.databaseName || 'N/A',
      message: isMongoReady
        ? 'Connected to database'
        : 'Running in-memory fallback. Add MONGODB_URI in backend/.env to connect MongoDB Atlas.',
    },
  });
};
