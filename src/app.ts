import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import { StudentRoutes } from './app/modules/student/student.Route';
import { UserserRoutes } from './app/modules/user/user.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
//api/v1/students/create-student
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserserRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};
app.get('/', getAController);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
