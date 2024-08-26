This uses ---> <expressMiddleware>; not "startStandaloneServer"

`ApolloServerPluginDrainHttpServer` ---> to ensure your server shuts down gracefully.
Our httpServer handles incoming requests to our Express app.
Below, we tell Apollo Server to "drain" this httpServer,
enabling our servers to shut down gracefully.

set up our Express middleware ===> to handle CORS, body parsing, expressMiddleware
50mb is the limit that `startStandaloneServer` uses, but you may configure this to suit your needs
expressMiddleware accepts the same arguments: