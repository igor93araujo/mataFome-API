import {Request , Response, Router} from 'express';
import  ClientService  from '../services/Client.service';
import  ClientController from '../controllers/Client.controller';
import clientValidates from '../middleware/clintValidates';

const router = Router();
const clientService = new ClientService();
const clientController = new ClientController(clientService);

router.post('/',clientValidates, (req: Request, res: Response) => clientController.createClient(req, res));
router.get('/', (req: Request, res: Response) => clientController.getAllClients(req, res));
router.get('/:id', (req: Request, res: Response) => clientController.getClientById(req, res));
router.put('/:id', (req: Request, res: Response) => clientController.updateClient(req, res));
router.delete('/:id', (req: Request, res: Response) => clientController.deleteClient(req, res));

export default router;