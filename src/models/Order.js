import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
    default: () => {
      return Math.random().toString(36).substr(2, 6).toUpperCase(); // Generates a unique 5-6 character alphanumeric code
    }
  },
  customerName: {
    type: String,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    enum: ['pending', 'dispatched', 'delivered', 'canceled'],
    default: 'pending',
  },
  totalAmount: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
