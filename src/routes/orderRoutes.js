import express from 'express';
import {
  createOrder,
  getOrderById,
  getAllOrders,
  updateOrder,
  deleteOrder
} from '../controllers/orderController.js';

const router = express.Router();

// Create a new order
router.post('/', createOrder);

// Get a single order by ID
router.get('/:id', getOrderById);

// Get all orders
router.get('/', getAllOrders);

// Update an order
router.put('/:id', updateOrder);

// Delete an order
router.delete('/:id', deleteOrder);

export default router;
