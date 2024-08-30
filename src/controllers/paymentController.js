import Driver from '../models/Driver.js';
import Route from '../models/Route.js';

// Payment calculation criteria
const PAYMENT_PER_ORDER = 10; // Example: $10 per completed order
const PAYMENT_PER_HOUR = 5;   // Example: $5 per hour online
const PAYMENT_PER_KM = 1;     // Example: $1 per km traveled

// Calculate driver payment
export const calculateDriverPayment = async (req, res) => {
  try {
    const driverId = req.params.id;

    // Find the driver by ID
    const driver = await Driver.findById(driverId);
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    // Calculate number of completed orders
    const completedOrders = await Route.countDocuments({
      driverId,
      status: 'completed'
    });

    // Calculate total time spent online (in hours)
    const totalTimeOnline = calculateTotalTimeOnline(driver); // Implement this function

    // Calculate total distance traveled (in km)
    const totalDistanceTraveled = calculateTotalDistance(driver); // Implement this function

    // Calculate total payment
    const totalPayment =
      completedOrders * PAYMENT_PER_ORDER +
      totalTimeOnline * PAYMENT_PER_HOUR +
      totalDistanceTraveled * PAYMENT_PER_KM;

    res.json({
      driverId: driver._id,
      name: driver.name,
      completedOrders,
      totalTimeOnline,
      totalDistanceTraveled,
      totalPayment,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to calculate payment', error: error.message });
  }
};

// Dummy function to calculate total time online (in hours)
const calculateTotalTimeOnline = (driver) => {
  // Placeholder: Implement logic to calculate the actual time spent online
  return 10; // Example: 10 hours
};

// Dummy function to calculate total distance traveled (in km)
const calculateTotalDistance = (driver) => {
  // Placeholder: Implement logic to calculate the actual distance traveled
  return 100; // Example: 100 km
};
