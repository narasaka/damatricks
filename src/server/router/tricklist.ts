import { createRouter } from './context';
import { prisma } from '@/server/db/client';
import { z } from 'zod';

export const tricklistRouter = createRouter()
  .query('list', {
    async resolve() {
      const tricklists = prisma.tricklist.findMany();
      return tricklists;
    },
  })
  .query('get-one', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;
      const tricklist = await prisma.tricklist.findUnique({ where: { id } });
      return tricklist;
    },
  });
