import { GoogleGenAI } from "@google/genai";
import dotenv from dotenv

dotenv.config({
    path:"./.env"
})
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

async function generateContentRequest(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `${prompt}`,
    });
    return response.text();
}

export { generateContentRequest }