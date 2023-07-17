import {Request , Response, Router} from 'express';
import ProductController from '../controllers/Product.controller';
import ProductService from '../services/Product.service';

const router = Router();

const productController = new ProductController(new ProductService());

router.post('/', (req: Request, res: Response) => productController.createProduct(req, res));
router.get('/', (req: Request, res: Response) => productController.getAllProducts(req, res));
router.get('/:id', (req: Request, res: Response) => productController.getProductById(req, res));
router.put('/:id', (req: Request, res: Response) => productController.updateProduct(req, res));
router.delete('/:id', (req: Request, res: Response) => productController.deleteProduct(req, res));


export default router;
