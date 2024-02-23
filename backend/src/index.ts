import express from 'express';
import 'express-async-errors'

const port = process.env.PORT || 3001

const app = express();

app.use(express.json());


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
