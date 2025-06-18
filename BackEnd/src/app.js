import express from "express"
import {aiRouter} from "./routes/ai.routes.js"


const app = express();

app.use(express.json());

app.use('/ai', aiRouter);


export { app };