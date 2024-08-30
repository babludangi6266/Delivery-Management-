import express from 'express';
import {
  createDriver,
  getDriverById,
  getAllDrivers,
  updateDriver,
  deleteDriver
} from '../controllers/driverController.js';

const router = express.Router();

// Create a new driver
router.post('/', createDriver);

// Get a single driver by ID
router.get('/:id', getDriverById);

// Get all drivers
router.get('/', getAllDrivers);

// Update a driver
router.put('/:id', updateDriver);

// Delete a driver
router.delete('/:id', deleteDriver);

export default router;
