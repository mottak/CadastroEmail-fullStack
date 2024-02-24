import IUser from './IUser'
import INewUser from './INewUser';

export default interface IUserRepo {
  add(data: INewUser): Promise<IUser>
  findAll(): Promise<IUser[]>
  delete(id: IUser['id']): Promise<void>
}