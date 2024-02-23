import IUserService from '../interfaces/IUserService';
import IUserRepo from '../interfaces/IUserRepo';
import IUser from '../interfaces/IUser';

export default class UserService implements IUserService{
  private userRepo: IUserRepo;

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo;
  }
  
  async add(User: IUser) {
    const newUser = await this.userRepo.add(User);
    return newUser
  };
  
  async findAll() {
    const user = await this.userRepo.findAll();
    return user
  }
 

  async delete(id: IUser['id']) {
   await this.userRepo.delete(id)
   
  }
}