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

interface Login {
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
               throw new Error("Usuário já existe")
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
        throw new Error("Nenhum usuário encontrado")
    }

    async getUser(email : string) {
        const user = await prisma.user.findFirst({
            where : {
                email : email
            }
        });
        if(!user){
            throw new Error("Usuário não existe")
        }
        return user
    }   

    async loginUser(login : Login){
        const jwtSecretKey = process.env.JWT_SECRET
            const user = await prisma.user.findFirst({
                where : {
                    email : login.email,
                }
            })

            if(!user){
                throw new Error("Usuário não existe")
            }
            if (! await bcrypt.compare(login.password, user.password)) {
                throw new Error("Usuário ou senha incorreta")
            }
            const token = jwt.sign( {email : user.email} , jwtSecretKey, { expiresIn: '1h' }); // 1 hora de expiração
            
            // Retorne o token como resposta
            return token ;
        }
}

