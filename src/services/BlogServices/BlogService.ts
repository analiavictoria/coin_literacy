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
    async CreateBlogPost(req : FastifyRequest, res : FastifyReply){
        const createBlogPostBody = z.object({

        });
    }
}