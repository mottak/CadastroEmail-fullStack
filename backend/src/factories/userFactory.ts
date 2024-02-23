import UserController from '../controller/userController';
import UserService from '../service/userService';
import UserRepository from '../infra/Repositories/UserRepository';

export const userFactory = () => {
  const userRepo = new UserRepository()
  const userService = new UserService(userRepo)
  const userController = new UserController(userService)
  return userController
}