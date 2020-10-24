import { PrismaClient } from '@prisma/client';
import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});

// eslint-disable-next-line no-console
server.start(() => console.log('Server is running on http://localhost:4000'));
