const resolvers = { 
    Query: {
        spanishHello: () => `Hola ---> ${new Date().toISOString()}`,
        frenchThanQ: async (parent, args) => `Merci ===> ${args.peru23}`
    },
    Mutation: {
        addGreeting: async (parent, args) => {
            const { msg, lang } = args;
            return `Greeting add chesa po ===> ${msg} __ ${lang} `
        }
    }
}

export default resolvers;