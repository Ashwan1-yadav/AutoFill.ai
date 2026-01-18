import { GoogleGenerativeAI } from "@google/generative-ai";
import { ENV } from "../config/llm.env.js";
import { buildPrompt } from "./prompt.service.js";

const genAI = new GoogleGenerativeAI(ENV.GEMINI_API_KEY);


export async function mapFormUsingGemini({ ocrText, fields }) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
  });

  const prompt = buildPrompt({ ocrText, fields });

  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0,
      maxOutputTokens: 800
    }
  });

  const text = result.response.text();

  return JSON.parse(text);
}
