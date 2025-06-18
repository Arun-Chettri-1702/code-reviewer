import { Router } from "express";
import { aiReview } from "../controllers/ai.controller.js";

const aiRouter = Router();

aiRouter.route('/get-review').post(aiReview);


export {aiRouter}