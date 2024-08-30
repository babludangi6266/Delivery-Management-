import express from 'express';
import {
  createRoute,
  getRouteById,
  getAllRoutes,
  updateRoute,
  deleteRoute
} from '../controllers/routeController.js';

const router = express.Router();

// Create a new route
router.post('/', createRoute);

// Get a single route by ID
router.get('/:id', getRouteById);

// Get all routes
router.get('/', getAllRoutes);

// Update a route
router.put('/:id', updateRoute);

// Delete a route
router.delete('/:id', deleteRoute);

export default router;
