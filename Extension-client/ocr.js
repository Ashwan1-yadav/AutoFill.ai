import Tesseract from "./libs/tesseract/tesseract.js";

export async function extractText(file) {
  const result = await Tesseract.recognize(
    file,
    "eng",
    {
      workerPath: chrome.runtime.getURL("libs/tesseract/worker.min.js"),
      corePath: chrome.runtime.getURL("libs/tesseract/tesseract-core.wasm.js"),
      logger: m => console.log(m)
    }
  );

  return result.data.text;
}
