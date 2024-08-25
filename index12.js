import express from "express";
import { createHandler } from "graphql-http/lib/use/express";       // for express
import expressPlayground from "graphql-playground-middleware-express";

import { GraphQLID,
    GraphQLInt, GraphQLFloat,
	GraphQLString,
	GraphQLList,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLObjectType } from "graphql";
import cors from "cors";
var app = express();
app.use(cors());

// https://stackoverflow.com/questions/76274054/graphql-http-missing-query

const schema23 = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            helloStr23: { 
                type: GraphQLString, 
                resolve: () => `world___${new Date().toISOString()}` 
            },
            helloInt23: {
                type: GraphQLInt,
                args: { id23: { type: GraphQLInt } },
                resolve: (root, args, context, info) => { console.log("args ===> ", args); return args.id23 }
            },
            helloFloat23: { 
                type: GraphQLFloat, 
                resolve: () => Date.now()
            },
        },
    }),
});

app.all("/graphql_12",	createHandler({ schema: schema23 }));
app.get('/playground', expressPlayground.default({ endpoint: '/graphql_12' }));
app.listen(3012, () => { console.log("server running at 3012"); });
