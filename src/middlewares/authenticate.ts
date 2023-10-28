import {FastifyRequest, FastifyReply} from "fastify";
import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

interface CustomRequest extends FastifyRequest {
    user?: any;
}

dotenv.config()
export class AuthenticateService {
    async Authenticate(req : CustomRequest, res : FastifyReply){
        const jwtSecretKey = process.env.JWT_SECRET

        try{
            const token = req.headers.authorization;

            if (!token) {
            return { isValid: false, user: undefined };
            }

            const tokenWithoutBearer = token.replace('Bearer ', '');
            const decoded = jwt.verify(tokenWithoutBearer, jwtSecretKey);
            req.user = decoded;
        }catch(error){
            return res.status(400).send({ error: 'Invalid Token' });
        }
    }
}