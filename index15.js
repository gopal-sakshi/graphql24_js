
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import fs from 'fs';

const typeDefs2 = fs.readFileSync('index15_schema1.graphql', { encoding: 'utf-8'});
import resolvers from './index15_resolvers1.js';

/********************************************************************************/

const server = new ApolloServer({ 
    typeDefs:typeDefs2, 
    resolvers,
    allowBatchedHttpRequests: true
});

startStandaloneServer(server, {
    listen: { port: 3015 },
}).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
/********************************************************************************/