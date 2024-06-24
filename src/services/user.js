import createHttpError from 'http-errors';
import { UserCollection } from '../db/user.js';
import bcrypt from 'bcrypt';

export const registerUser = async (userData) => {
  const user = await UserCollection.findOne({ email: userData.email });
  if (user) throw createHttpError(409, 'Email in use');
  const cryptPassword = await bcrypt.hash(userData.password, 10);
  return await UserCollection.create({
    ...userData,
    password: cryptPassword,
  });
};
