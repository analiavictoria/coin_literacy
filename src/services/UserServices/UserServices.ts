import dayjs from 'dayjs';
import { z } from 'zod'
import { prisma } from '../../lib/prisma';
import {FastifyRequest} from "fastify";

export class UserServices {
    async CreateUser(request : FastifyRequest) {
        const createUserBody = z.object({
            name : z.string()
        })

        const { name } = createUserBody.parse(request.body);

        await prisma.user.create({
           data : {
            name : name
           }
        })

    }

    async getUsers(request : FastifyRequest) {
        const users = await prisma.user.findMany();

        return users
    }
}

