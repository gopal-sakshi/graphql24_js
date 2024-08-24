// const { ApolloServer } = require("@apollo/server");
// const { startStandaloneServer } = require("@apollo/server/standalone");
// const { resolvers } = require("./resolvers.js");
// const { typeDefs } = require("./models/typeDefs.js");

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import fs from 'fs';
import resolvers from './resolvers14.js';
import mongoose from "mongoose";
const typeDefs2 = fs.readFileSync('schema14.graphql', { encoding: 'utf-8'});
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
    resolvers:resolvers2,
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
    listen: { port: 3081 },
}).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
/********************************************************************************/