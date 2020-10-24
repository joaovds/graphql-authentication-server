/* eslint-disable no-unused-vars */
import { PrismaClient } from '@prisma/client';

export interface ResolverMap {
  (parent: any, args: any, context: { prisma: PrismaClient }, info: any): any;
}
