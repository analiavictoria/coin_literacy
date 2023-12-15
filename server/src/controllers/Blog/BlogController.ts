import dayjs from 'dayjs';
import { z } from 'zod'
import { prisma } from '../../lib/prisma';
import {FastifyRequest, FastifyReply} from "fastify";
import { BlogPostServices } from '../../services/BlogServices/BlogService';

import * as dotenv from 'dotenv';

dotenv.config()
interface CustomRequest extends FastifyRequest {
    parts?: any;
    user?: any;
}

const BlogPostService = new BlogPostServices()

export class BlogPostController {

    async CreateBlogPost(req : CustomRequest, res : FastifyReply){
        try{
            const createBlogPostBody = z.object({
                categoryPost : z.string(),
                title : z.string(),
                imageBlogPost : z.string(),
                text : z.string(),
                description: z.string(),
                url : z.string(),
            });
            
            const { categoryPost, imageBlogPost, title, description, text, url } = createBlogPostBody.parse(req.body);

            const author_email  = req.user.email

            const [ rest, id ] = url.split('=') 
 

            const post_fields = {categoryPost, imageBlogPost, title, text, description, id, author_email}

            const post = await BlogPostService.CreateBlogPost(post_fields)
            
            return res.status(201).send({ message: 'Post to Blog created succesfully', post}); 
        }catch(error){
            if (error instanceof z.ZodError) {
                const missingFields = error.issues.map((issue) => issue.path.join('.'));
                res.status(400).send({ error: 'Missing fields in the request', missingFields });
            }
            else {
                res.status(500).send({ error: error.message });
            }  
        }
    }

    async SearchBlogPost(req : CustomRequest, res : FastifyReply){
        try {
            const blogPostParam = z.object({
                title : z.string(),
            });         
            const { title } = blogPostParam.parse(req.body);
            
            console.log(title);
        
            const blogPost = await BlogPostService.SearchBlogPost(title);

            return res.status(200).send({ message:"Blog post found", blogPost});
        }catch(error){
            if (error instanceof z.ZodError) {
                const missingFields = error.issues.map((issue) => issue.path.join('.'));
                res.status(400).send({ error: 'Missing fields in the request', missingFields });
            } else {
                res.status(500).send({ error: error.message });
            }  
        }
    }

    async SearchAllBlogPosts(req : CustomRequest, res : FastifyReply){
       try{
            const blogPosts = await BlogPostService.SearchAllBlogPosts();
            return res.status(200).send({ message:"Blog posts found", blogPosts});
       }catch(error){
            res.status(500).send({ error: error.message });
       }
    }

    async UpdateBlogPost(req : CustomRequest, res : FastifyReply){
        try { 
            const createBlogPostBody = z.object({
                categoryPost : z.string().optional(),
                title : z.string().optional(),
                text : z.string().optional(),
                imageBlogPost: z.string().optional(),
                youtube_url : z.string().optional(),
            });
    
            const blogPostParam = z.object({
                id : z.string().uuid(),
            });    
    
            const { categoryPost, title, text, imageBlogPost, youtube_url } = createBlogPostBody.parse(req.body);
         
            const { id } = blogPostParam.parse(req.params);

            const author_email  = req.user.email

            const blogPostUpdate = { id, categoryPost, text, imageBlogPost, youtube_url, title, author_email}
            
            const blogPostUpdated = await BlogPostService.UpdateBlogPost(blogPostUpdate)
            
            return res.status(200).send({ message:"Blog post Updated", blogPostUpdated});
        }catch(error){
            if (error instanceof z.ZodError) {
                const missingFields = error.issues.map((issue) => issue.path.join('.'));
                res.status(400).send({ error: 'Missing fields in the request', missingFields });
            } else {
                res.status(500).send({ error: error.message });
            }  
        }
        
    }

    async DeleteBlogPost(req : CustomRequest, res : FastifyReply){

    }
}