import express from 'express';
import 'express-async-errors'
import { errorMiddleware } from './middleware/errorMiddleware';
import userRoutes from './routes/userRoutes';

const port = process.env.PORT || 3001

const app = express();

app.use(express.json());

app.use(userRoutes)

app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
