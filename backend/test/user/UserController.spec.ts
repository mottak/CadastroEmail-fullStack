import { Request, Response } from 'express';
import 'mocha'
import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { allUsers, user } from '../mock/userMocks'
import UserController from '../../src/controller/userController'
import UserService from '../../src/service/userService'
import { userService } from './UserService.spec'

// import app from '../src/app';


const { expect } = chai;

chai.use(sinonChai);


const userController = new UserController(userService)

describe('User Controller', () => {
  
  
  describe('método add', () => {
    const req = {} as Request;
    const res = {} as Response;
    beforeEach( ()=> {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.restore();
  });

    it('Cria novo usuário com sucesso', async () => {
      sinon.stub(UserService.prototype, 'add').resolves(user)
      req.body = {
        name: 'João da Silva',
        email: 'joao@email.com'
         
      }
      
       await userController.add(req, res)

      expect(res.status).to.have.been.calledWith(201)
      expect(res.json).to.have.been.calledWith(user)
    });

    
  });

  describe('método findAll', () => {
    const req = {} as Request;
    const res = {} as Response;
    beforeEach(()=> {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.restore();
  });
  
    it('deve retornar um array de usuários', async () => {
      sinon.stub(UserService.prototype, 'findAll').resolves(allUsers)

      await userController.getAll(req, res)

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWith(allUsers)
  
   
    });
  });

  describe('método delete', () => {
    const req = {} as Request;
    const res = {} as Response;
    beforeEach(()=> {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.restore();
  });
    it('Sucesso: deve retornar mensagem de usuário deletado com sucesso', async () => {
      sinon.stub(UserService.prototype, 'delete').resolves()
      req.params = { id: '1' }

      await userController.delete(req, res)

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWith({ message: 'User deleted successfully'})

    });
  });
})

