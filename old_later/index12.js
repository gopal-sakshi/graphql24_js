// const Express = require("express");
// const ExpressGraphQL = require("express-graphql");
// const mongoose = require("mongoose");
// const {
// 	GraphQLID,
// 	GraphQLString,
// 	GraphQLList,
// 	GraphQLType,
// 	GraphQLSchema,
// 	GraphQLNonNull,
// 	GraphQLObjectType
// } = require("graphql");
// var cors = require("cors");

// 	************ FOR some reason, graphql-http npmjs isnt working
// 	************ needs to check

import express from "express";
import { createHandler } from "graphql-http/lib/use/express";       // for express
// import { createHandler } from 'graphql-http/lib/use/http';          // for http
// import { createHandler } from 'graphql-http/lib/use/http2';         // for http2 (signed certificate)
// import { createHandler } from 'graphql-http/lib/use/fastify';       // for fastify
// import { createHandler } from 'graphql-http/lib/use/koa';           // for koa

import mongoose from "mongoose";
import { GraphQLID,
	GraphQLString,
	GraphQLList,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLObjectType } from "graphql";
import cors from "cors";
var app = express();
app.use(cors());

mongoose
	.connect("mongodb://127.0.0.1:27017/graphDb23", {})
	.then(() => console.log("Connected to database..."))
	.catch(err => console.error(err));

const PersonModel = mongoose.model("person", {
	firstName: String,
	lastName: String
});

const PersonType = new GraphQLObjectType({
	name: "Person",
	fields: {
		id: { type: GraphQLID },
		firstName: { type: GraphQLString },
		lastName: { type: GraphQLString }
	}
});

const schema1 = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "Query",
		fields: {
			people: {
				type: new GraphQLList(PersonType),
				resolve: (root, args, context, info) => {
					return PersonModel.find().exec();
				}
			},
			peopleByID: {
				type: PersonType,
				args: {
					id: { type: new GraphQLNonNull(GraphQLID) }
				},
				resolve: (root, args, context, info) => {
					return PersonModel.findById(args.id).exec();
				}
			},
			peopleByName: {
				type: new GraphQLList(PersonType),
				args: { 
					firstName: { type: GraphQLString } 
				},
				resolve: (root, args, context, info) => {
					return PersonModel.find({'firstName':args.firstName}).exec();
				}
			}
		}
	}),
	mutation: new GraphQLObjectType({
		name: "Create",
		fields: {
			people: {
				type: PersonType,
				args: {
					firstName: { type: GraphQLString },
					lastName: { type: GraphQLString }
				},
				resolve: (root, args, context, info) => {
					var people = new PersonModel(args);
					return people.save();
				}
			}
		}
	})
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            hello: { type: GraphQLString, resolve: () => 'world' },
        },
    }),
});
// app.use("/person1",	createHandler({schema1}));
app.all("/graphql",	createHandler({schema}));
app.listen(3002, () => { console.log("server running at 3002"); });
