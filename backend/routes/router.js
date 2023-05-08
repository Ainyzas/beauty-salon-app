import express from 'express';
import { fetchUsers, registerUser } from '../controllers/UserController.js';
import { loginAdmin } from '../controllers/AdminController.js';

const router = express.Router();

router.get('/users', fetchUsers);

router.post('/auth', loginAdmin);

router.post('/users', registerUser);

router.put('/users/:id');

router.delete('/users/:id');

export default router;
