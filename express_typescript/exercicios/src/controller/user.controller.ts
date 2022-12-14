import UserService from '../services/user.services';
import { Request, Response } from 'express';

class UserController {
  constructor(private userService = new UserService()) {}
  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(200).json(users);
  };
}

export default UserController;
