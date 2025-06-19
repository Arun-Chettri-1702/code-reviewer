import { generateContentRequest } from "../services/ai.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const aiReview = asyncHandler(async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(200).send("Prompt is required");
    }

    const response = await generateContentRequest(code);
    res.status(200).json(new ApiResponse(200, response, "Success"));
});

export { aiReview };
