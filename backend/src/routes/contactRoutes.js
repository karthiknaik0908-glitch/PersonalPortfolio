import express from 'express';
import {
  submitContactMessage,
  getContactMessages,
} from '../controllers/contactController.js';
import {
  validateContactRules,
  handleValidationErrors,
} from '../middleware/validateContact.js';

const router = express.Router();

router
  .route('/')
  .post(validateContactRules, handleValidationErrors, submitContactMessage)
  .get(getContactMessages);

export default router;
