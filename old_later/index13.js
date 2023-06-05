// const { ApolloServer } = require("@apollo/server");
// const { startStandaloneServer } = require("@apollo/server/standalone");
// const mongoose = require("mongoose");

// 	************ FOR some reason, MongoDataSource isnt working
// 	************ INCOMPLETE ===========> https://www.npmjs.com/package/apollo-datasource-mongo

import { MongoDataSource } from "apollo-datasource-mongodb";
import mongoose from "mongoose";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import fs from 'fs';

const typeDefs = fs.readFileSync('schema13.graphql', { encoding: 'utf-8'});

const EmployeeModel = mongoose.model("Employee", {
    firstName: String,
    lastName: String,
    skills: [String],
    otherStuff:mongoose.Schema.Types.Mixed
});

const resolvers = {
    Query: { 
        employees: (_, contextValue) => { return contextValue.dataSources.employees.getEmployees() }, 
        hello: () => 'Hello World!'
    },
    Mutation: {
        CreateEmployee: (_, args, contextValue) => {
            return contextValue.dataSources.employees.createEmployee(args)
        },
    },
};

class Employees extends MongoDataSource {
    constructor(options) {
        super(options);
        this.initialize({ cache: options.cache, context: options.token });
    }
    async getEmployees() {
        return await this.model.find();
    }
    async createEmployee(args) {
        return await this.model.create(args);
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const MONGODB_URL = "mongodb://127.0.0.1:27017/graphDb21";
    async function connectMongodb() {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to database successfully");
    }
(async () => {    
    try { await connectMongodb(); } 
    catch (e) { console.error(e); throw new Error("Unable to connect to database"); }
    const { url } = await startStandaloneServer(server, {
        listen: { port: 3081 },
        context: async ({ req }) => {
            const { cache } = server;
            const token = req.headers.token;
            return {
                dataSources: { employees: new Employees(EmployeeModel), },
                token,
            };
        },
    });
    console.log(`Server ready at ${ url }`);
})();