import IUserRepo from '../../interfaces/IUserRepo';
import { prisma } from '../database/prismaClient';
import IUser from '../../interfaces/IUser';
import INewUser from '../../interfaces/INewUser';


export default class UserRepository implements IUserRepo {
 
  async add(data: INewUser): Promise<IUser> {
     
    const user = await prisma.user.create({ 
      data: {
        email: data.email,
        name: data.name

    },
  });
    return user;
  }
  
  async findAll(): Promise<IUser[]> {
    const users = await prisma.user.findMany({});
    return users
  }

  async delete(id: IUser['id']): Promise<void> {
    const user = await prisma.user.delete({
      where: {
        id,
      }
    });
  }

}