import User from '../database/models/user.model';
import IUser from '../interfaces/user.interface';

class UserService {
  public model: User;

  constructor() {
    this.model = new User;
  }

  public async getAll(): Promise<IUser[]> {
    const users = await User.findAll();
    return users;
  }
}

export default UserService;
