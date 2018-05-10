export const noteResolvers = {
    Query: {
        text(_, { msg }, context, info) {
            return `Hello ${msg}`;
        }
    }
}