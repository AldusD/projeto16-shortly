import express, { json } from "express";
import cors from "cors";
import dotenv from 'dotenv';

import connection from './database/db.js';
import authRouter from './routes/auth.router.js';
import urlsRouter from './routes/urls.router.js';

dotenv.config();
const app = express();

app.use(json(), cors());
app.use(authRouter);
app.use(urlsRouter);

app.listen(process.env.PORT, () => {
    console.log("Chess happens on", process.env.PORT);
})