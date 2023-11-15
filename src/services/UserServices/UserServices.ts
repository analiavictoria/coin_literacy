import dayjs from 'dayjs';
import { z } from 'zod'
import { prisma } from '../../lib/prisma';
import {FastifyRequest, FastifyReply} from "fastify";
import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import { randomInt} from 'node:crypto'
import jwt from 'jsonwebtoken';

dotenv.config()

interface CustomRequest extends FastifyRequest {
    user?: any;
}

interface User {
    name : string;
    surname : string;
    email : string;
    password : string;
}

export class UserServices {
   
    async createUser(user : User) {
        const randomSalt = randomInt(10,16)

            const today = dayjs().startOf('day').toDate();
    
            user.password = await bcrypt.hash(user.password, randomSalt)

            let userExists = await prisma.user.findFirst({
                where : {
                    email : user.email
                }
            })
            
            if(userExists){
               throw new Error("User already exists")
            }

            const new_user = await prisma.user.create({
                data : {
                 name : user.name,
                 surname : user.surname,
                 email :user.email, 
                 password : user.password,
                 created_at : today
                }
             })
             return new_user
    }

    async getUsers() {
        const users = await prisma.user.findMany();
        if( users.length > 0 ){
            return users
        }
        throw new Error("No users found")
    }

    async getUser(req : FastifyRequest, res : FastifyReply) {
        try{
            const findUserBody = z.object({
                email : z.string()
            })
            const { email } = findUserBody.parse(req.body)
            const user = await prisma.user.findFirst({
                where : {
                    email : email
                }
            });
            if(user){
                return res.status(200).send({ message: 'User Found', user }); 
            }
            return res.status(400).send({ message: 'User not registered' }); 
        }catch(error) {
            if (error instanceof z.ZodError) {
            const missingFields = error.issues.map((issue) => issue.path.join('.'));
            res.status(400).send({ error: 'Missing fields in the request', missingFields });
            } else {
            res.status(500).send({ error: error.message });
            }
        }  
    }

    async loginUser(req : FastifyRequest, res : FastifyReply){
        const jwtSecretKey = process.env.JWT_SECRET
        try{
            const loginUserBody = z.object({
                email : z.string(),
                password : z.string()

            })
            const { email, password } = loginUserBody.parse(req.body);

            const user = await prisma.user.findFirst({
                where : {
                    email : email,
                }
            })

            if(!user){
                return res.status(400).send({ error: 'User not found' });
            }
            if (! await bcrypt.compare(password, user.password)) {
                return res.status(400).send({
                    error: 'Incorrect password!'
                })
            }
            const token = jwt.sign( {email : user.email} , jwtSecretKey, { expiresIn: '1h' }); // 1 hora de expiração
            
          // Retorne o token como resposta
          return res.status(201).send({ user, token });
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

