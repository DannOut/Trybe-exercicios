import { Router } from 'express';
import UserController from '../controller/user.controller';

const router = Router();

const usersController = new UserController();

router.get('/', usersController.getAll);

export default router;
