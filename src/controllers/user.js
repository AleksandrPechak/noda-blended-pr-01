import { findUserByEmail, loginUser, createUser } from '../services/user.js';
import createHttpError from "http-errors";

export const registerUserController = async (req, res) => {
  const { email} = req.body;
  const user = await findUserByEmail(email);
  if (user) throw createHttpError(409, 'Email in use');

  const newUser = await createUser(req.body);
  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
    },
    token: newUser.token,
  });
};

export const loginUserController = async (req, res, next) => {
  const session = await loginUser(req.body);

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  res.status(200).json({
    data: {
      accessToken: session.accessToken,
    },
  });
};
