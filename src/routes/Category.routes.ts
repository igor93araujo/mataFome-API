import {Request , Response, Router} from 'express';
import CategoryController from '../controllers/Category.controller';
import CategoryService from '../services/Category.service';

const router = Router();

const categoryController = new CategoryController(new CategoryService());

router.post('/', (req: Request, res: Response) => categoryController.createCategory(req, res));
router.get('/', (req: Request, res: Response) => categoryController.getAllCategories(req, res));
router.get('/:id', (req: Request, res: Response) => categoryController.getCategoryById(req, res));
router.put('/:id', (req: Request, res: Response) => categoryController.updateCategory(req, res));
router.delete('/:id', (req: Request, res: Response) => categoryController.deleteCategory(req, res));

export default router;
