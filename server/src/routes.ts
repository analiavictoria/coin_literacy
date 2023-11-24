import { FastifyInstance } from 'fastify';

import { UserController } from './controllers/User/UserController';
import { BlogPostController } from './controllers/Blog/BlogController'

import { AuthenticateService } from './middlewares/authenticate'

const userController= new UserController()
const blogPostController = new BlogPostController()
const authenticateService = new AuthenticateService()

export async function appRoutes(app : FastifyInstance){
    app.post('/user', userController.createUser)
    app.post('/login', userController.loginUser)
    app.get('/users',{ preHandler: authenticateService.Authenticate }, userController.getUsers)
    app.post('/user/search', { preHandler: authenticateService.Authenticate}, userController.getUser)

    app.post('/blogPost',{ preHandler: authenticateService.Authenticate }, blogPostController.CreateBlogPost)
    app.post('/blogPost/search',{ preHandler: authenticateService.Authenticate }, blogPostController.SearchBlogPost)
    app.get('/AllblogPost',{ preHandler: authenticateService.Authenticate }, blogPostController.SearchAllBlogPosts)
    app.patch('/blogPost/:id',{ preHandler: authenticateService.Authenticate }, blogPostController.UpdateBlogPost)
}

