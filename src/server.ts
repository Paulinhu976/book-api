import express from 'express';
import bookRouter from '../src/router/bookRouter';
const app = express();

app.use(express.json());
const port = 3000;

app.use('/book', bookRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
