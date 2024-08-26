import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';

import fs from 'fs';
const typeDefs = fs.readFileSync('index16.graphql', { encoding: 'utf-8'});
import resolvers from './index16_resolvers.js';


const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();       // use node v20 for top level await

app.use('/', cors(), express.json({ limit: '50mb' }), (req, res, next) => {
        console.log("url & hostname ========> ", req.url, req.origin, req.hostname);
        next();
    },
    expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
    }),
);

await new Promise((resolve) => {
    return httpServer.listen({ port: 3016 }, () => {
        console.log(`Server ready at http://localhost:3016/`);
        resolve();
    })
});
