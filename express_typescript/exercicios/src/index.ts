import express from 'express';
import UserRouter from './route/user.routes';

const app = express();

app.use(express.json());

app.use('/users', UserRouter);

// TESTE DE FUNCIONAMENTO BASICO
app.get('/', (_req, res) => {
  res.status(200).send('Express + TypeScript');
});

export default app;
