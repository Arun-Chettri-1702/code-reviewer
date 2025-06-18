import { generateContentRequest } from "../services/ai.service.js";

const aiReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(200).send("Prompt is required");
    }

    const response = await generateContentRequest(code);
    res.status(200).send(response);
};

export { aiReview };
