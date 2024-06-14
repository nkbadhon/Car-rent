import mongoose from 'mongoose';
import { TBooking } from './booking.interface';
import { Schema } from 'mongoose';

const bookingSchema = new mongoose.Schema<TBooking>(
  {
    date: {
      type: Date,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'User',
    },
    car: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'Car',
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      default: null,
    },
    totalCost: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export const Booking = mongoose.model<TBooking>('Booking', bookingSchema);
