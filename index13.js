import express from "express";
import { createHandler } from "graphql-http/lib/use/express";       // for express

import mongoose from "mongoose";
import { GraphQLID,
    GraphQLInt,
	GraphQLString,
	GraphQLList,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLObjectType } from "graphql";
import cors from "cors";
var app = express();
app.use(cors());

mongoose
.connect("mongodb://127.0.0.1:27017/graphDb22", {})
.then(() => console.log("Connected to database..."))
.catch(err => console.error(err));

const CinemaModel = mongoose.model("cinemalu", {
	peru: String,
    darsakudu: String,
	hero23: String,
    heroine23: String,
    year23: Number
}, 'cinemalu23');           // db lo collection peru ===> "cinemalu23"

const CinemaType = new GraphQLObjectType({
	name: "cinemaaaaItem",
	fields: {        
        id: { type: GraphQLID },
        peru: { type: GraphQLString },
        darsakudu: { type: GraphQLString },
        hero23: { type: GraphQLString },
        heroine23: { type: GraphQLString },
        year23: { type: GraphQLInt }
	}
});

const schema1 = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "Query",
		fields: {
			chitralu11: {
				type: new GraphQLList(CinemaType),
				resolve: (root, args, context, info) => {
					return CinemaModel.find().exec();
				}
			},
			chitramByID: {
				type: CinemaType,
				args: {
					id: { type: new GraphQLNonNull(GraphQLID) }
				},
				resolve: (root, args, context, info) => {
					return CinemaModel.findById(args.id).exec();
				}
			},
			cinemaByHero: {
				type: new GraphQLList(CinemaType),
				args: { 
					hero11: { type: GraphQLString } 
				},
				resolve: (root, args, context, info) => {
					return CinemaModel.find({'hero23':args.hero11}).exec();
				}
			}
		}
	}),
	mutation: new GraphQLObjectType({
		name: "Create23",
		fields: {
			add_cinema: {
				type: CinemaType,
				args: {                    
					peru: { type: GraphQLString },
					darsakudu: { type: GraphQLString },
                    hero23: { type: GraphQLString },
					heroine23: { type: GraphQLString },
                    year23: { type: GraphQLInt }					
				},
				resolve: (root, args, context, info) => {
                    console.log("args ====> ", args);
					var kotha_cinema = new CinemaModel({...args});
					return kotha_cinema.save();
				}
			}
		}
	})
});

app.all("/graphql",	createHandler({ schema: schema1 }));
app.listen(3013, () => { console.log("server running at 3013"); });
