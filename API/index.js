import express from 'express';
import workRoutes from "./routes/work.js";
import cors from 'cors';
const app = express();

app.use(cors());
app.use('/work', workRoutes);

app.listen(4000);