import { Router } from 'express';

import customerRoutes from './Customer/Customer.route';
import userRoutes from './User/User.route';
import cartRoutes from './ShoppingCart/ShoppingCart.route';
import productRoutes from './Product/Product.route';
import authRoutes from './Auth/Auth.route';

const router = Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/cart', cartRoutes);
router.use('/customer', customerRoutes);
router.use('/product', productRoutes);

export default router;
