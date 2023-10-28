import { FastifyInstance } from 'fastify';

import { UserServices } from './services/UserServices/UserServices'
import { BlogPostServices } from './services/BlogServices/BlogService'
import { AuthenticateService } from './middlewares/authenticate'

const userService = new UserServices()
const blogPostService = new BlogPostServices()
const authenticateService = new AuthenticateService()

export async function appRoutes(app : FastifyInstance){
    app.post('/user', userService.createUser)
    app.get('/users',  { preHandler: authenticateService.Authenticate},userService.getUsers)
    app.post('/user/search', { preHandler: authenticateService.Authenticate},userService.getUser)
    app.post('/login', userService.loginUser)

    app.post('/blogPost', { preHandler: authenticateService.Authenticate },blogPostService.CreateBlogPost)

}

