import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      maxlength: [20, 'password can not be more than 20 charecter'],
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
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

// Document middleware
// pre save middleware/hook()- will work on create(), save()
userSchema.pre('save', async function (next) {
  const user = this;
  // const user.password =
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// post save middleware-
// Set empty string after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<TUser>('User', userSchema);
