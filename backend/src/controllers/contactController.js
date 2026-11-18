import ContactMessage from '../models/ContactMessage.js';
import { dbState } from '../config/db.js';
import mongoose from 'mongoose';

// In-memory message store for local fallback/testing if MongoDB Atlas is not yet connected
const inMemoryMessages = [];

/**
 * @desc    Submit a contact form message
 * @route   POST /api/contact
 * @access  Public
 */
export const submitContactMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const ipAddress =
      req.headers['x-forwarded-for']?.split(',')[0] ||
      req.socket?.remoteAddress ||
      'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';

    let savedRecord = null;
    let storageTarget = 'mongodb-atlas';

    // Check if real MongoDB connection is active
    if (mongoose.connection.readyState === 1) {
      const contactDoc = new ContactMessage({
        name,
        email,
        subject,
        message,
        ipAddress,
        userAgent,
      });

      savedRecord = await contactDoc.save();
      storageTarget = dbState.mode === 'atlas' ? 'MongoDB Atlas' : 'MongoDB Local';
    } else {
      // In-memory fallback
      storageTarget = 'in-memory-fallback';
      const fallbackDoc = {
        _id: 'local_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        name,
        email,
        subject,
        message,
        status: 'unread',
        ipAddress,
        userAgent,
        createdAt: new Date().toISOString(),
      };
      inMemoryMessages.unshift(fallbackDoc);
      savedRecord = fallbackDoc;
    }

    console.log(`[Contact Form] New message received from ${name} <${email}> via ${storageTarget}`);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received successfully. I will get back to you shortly.',
      data: {
        id: savedRecord._id,
        name: savedRecord.name,
        email: savedRecord.email,
        subject: savedRecord.subject,
        createdAt: savedRecord.createdAt,
      },
      storage: {
        target: storageTarget,
        dbConnected: mongoose.connection.readyState === 1,
      },
    });
  } catch (error) {
    console.error('Error submitting contact message:', error);
    next(error);
  }
};

/**
 * @desc    Get all contact messages (Admin / Developer review)
 * @route   GET /api/contact
 * @access  Public / Protected via query token
 */
export const getContactMessages = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const messages = await ContactMessage.find().sort({ createdAt: -1 }).limit(100);
      return res.status(200).json({
        success: true,
        count: messages.length,
        storage: dbState.mode === 'atlas' ? 'MongoDB Atlas' : 'MongoDB Local',
        data: messages,
      });
    } else {
      return res.status(200).json({
        success: true,
        count: inMemoryMessages.length,
        storage: 'in-memory-fallback',
        note: 'Messages stored in-memory. Connect MongoDB Atlas to persist permanently.',
        data: inMemoryMessages,
      });
    }
  } catch (error) {
    next(error);
  }
};
