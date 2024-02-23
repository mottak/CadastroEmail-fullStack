import IUserRepo from '../../interfaces/IUserRepo';
import INewUser from '../../interfaces/IUser';
import { prisma } from '../database/prismaClient';
import IUser from '../../interfaces/IUser';


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

}