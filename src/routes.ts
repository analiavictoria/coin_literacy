import { FastifyInstance } from 'fastify';

import { UserController } from './controllers/User/UserController';
import { BlogPostServices } from './services/BlogServices/BlogService'

import { AuthenticateService } from './middlewares/authenticate'

const userController= new UserController()
const blogPostService = new BlogPostServices()
const authenticateService = new AuthenticateService()

export async function appRoutes(app : FastifyInstance){
    app.post('/user', userController.createUser)
    app.get('/users',{ preHandler: authenticateService.Authenticate }, userController.getUsers)
    // app.post('/user/search', { preHandler: authenticateService.Authenticate},userService.getUser)
    // app.post('/login', userService.loginUser)

    app.post('/blogPost',{ preHandler: authenticateService.Authenticate },blogPostService.CreateBlogPost)
    app.get('/blogPost',{ preHandler: authenticateService.Authenticate },blogPostService.SearchBlogPost)
    app.get('/AllblogPost',{ preHandler: authenticateService.Authenticate },blogPostService.SearchAllBlogPosts)
    
}

