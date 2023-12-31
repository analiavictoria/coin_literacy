import Fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from "./routes";

const app = Fastify()

app.register(require('@fastify/multipart'))

app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3333
}).then(() => {
    console.log("HTTP server listening on port 3333")
})
