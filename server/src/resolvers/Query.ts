import { ResolverMap } from '../types/graphql-utils';

const users: ResolverMap = (_, args, ctx) => {
  return ctx.prisma.user.findMany();
};

const Query = {
  users,
};

export default Query;
