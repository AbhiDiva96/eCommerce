import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/userRouter';

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.json());


app.use('/api/v1/user', userRouter )

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});