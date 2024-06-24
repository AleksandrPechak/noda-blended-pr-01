import { registerUser } from '../services/user.js';

export const registrerUserController =  async (req, res) => {
          const user await registerUser(req.body);
};