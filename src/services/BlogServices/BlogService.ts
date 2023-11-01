import dayjs from 'dayjs';
import { z } from 'zod'
import { prisma } from '../../lib/prisma';
import {FastifyRequest, FastifyReply} from "fastify";
import * as dotenv from 'dotenv';

dotenv.config()
interface CustomRequest extends FastifyRequest {
    user?: any;
}

export class BlogPostServices {

    async CreateBlogPost(req : CustomRequest, res : FastifyReply){
        try{
            const createBlogPostBody = z.object({
                categoryPost : z.string(),
                title : z.string(),
                text : z.string(),
                youtube_url : z.string().optional(),
            });

            const { categoryPost, title, text, youtube_url } = createBlogPostBody.parse(req.body);
            const user  = req.user
            const today = dayjs().startOf('day').toDate();

            const blog = await prisma.blogPosts.findFirst({
                where : {
                    title : title
                }
            })
            
            if(blog) {
                return res.status(400).send({ error: 'Blog Post with same title already exists'}); 
            }

            const blogPost = await prisma.blogPosts.create({
                data  : { 
                    categoryBlogPost : categoryPost,
                    title: title,
                    text: text,
                    created_at : today,
                    youtube_url : youtube_url,
                    author_email : user.email
                }
            })
            return res.status(201).send({ message: 'Post to Blog created succesfully', blogPost}); 
        }catch(error){
            if (error instanceof z.ZodError) {
                const missingFields = error.issues.map((issue) => issue.path.join('.'));
                res.status(400).send({ error: 'Missing fields in the request', missingFields });
            } else {
                res.status(500).send({ error: error.message });
            }  
        }
    }

    async SearchBlogPost(req : CustomRequest, res : FastifyReply){
        try {
            const blogPostParam = z.object({
                id : z.string().uuid(),
            });         
            const { id } = blogPostParam.parse(req.params);
            const blogPost = await prisma.blogPosts.findFirst({ 
                where : {
                    id : id
                }
             });
            if(!blogPost){
                return res.status(400).send({ error : "No blog post found"})
            }
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
        const allBlogPosts = await prisma.blogPosts.findMany();
        if( allBlogPosts.length > 0 ){
            return res.status(200).send({ message: 'Users found', allBlogPosts}); 
        }
        return res.status(400).send({ message: 'No registered users'}); 
    }

    async UpdateBlogPost(req : CustomRequest, res : FastifyReply){
        try { 
            const createBlogPostBody = z.object({
                categoryPost : z.string().optional(),
                title : z.string().optional(),
                text : z.string().optional(),
                youtube_url : z.string().optional(),
            });
    
            const blogPostParam = z.object({
                id : z.string().uuid(),
            });    
    
            const { categoryPost, title, text, youtube_url } = createBlogPostBody.parse(req.body);
         
            const { id } = blogPostParam.parse(req.params);
    
            let blogPost = await prisma.blogPosts.findFirst({ 
                where : { 
                    id : id 
                }, 
            });
    
            if(!blogPost){
                return res.status(400).send({ error : "No blog post found"})
            }
            
            blogPost = await prisma.blogPosts.update({
                where : {
                    id : id
                },
                data : {
                    categoryBlogPost : categoryPost, 
                    title : title,
                    text : text,
                    youtube_url : youtube_url,
                }
            }) 
            return res.status(200).send({ message:"Blog post Updated", blogPost});
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