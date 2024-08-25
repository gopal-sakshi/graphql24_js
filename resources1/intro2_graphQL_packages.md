`graphql`
library that implements the core GraphQL parsing & execution algorithms.

`apollo-server-express`
used with Apollo Server v2, v3; now deprecated
instead use @apollo/server
apollo-server-express ===> it is Express integration Apollo Server
Apollo Server v2 & v3 are called ----> apollo-server
    wrapped with express, they are called ----> apollo-server-express <!-- this is what we used in graphQL23 -->
Apollo Server v4 is called -----------> `@apollo/server`

`@apollo/server`
how to turn HTTP requests & responses into GraphQL operations and run them
community-maintained open-source GraphQL server 
it works with many Node.js HTTP server frameworks
it consits of <typedefs> and <resolvers>
there is a middleware called <startStandaloneServer>
it integrates with `@apollo/server` and becomes a webserver listening on a PORT

`express-graphql`
deprecated... use graphql-http


`graphql-http`
it doesnt provide any playground, GUIs, file uploads, @stream, @defer directives
graphql-http is mostly aimed for library authors & simple server setups
https://github.com/graphql/graphql-http#only-graphql-over-http
if you want feature-full server ===> use `@apollo/server`
if you want playground features http://localhost:3002/playground, use these lines
    import expressPlayground from "graphql-playground-middleware-express";
    app.get('/playground', expressPlayground.default({ endpoint: '/graphql' }));


<!------------------------------------------------------------------------------------------>
# @apollo/server

standalone server
- It lets you get a GraphQL server up and running
- no need to set up an HTTP server yourself.

Express middleware
- lets you run your GraphQL server as part of an app built with Express
<!--------------------------------------------------------------------------------------------->

`@apollo/server`      vs      `express-graphql`
- Both are GraphQL servers for NodeJS
- but express-graphql is deprecated... even its successor <graphql-http> is used by library authors
- bcoz, we want server with full features, we will only bother with `@apollo/server`
<!------------------------------------------------------------------------------------------------>