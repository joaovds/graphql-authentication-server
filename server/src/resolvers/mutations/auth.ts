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

const login: ResolverMap = async (
  _,
  { email, password }: GQL.ILoginOnMutationArguments,
  ctx,
) => {
  const user = await ctx.prisma.user.findOne({
    where: { email },
  });

  if (!user) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
};

const auth = {
  signup,
  login,
};

export default auth;
