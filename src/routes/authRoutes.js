import express from 'express';
import { registerUser, authUser } from '../controllers/authController.js';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', authUser);

export default router;
