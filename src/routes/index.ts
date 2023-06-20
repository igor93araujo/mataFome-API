import {Router } from 'express';
import clientRouter from './Client.routes';

const router = Router();

router.use('/clients', clientRouter);

export default router;