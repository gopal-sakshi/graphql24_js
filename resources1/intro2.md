graphql
    library that implements the core GraphQL parsing & execution algorithms.
@apollo/server
    how to turn HTTP requests & responses into GraphQL operations and run them
apollo-server-express
    used with Apollo Server v2, v3; now deprecated
    instead use @apollo/server
    apollo-server-express ===> it is Express integration Apollo Server
express-graphql
    deprecated... use graphql-http
graphql-http


Apollo Server
- community-maintained open-source GraphQL server 
- it works with many Node.js HTTP server frameworks

--------------------------------------------------------------------------
@apollo/server

standalone server
- It lets you get a GraphQL server up and running
- no need to set up an HTTP server yourself.

Express middleware
- lets you run your GraphQL server as part of an app built with Express
--------------------------------------------------------------------------

`@apollo/server`      vs      `express-graphql`
- Both are GraphQL servers for NodeJS
- <Apollo Server> supports Express, Connect, Hapi, Koa, Restify.
    express-graphql works with Express & Connect
- <Apollo Server> separates serving GraphiQL from responding to GraphQL requests.
    GraphiQL = in-browser IDE for exploring GraphQL
- <Apollo Server> uses packages like body-parser for parsing HTTP requestBody
    express-graphql contains code for parsing HTTP request bodies
- <Apollo Server> is built with TypeScript.
    but now express-graphql is also written in typescript...

--------------------------------------------------------------------------


