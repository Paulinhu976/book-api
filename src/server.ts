import express, { Request, Response } from 'express';
const app = express();

app.use(express.json());
const port = 3000;

app.get('/', (req: Request, res: Response): Response => {
  return res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
