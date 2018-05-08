import "reflect-metadata";
import { createConnection } from "typeorm";
import { GraphQLServer } from 'graphql-yoga'
import { User } from "./entity/User";

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`
const resolvers = {
    Query: {
        hello: (_: any, { name }: any) => `Hello ${name || 'World'}`,
    },
}

const server = new GraphQLServer({ typeDefs, resolvers })
createConnection().then(async connection => {
    console.log("Connected to Mysql");
    server.start(() => console.log('Server is running on localhost:4000'))
}).catch(error => console.log(error));

