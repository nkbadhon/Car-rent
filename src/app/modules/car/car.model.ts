import { Schema, model } from 'mongoose';
import { TCar } from './car.interface';

const carSchema = new Schema<TCar>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    color: {
      type: String,
    },
    isElectric: {
      type: Boolean,
      required: true,
    },
    status: {
      type: String,
      enum: ['available', 'booked'],
      default: 'available',
    },
    features: {
      type: [String],
    },
    pricePerHour: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Car = model<TCar>('Car', carSchema);
