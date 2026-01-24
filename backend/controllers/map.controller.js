import Tesseract from "tesseract.js";
import fs from "fs";
import fetch from "node-fetch";
import "dotenv/config";
import { ENV } from "../config/llm.env.js";

export const mapForm = async (req, res) => {
  try {
    const { data } = await Tesseract.recognize(req.file.path, "eng");
    fs.unlinkSync(req.file.path);
    const ocrText = data.text;
    const fields = req.body.fields;

    const prompt = `
          You are an AI that extracts structured form data.
          OCR TEXT: ${ocrText}
          Return ONLY valid JSON mapping field names to values.
          If a field is not found, omit it from the JSON.
          The field names to map are: ${fields}.
          `;

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${ENV.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      },
    );

    const geminiData = await geminiRes.json();
    const rawText =
      geminiData.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    const mappedFields = jsonMatch ? JSON.parse(jsonMatch[0]) : {};

    res.json({
      success: true,
      mappedFields,
      rawOcr: ocrText,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
