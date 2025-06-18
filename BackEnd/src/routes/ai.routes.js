import { Router } from "express";

const router = Router();

router.get("/get-response", (req, res) => {
    const prompt = req.query.prompt;
    if (!prompt) {
        return res.status(400).send("Prompt is required")
    }
})


export {router}