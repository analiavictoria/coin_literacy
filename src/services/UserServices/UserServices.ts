import dayjs from 'dayjs';
import { z } from 'zod'
import { prisma } from '../../lib/prisma';
import {FastifyRequest} from "fastify";

export class UserServices {
    async CreateUser(request : FastifyRequest) {
        const createUserBody = z.object({
            name : z.string(),
            surname : z.string(),
            username : z.string(),
            email : z.string(),
            password : z.string(),
            birthdate : z.coerce.date(),
            cpf : z.string(),
        })

        const { name,
            surname,
            username,
            email,
            password,
            birthdate,
            cpf } = createUserBody.parse(request.body);
            const today = dayjs().startOf('day').toDate();        

        await prisma.user.create({
           data : {
            name : name,
            surname : surname,
            username: username,
            email : email, 
            password : password,
            birthdate : birthdate,
            cpf : cpf,
            created_at : today

           }
        })

    }

    async getUsers(request : FastifyRequest) {
        const users = await prisma.user.findMany();

        return users
    }
}

