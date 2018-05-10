import { Note } from '../../entity/Note';

export const noteResolvers = {
  Query: {
    text(_, { msg }, context, info) {
      return `Hello ${msg}`;
    }
  },
  Mutation: {
    async createNote(_, { input }) {
      let { title, content } = input;
      const note = await Note.create({ title, content });
      await note.save();
      return note;
    }
  }
};
