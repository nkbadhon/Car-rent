import { Types } from 'mongoose';

export type TBData = {
  userId: string;
  carId: string;
  date: string;
  startTime: string;
};

export type TBooking = {
  date: Date;
  user: Types.ObjectId;
  car: Types.ObjectId;
  startTime: string;
  endTime: string;
  totalCost: string;
};
