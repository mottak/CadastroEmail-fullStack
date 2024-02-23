import IUser from './IUser'
import INewUser from './IUser'

export default interface IUserService {
  add(data: INewUser): Promise<IUser>
  findAll(): Promise<IUser[]>
  delete(id: IUser['id']): Promise<void>
}