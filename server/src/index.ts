import { PrismaClient } from '@prisma/client';
import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
    };
  },
});

// eslint-disable-next-line no-console
server.start(
  {
    cors: {
      credentials: true,
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
  },
  () => console.log('Server is running on http://localhost:4000'),
);
