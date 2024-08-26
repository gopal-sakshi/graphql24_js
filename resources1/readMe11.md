```js
// index12.js AND index13.js  ------------------> both use "graphql" & "graphql-http"
import { createHandler } from "graphql-http/lib/use/express";  
import { GraphQLID, GraphQLInt, GraphQLString, GraphQLSchema, GraphQLObjectType } from "graphql";
const CinemaType = new GraphQLObjectType({ 
    name: ""; 
    fields: { }
});
const schema1 = new GraphQLSchema({ 
    query: new GraphQLObjectType({ }),
    mutation: new GraphQLObjectType({ })
});
app.all("/graphql",	createHandler({ schema: schema1 }));


// index12_with_Middleware ------------------> uses ""graphql-http" & middleware

// index14.js ----------------------------------> uses @apollo/server
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
const server = new ApolloServer({
    typeDefs:typeDefs2,
    resolvers:resolvers2,
});
const url23 = await startStandaloneServer(server, { listen: { port: 3080 } });


// index15.js -----------------------> merge different typedefs, resolvers
const info23 = "NOT WORKING CURRENTLY";


// index16.js ------------------------> uses expressMiddleware instead of startStandaloneServer
```