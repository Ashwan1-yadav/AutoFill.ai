import Tesseract from "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";

export async function extractText(file) {
  const result = await Tesseract.recognize(
    file,
    "eng",
    { logger: m => console.log(m) }
  );

  return result.data.text;
}
