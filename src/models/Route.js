import mongoose from 'mongoose';

const stepSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const routeSchema = new mongoose.Schema({
  routeId: {
    type: String,
    required: true,
    unique: true,
    default: () => {
      return Math.random().toString(36).substr(2, 6).toUpperCase(); 
    }
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  steps: [stepSchema],
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
}, { timestamps: true });

const Route = mongoose.model('Route', routeSchema);

export default Route;
