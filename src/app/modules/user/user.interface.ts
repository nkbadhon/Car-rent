import { Model, Document } from 'mongoose';

export interface TUser {
  name: string;
  email: string;
  role: 'admin' | 'user';
  password: string;
  phone: string;
  address: string;
  isDeleted: boolean;
}

export interface UserModel extends Model<TUser> {
  isUserExist(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
