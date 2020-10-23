import { ResolverMap } from '../types/graphql-utils';

const users: ResolverMap = (_, args, ctx) => {
  return [
    {
      id: 1,
      name: 'nome de teste',
      email: 'email@teste.com',
    },
  ];
};

const Query = {
  users,
};

export default Query;
