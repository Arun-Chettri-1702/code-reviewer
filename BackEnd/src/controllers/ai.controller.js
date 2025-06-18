import { generateContentRequest } from "../services/ai.service";

const aiController = async (req, res) => {
    const prompt = req.query.prompt;

    if (!prompt) {
        return res.status(200).send("Prompt is required");
    }

    const response = await generateContentRequest(prompt);
    res.send(response);
};

export { aiController };
