import { Response, Request } from 'express';
import IUser from '../interfaces/IUser';
import IUserService from '../interfaces/IUserService';

export default class UserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  async add (req: Request, res: Response<IUser>)  {
    const user = await this.userService.add({ ...req.body })
    return res.status(201).json(user);
    
  };

  async getAll(req: Request, res: Response<IUser[]>)  {
    const users = await this.userService.findAll();
    return res.status(200).json(users);
  }


  async delete(req: Request, res: Response)  {
    const { id } = req.params;

    await this.userService.delete(Number(id));
    return res.status(200).json({ message: 'User deleted successfully'});
  }

}