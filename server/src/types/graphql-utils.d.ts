/* eslint-disable no-unused-vars */
import { PrismaClient } from '@prisma/client';

export interface Context {
  prisma: PrismaClient;
  request: any;
}

export interface ResolverMap {
  (parent: any, args: any, context: Context, info: any): any;
}
