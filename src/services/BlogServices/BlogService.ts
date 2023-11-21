import dayjs from 'dayjs';
import { z } from 'zod'
import { prisma } from '../../lib/prisma';
import {FastifyRequest, FastifyReply} from "fastify";
import Fastify from "fastify";

import * as dotenv from 'dotenv';

dotenv.config()
interface CustomRequest extends FastifyRequest {
    parts?: any;
    user?: any;
}

interface BlogPost {
    categoryPost : string;
    imageBlogPost : any;
    title : string;
    text : string;
    youtube_url? : string;
    author_email : string;
}

interface BlogPostUpdate {
    id : string;
    categoryPost? : string;
    imageBlogPost? : any;
    title? : string;
    text? : string;
    youtube_url? : string;
    author_email? : string;
}


export class BlogPostServices {

    async CreateBlogPost(post : BlogPost){
        
        const today = dayjs().startOf('day').toDate();

            const blog = await prisma.blogPosts.findFirst({
                where : {
                    title : post.title
                }
            })

            if(blog) {
                throw new Error('Blog Post with same title already exists')
            }

            const blogPost = await prisma.blogPosts.create({
                data  : { 
                    categoryBlogPost : post.categoryPost,
                    imageBlog : post.imageBlogPost,
                    title: post.title,
                    text: post.text,
                    created_at : today,
                    youtube_url : post.youtube_url,
                    author_email : post.author_email
                }
            })

            return blogPost
    }

    async SearchBlogPost(title : string){
        const blogPost = await prisma.blogPosts.findFirst({ 
            where : {
                title : title
            }
         });
        if(!blogPost){
            throw new Error('Blog Post with title does not exists')
        }
        return blogPost;
    }

    async SearchAllBlogPosts(){
        const allBlogPosts = await prisma.blogPosts.findMany();
        if( allBlogPosts.length > 0 ){
            return allBlogPosts
        }
        throw new Error('No registered Blog Posts')
    }

    async UpdateBlogPost(blogPostUpdate : BlogPostUpdate){
        const blogPost = await prisma.blogPosts.findFirst({
            where : {
                id : blogPostUpdate.id
            }
        })
        if(!blogPost){
            throw new Error('Blog Post does not exist')
        }

        const BlogPostUpdated = await prisma.blogPosts.update({
            where : {
                id : blogPostUpdate.id,
                author_email : blogPostUpdate.author_email,
            }, data : {
                title : blogPostUpdate.title,
                text : blogPostUpdate.text,
                youtube_url : blogPostUpdate.youtube_url
            }
        })
        return BlogPostUpdated
    }

    async DeleteBlogPost(req : CustomRequest, res : FastifyReply){

    }
}