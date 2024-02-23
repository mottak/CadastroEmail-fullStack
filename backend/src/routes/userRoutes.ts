import { Router } from 'express'
import { userSchema } from '../validators/userSchema'
import { userFactory } from '../factories/userFactory'



const userRoutes = Router()

userRoutes.post('/user', async (req, res) => {
  await userSchema.validateAsync(req.body)
  await userFactory().add(req, res)
})

userRoutes.get('/user', async (req, res) => {
 await userFactory().getAll(req, res)

})

userRoutes.delete('/user/:id', async (req, res) => {
  await userFactory().delete(req, res)
})

export default userRoutes