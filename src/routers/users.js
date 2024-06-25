import { Router } from 'express';
import { validateBody } from '../validation/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { loginUserSchema, registerUserSchema } from '../validation/userSchema.js';
import { loginUserController, registrerUserController } from '../controllers/user.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registrerUserController),
);

router.post(
  '/login', validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

export default router;
