import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import fs from 'fs';
import * as resolvers from './resolvers11.js';

const typeDefs2 = fs.readFileSync('schema11.graphql', { encoding: 'utf-8'});
const resolvers2 = resolvers;

const server = new ApolloServer({
  typeDefs:typeDefs2,
  resolvers:resolvers2,
});

const url23 = await startStandaloneServer(server, { listen: { port: 3080 } });
console.log(`Server listening at: ${url23.url}`);
