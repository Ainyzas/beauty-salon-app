import express from 'express';
import {
  deleteUser,
  fetchUsers,
  fetchUsersBySurname,
  registerUser,
  updateUser,
} from '../controllers/UserController.js';
import { loginAdmin } from '../controllers/AdminController.js';

const router = express.Router();

router.get('/users', fetchUsers);

router.get('/users/search', fetchUsersBySurname);

router.post('/auth', loginAdmin);

router.post('/users', registerUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

export default router;
