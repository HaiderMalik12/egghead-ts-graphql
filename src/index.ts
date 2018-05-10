import "reflect-metadata";
import { createConnection } from "typeorm";
import { GraphQLServer } from 'graphql-yoga'
import { User } from "./entity/User";
import { merge } from 'lodash';
import note from './modules/note';

const typeDefs = merge([note.typeDefs]);
const resolvers = merge({}, note.resolvers)
const server = new GraphQLServer({ typeDefs, resolvers })
createConnection().then(async connection => {
    server.start(() => console.log('Server is running on localhost:4000'))
}).catch(error => console.log(error));

