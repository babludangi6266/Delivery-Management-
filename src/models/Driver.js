import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
  driverId: {
    type: String,
    required: true,
    unique: true,
    default: () => {
      return Math.random().toString(36).substr(2, 6).toUpperCase(); // Generates a unique 5-6 character alphanumeric code
    }
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
}, { timestamps: true });

const Driver = mongoose.model('Driver', driverSchema);

export default Driver;
