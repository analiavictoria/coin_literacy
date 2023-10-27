import dayjs from 'dayjs';
import { z } from 'zod'
import { prisma } from '../../lib/prisma';
import {FastifyRequest, FastifyReply} from "fastify";
import { hash } from 'bcryptjs';
import * as dotenv from 'dotenv';
import { randomInt} from 'node:crypto'

dotenv.config()

export class UserServices {

    async CreateUser(req : FastifyRequest, res : FastifyReply) {
        const randomSalt = randomInt(10,16)
        try{
            const createUserBody = z.object({
                name : z.string(),
                surname : z.string(),
                username : z.string(),
                email : z.string(),
                password : z.string(),
                birthdate : z.coerce.date(),
                CPF : z.string().min(14).max(14)

            })

            let { name,surname, username, email, password, birthdate, CPF } = createUserBody.parse(req.body);
            const today = dayjs().startOf('day').toDate();
            const parsedDate = dayjs(birthdate).toDate();
    
            password = await hash(password, randomSalt)

            let user = await prisma.user.findFirst({
                where : {
                    cpf : CPF
                }
            })
            
            if(user){
                return res.status(200).send({ message: 'User already exists'}); 
            }

            user = await prisma.user.create({
                data : {
                 name : name,
                 surname : surname,
                 username: username,
                 email : email, 
                 password : password,
                 birthdate : parsedDate,
                 cpf : CPF,
                 created_at : today
     
                }
             })
            return res.status(201).send({ message: 'User created succesfully', user}); 
        }catch(error) {
            if (error instanceof z.ZodError) {
            const missingFields = error.issues.map((issue) => issue.path.join('.'));
            res.status(400).send({ error: 'Missing fields in the request', missingFields });
            } else {
            res.status(500).send({ error: error.message });
            }
        }  
    }

    async getUsers(req : FastifyRequest, res : FastifyReply) {
        const users = await prisma.user.findMany();
        if( users.length > 0 ){
            return res.status(200).send({ message: 'Users found', users}); 
        }
        return res.status(400).send({ message: 'No registered users'}); 
    }

    async getUser(req : FastifyRequest, res : FastifyReply) {
        try{
            const findUserBody = z.object({
                CPF : z.string().min(14).max(14)
            })
            const { CPF } = findUserBody.parse(req.body)
            const user = await prisma.user.findFirst({
                where : {
                    cpf : CPF
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

    }
}

