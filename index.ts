import express from 'express';
const app = express();
import { attachGlobalRoutes } from './server/routes';

app.listen(3000, () => {
  console.log('server is running');
});

attachGlobalRoutes(app);
