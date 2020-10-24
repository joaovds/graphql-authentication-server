import Query from './Query';
import auth from './mutations/auth';

export default {
  Query,
  Mutation: {
    ...auth,
  },
};
