import { FastifyInstance } from 'fastify';

import { UserServices } from './services/UserServices/UserServices'

const userService = new UserServices()
export async function appRoutes(app : FastifyInstance){
    app.post('/user', userService.CreateUser)
    app.get('/users', userService.getUsers)
}

