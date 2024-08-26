import express from "express";
import { createHandler } from "graphql-http/lib/use/express";       // for express
import { GraphQLInt, GraphQLSchema, GraphQLObjectType, buildSchema } from "graphql";
import cors from "cors";
var schema23 = buildSchema(`
    type Query {
        ip: String
    }
`)
var app = express();
app.use(cors());


function loggingMiddleware(req, res, next) {
    console.log("ip =====> ", req.ip)
    next();
}
app.use(loggingMiddleware);
app.all("/graphql_12_mw", createHandler({ 
    schema: schema23,
    rootValue: { ip(args, context) { return context.ip }, },
    context: req => ({ ip: req.raw.ip, }),
}));
app.listen(3012, () => { console.log("server running at 3012"); });
