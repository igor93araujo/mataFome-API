import {Request , Response, Router} from 'express';
import SalesController from '../controllers/Sales.controller';
import SalesService from '../services/Sales.service';

const router = Router();

const salesController = new SalesController(new SalesService());

router.post('/', (req: Request, res: Response) => salesController.createSales(req, res));
router.get('/', (req: Request, res: Response) => salesController.getAllSales(req, res));
router.get('/:id', (req: Request, res: Response) => salesController.getSalesById(req, res));
router.put('/:id', (req: Request, res: Response) => salesController.updateSales(req, res));
router.delete('/:id', (req: Request, res: Response) => salesController.deleteSales(req, res));

export default router;