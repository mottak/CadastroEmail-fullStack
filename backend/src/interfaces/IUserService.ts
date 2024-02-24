import INewUser from './INewUser'
import IUser from './IUser'

export default interface IUserService {
  add(data: INewUser): Promise<IUser>
  findAll(): Promise<IUser[]>
  delete(id: IUser['id']): Promise<void>
}