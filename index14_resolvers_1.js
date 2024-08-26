import mongoose from "mongoose";
import { dateScalar } from './index14_scalarDate.js';

let studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    subjects: [String]    
}, { strict: false });

const Student = mongoose.model("Student", studentSchema);

import { GraphQLError } from "graphql";

const resolvers = {
    Query: { 
        greetings: () => "GraphQL is Awesome",
        students: async () => await Student.find({}),
        student: async(parent, args) => await Student.findOne({firstName: args.firstName12})
    },
    Mutation: {
        create: async (parent, args) => {
          const { firstName, lastName, gender, subjects} = args;
          const newStudent = new Student({firstName, lastName, gender, subjects});
          await newStudent.save();
          return newStudent;
        },
        createWithDate: async (parent, args) => {
            const { firstName, lastName, gender, subjects, createdTs23} = args;
            const newStudent = new Student({firstName, lastName, gender, subjects, createdTs23});
            await newStudent.save();
            console.log("new student ===> ", newStudent);
            return newStudent;
        },
        update12: async (parent, args, contextValue, info) => {
            if (contextValue.authScope12 !== 'admin44') { 
                throw new GraphQLError('not admin ra rei!', { extensions: { code: 'UNAUTHENTICATED' }});
            }
            const { firstName, newLastName } = args;
            // without new:true ====> return value will still be old data 
            return await Student.findOneAndUpdate(
                {firstName: firstName}, {lastName: newLastName}, { new:true })
        }
    },
    Date123: dateScalar
};

export default resolvers;

/*************

mutation {
    create (firstName:"Mohan", lastName:"Ch", gender:MALE, subjects: ["Maths", "Science"]) 
    { firstName, lastName }
    create (firstName:"Neelima", lastName:"P", gender:FEMALE, subjects: ["Maths", "English"]) 
    { firstName, lastName }
    create (firstName:"Omkar", lastName:"K", gender:MALE, subjects: ["Telugu", "Social"]) 
    { firstName, lastName }
    createWithDate (firstName:"Pranavi", lastName:"A", gender:FEMALE, subjects: ["Telugu", "English"], createdTs23: 1683988124413 ) 
    { firstName, lastName }
    update12 (firstName:"Pranavi", newLastName:"AN") { firstName, lastName }
}

query {
    students { firstName, lastName, gender }
    student(firstName12: "Mohan") { firstName, gender }
}

allowBatchedHttpRequests

**************/