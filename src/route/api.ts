import express from 'express'
import { authMiddleware } from '../controller/auth-middleware'
import { UserController } from '../controller/user-controller'

export const apiRouter = express.Router()
apiRouter.use(authMiddleware)

// User api
apiRouter.get('/api/users/current', UserController.get)
apiRouter.patch('/api/users/current', UserController.update)
apiRouter.delete('/api/users/current', UserController.logout)
