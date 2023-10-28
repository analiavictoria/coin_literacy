import dayjs from 'dayjs';
import { z } from 'zod'
import { prisma } from '../../lib/prisma';
import {FastifyRequest, FastifyReply} from "fastify";
import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

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
            });
    
            const { categoryPost, title, text } = createBlogPostBody.parse(req.body);
            const user  = req.user
            const today = dayjs().startOf('day').toDate();
    
            const blogPost = await prisma.blogPosts.create({
                data  : { 
                    categoryBlogPost : categoryPost,
                    title: title,
                    text: text,
                    created_at : today,
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

}