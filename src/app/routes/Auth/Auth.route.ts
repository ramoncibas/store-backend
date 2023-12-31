import { Router } from 'express';
import AuthController from 'controllers/Auth/AuthController';

const router = Router();

router.post('/login', AuthController.loginUser);
router.post('/logout', AuthController.logoutUser);
router.post('/register', AuthController.registerUser);

export default router;
