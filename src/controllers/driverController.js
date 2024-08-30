import Driver from '../models/Driver.js';

// Create a new driver
export const createDriver = async (req, res) => {
  const { name, email, phone, vehicleType, status } = req.body;

  try {
    const newDriver = new Driver({
      name,
      email,
      phone,
      vehicleType,
      status
    });

    const savedDriver = await newDriver.save();
    res.status(201).json(savedDriver);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create driver', error: error.message });
  }
};

// Get a single driver by ID
export const getDriverById = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.json(driver);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve driver', error: error.message });
  }
};

// Get all drivers
export const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve drivers', error: error.message });
  }
};

// Update a driver
export const updateDriver = async (req, res) => {
  try {
    const updatedDriver = await Driver.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedDriver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    res.json(updatedDriver);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update driver', error: error.message });
  }
};

// Delete a driver
export const deleteDriver = async (req, res) => {
  try {
    const deletedDriver = await Driver.findByIdAndDelete(req.params.id);

    if (!deletedDriver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    res.json({ message: 'Driver deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete driver', error: error.message });
  }
};
