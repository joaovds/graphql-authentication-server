import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
type Query {
  hello: String!
}
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World!',
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

// eslint-disable-next-line no-console
server.start(() => console.log('Server is running on http://localhost:4000'));
