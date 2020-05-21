import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(router)

app.listen(5000, () => {
  console.log(`server is running`);
})
