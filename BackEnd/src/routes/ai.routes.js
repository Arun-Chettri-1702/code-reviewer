import { Router } from "express";
import {aiController} from "../controllers/ai.controller.js"

const aiRouter = Router();

aiRouter.route('/get-response').get(aiController);


export {aiRouter}