import { Router, Express } from 'express';
import { newsRoutes } from './newspapers/routes';

const router = Router({
  mergeParams: true,
});

export function attachGlobalRoutes(app: Express) {
  newsRoutes(app);
  app.use('/', router);
};
