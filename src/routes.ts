import { FastifyInstance } from 'fastify';

import { UserServices } from './services/UserServices/UserServices'
import { AuthenticateService } from './middlewares/authenticate'

const userService = new UserServices()
const authenticateService = new AuthenticateService()
export async function appRoutes(app : FastifyInstance){
    app.post('/user', userService.CreateUser)
    app.get('/users',  { preHandler: authenticateService.Authenticate},userService.getUsers)
    app.post('/user/search', { preHandler: authenticateService.Authenticate},userService.getUser)
    app.post('/login', userService.loginUser)
    

}

