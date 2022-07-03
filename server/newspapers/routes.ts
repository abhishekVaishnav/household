import { Express } from 'express';
import * as NewsCtrl from './controllers/news.ctrl';

export const newsRoutes = (router: Express) => {
  router.get('/newspapers',
    NewsCtrl.index,
  );
}
