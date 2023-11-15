import dayjs from 'dayjs';
import { z } from 'zod'
import { prisma } from '../../lib/prisma';
import {FastifyRequest, FastifyReply} from "fastify";
import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import { randomInt} from 'node:crypto'
import jwt from 'jsonwebtoken';

import { UserServices } from '../../services/UserServices/UserServices';

dotenv.config()

interface CustomRequest extends FastifyRequest {
    user?: any;
}

const userService = new UserServices();

export class UserController {
    async createUser(req : FastifyRequest, res : FastifyReply) {
        try{ 
            const createUserBody = z.object({
                name : z.string(),
                surname : z.string(),
                email : z.string(),
                password : z.string(),
            })
    
            let { name,surname, email, password} = createUserBody.parse(req.body);
    
            const user = { name, surname, email, password }
    
            let userCreated = await userService.createUser( user )

            return res.status(201).send({message : "User created successfully", userCreated})
        }catch(error) {
            if (error instanceof z.ZodError) {
            const missingFields = error.issues.map((issue) => issue.path.join('.'));
            res.status(400).send({ error: 'Missing fields in the request', missingFields });
            } else {
            res.status(500).send({ error: error.message });
            }
        }  
    }

    async getUsers(req : FastifyRequest, res : FastifyReply){
        try{
           const users = await userService.getUsers()
           return res.status(200).send({"users": users})
        }catch(error) {
            if (error instanceof z.ZodError) {
            const missingFields = error.issues.map((issue) => issue.path.join('.'));
            res.status(400).send({ error: 'Missing fields in the request', missingFields });
            } else {
            res.status(500).send({ error: error.message });
            }
        }  
    }
}