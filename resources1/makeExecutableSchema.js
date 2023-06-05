const jsSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
    logger,
    allowUndefinedInResolve,
    resolverValidationOptions,
    directiveResolvers,
    schemaDirectives,
    parseOptions,
    inheritResolversFromInterfaces
});

/*

All fields are optional (except typeDefs)


    typeDefs                        represents a GraphQL query as a UTF-8 string.
    resolvers                       functions to handle the query
    logger                          print errors to the server console.
    parseOptions                    customization of parse when specifying typeDefs as a string.
    allowUndefinedInResolve         throw errors if resolve functions return undefined.


*/