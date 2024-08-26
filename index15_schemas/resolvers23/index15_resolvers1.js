const resolvers = {
    Query: {
        namaste23: () => `namaste__${new Date().toISOString()}`
    }
}

export default resolvers