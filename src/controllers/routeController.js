import Route from '../models/Route.js';
import Order from '../models/Order.js';

// Create a new route
export const createRoute = async (req, res) => {
  const { orderId, steps, status } = req.body;

  try {
    const orderExists = await Order.findById(orderId);
    if (!orderExists) {
      return res.status(404).json({ message: 'Order not found' });
    }

    const newRoute = new Route({
      orderId,
      steps,
      status
    });

    const savedRoute = await newRoute.save();
    res.status(201).json(savedRoute);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create route', error: error.message });
  }
};

// Get a single route by ID
export const getRouteById = async (req, res) => {
  try {
    const route = await Route.findById(req.params.id).populate('orderId');
    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }
    res.json(route);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve route', error: error.message });
  }
};

// Get all routes
export const getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find().populate('orderId');
    res.json(routes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve routes', error: error.message });
  }
};

// Update a route
export const updateRoute = async (req, res) => {
  try {
    const updatedRoute = await Route.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedRoute) {
      return res.status(404).json({ message: 'Route not found' });
    }

    res.json(updatedRoute);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update route', error: error.message });
  }
};

// Delete a route
export const deleteRoute = async (req, res) => {
  try {
    const deletedRoute = await Route.findByIdAndDelete(req.params.id);

    if (!deletedRoute) {
      return res.status(404).json({ message: 'Route not found' });
    }

    res.json({ message: 'Route deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete route', error: error.message });
  }
};
