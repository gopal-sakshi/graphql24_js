
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import fs from 'fs';


// Not able to load resolvers using loadFilesSync #2130
// https://github.com/ardatan/graphql-tools/issues/1750
// something with '@graphql-tools/merge' ===> NodeJS, ESM support something
import { typeDefs23, resolvers23 } from './index15_schemas/index.js';

/********************************************************************************/

const server = new ApolloServer({ 
    typeDefs:typeDefs23, 
    resolvers: resolvers23,
    allowBatchedHttpRequests: true
});

startStandaloneServer(server, {
    listen: { port: 3015 },
}).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
/********************************************************************************/