import express, { Request, Response } from 'express';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';
import { router as controllerRouter } from './controllers/decorators/controller';

import './controllers/LoginController';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieSession({ keys: ['sadffsad'] }));
app.use(router);
app.use(controllerRouter);

app.listen(5000, () => {
  console.log(`server is running`);
})
