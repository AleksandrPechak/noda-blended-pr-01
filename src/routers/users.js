import { Router } from 'expres';
import { validateBody } from '../validation/validateBody';
import { ctrlWrapper } from '../utils/ctrlWrapper';
import { registerUserSchema } from '../validation/userSchema.js';
import { registrerUserController } from '../controllers/user.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registrerUserController),
);

export default router;
