import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import fs from 'fs';
import resolvers from './index14_resolvers_1.js';
import mongoose from "mongoose";
const typeDefs2 = fs.readFileSync('index14_schema_1.graphql', { encoding: 'utf-8'});
const resolvers2 = resolvers;
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault
} from '@apollo/server/plugin/landingPage/default';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled'; 
/********************************************************************************/
const MONGO_URI = "mongodb://localhost:27017/graphDb22";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => { console.log(`Db Connected`); })
.catch(err => { console.log(err.message); });


/********************************************************************************/
const server = new ApolloServer({ 
    typeDefs:typeDefs2, 
    resolvers,
    // plugins: [
    //     process.env.NODE_ENV === 'production'
    //       ? ApolloServerPluginLandingPageProductionDefault()
    //       : ApolloServerPluginLandingPageLocalDefault({ embed: false }),
    // ],
    // plugins: [ApolloServerPluginLandingPageDisabled()],
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