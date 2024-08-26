import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import fs from 'fs';

import resolvers from './index14_resolvers_1.js';
const typeDefs2 = fs.readFileSync('index14_schema_1.graphql', { encoding: 'utf-8'});

/********************************************************************************/
import mongoose from "mongoose";
const MONGO_URI = "mongodb://localhost:27017/graphDb22";
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => { console.log(`Db Connected`); })
.catch(err => { console.log(err.message); });


/********************************************************************************/
const server = new ApolloServer({ 
    typeDefs:typeDefs2, 
    resolvers,
    allowBatchedHttpRequests: true
});

startStandaloneServer(server, {
    context: async ({ req, res }) => ({
        authScope12: req.headers.auth23,
    }),
    listen: { port: 3014 },
}).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
/********************************************************************************/