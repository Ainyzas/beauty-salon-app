import express from 'express';
import { fetchUsers, fetchUsersBySurname, registerUser } from '../controllers/UserController.js';
import { loginAdmin } from '../controllers/AdminController.js';

const router = express.Router();

router.get('/users', fetchUsers);

router.get('/users/search', fetchUsersBySurname);

router.post('/auth', loginAdmin);

router.post('/users', registerUser);

router.put('/users/:id');

router.delete('/users/:id');

export default router;
