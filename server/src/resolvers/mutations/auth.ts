import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ResolverMap } from '../../types/graphql-utils';
import { APP_SECRET } from '../../utils';

const signup: ResolverMap = async (
  _,
  args: GQL.ISignupOnMutationArguments,
  ctx,
) => {
  const password = await bcrypt.hash(args.password, 10);

  const user = await ctx.prisma.user.create({
    data: {
      ...args,
      password,
    },
  });

  const token = jwt.sign(
    {
      userId: user.id,
    },
    APP_SECRET,
  );

  return {
    token,
    user,
  };
};

const auth = {
  signup,
};

export default auth;
