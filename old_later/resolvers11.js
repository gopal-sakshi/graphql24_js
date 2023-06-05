import books from './db23/books.js';
import db34 from './db23/education.js';


const Query = {
    books12: () => books,
    greeting: () => { return "Greetings fellow Madridistas !!!" },
    students: () => db34.students.list(),
    studentById: (root,args,context,info) => { return db34.students.get(args.id); },
    sayHello:(root,args,context,info) => `Hellooo ${args.name} !!!`,
    spanishWishes: (root, args, context, info) => { return `Hola ${args.name}`}
};
const Student23 = {
    fullName: (root,args,context,info) => { return root.firstName + ":" + root.lastName },
    collegeId44: (root) => { return db34.colleges.get(root.collegeId); }
};

const Mutation = {
    createStudent12:(root,args,context,info) => {
        var student23 = {
            collegeId: args.collegeId, 
            firstName: args.firstName, 
            lastName: args.lastName
        }
       return db34.students.create(student23)
    },
    createStudent13:(root,args,context,info) => {
        const id = db34.students.create({
            collegeId: args.collegeId143,
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email
        });
        return db34.students.get(id)
    },
    signUp:(root,args,context,info) => {
        const { email, firstName, password } = args.input;
        if(!email.includes('@gmail.com')) throw new Error("email not in proper format")
        if(firstName.length > 15) throw new Error("only 15 characters allowed")
        if(password.length < 4 ) throw new Error("password should be long")
        return "success";
    }
};

export { Query, Student23, Mutation }