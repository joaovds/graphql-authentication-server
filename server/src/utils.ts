import jwt from 'jsonwebtoken';
import { Context } from './types/graphql-utils';

export const APP_SECRET = 'aquiUmAPP_SECRETparaACriacaoDoToken';

export function getUserId(ctx: Context) {
  const Authorization: string = ctx.request.get('Authorization');

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');

    const { userId } = jwt.verify(token, APP_SECRET) as {
      userId: string;
    };

    return userId;
  }

  throw new Error('Not authenticated');
}
