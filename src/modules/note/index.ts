import * as path from 'path';
import * as fs from 'fs';
import { noteResolvers } from './note.resolvers';

const typeDefs = fs.readFileSync(path.join(__dirname, 'note.graphql'), 'utf8');
export default {
    typeDefs,
    resolvers: noteResolvers
}