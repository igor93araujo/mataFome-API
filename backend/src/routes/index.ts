import {Router } from 'express';
import clientRouter from './Client.routes';
import categoryRouter from './Category.routes';
import productRouter from './Product.routes';
import salesRouter from './Sales.routes';

const router = Router();

router.use('/clients', clientRouter);
router.use('/category', categoryRouter);
router.use('/product', productRouter);
router.use('/sales', salesRouter);


export default router;