// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { tricklistRouter } from './tricklist';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('tricklist.', tricklistRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
