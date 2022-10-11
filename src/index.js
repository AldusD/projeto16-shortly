import express, { json } from "express";
import cors from "cors";
import dotenv from 'dotenv';

import connection from './database/db.js';

dotenv.config();
const app = express();

app.use(json(), cors());

app.get("/test", (req, res) => {
    console.log("working...");
    res.send("working!").status(200);
})

app.listen(process.env.PORT, () => {
    console.log("Chess happens on", process.env.PORT);
})