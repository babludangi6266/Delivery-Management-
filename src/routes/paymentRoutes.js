import express from 'express';
import { calculateDriverPayment } from '../controllers/paymentController.js';

const router = express.Router();

// Calculate payment for a specific driver
router.get('/drivers/:id/payment', calculateDriverPayment);

export default router;
