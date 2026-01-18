const fileInput = document.getElementById("fileInput");

Tesseract.setLogging(true);
Tesseract.workerPath = chrome.runtime.getURL("libs/tesseract/worker.min.js");
Tesseract.corePath   = chrome.runtime.getURL("libs/tesseract/tesseract-core.wasm.js");
Tesseract.langPath   = chrome.runtime.getURL("libs/tesseract/lang");

async function extractText(file) {
  const worker = await Tesseract.createWorker({
    workerBlobURL: false,   
    logger: m => console.log(m)
  });

  await worker.loadLanguage("eng");
  await worker.initialize("eng");

  const imgURL = URL.createObjectURL(file);
  const { data } = await worker.recognize(imgURL);

  await worker.terminate();
  return data.text;
}

fileInput.addEventListener("change", async () => {
  const file = fileInput.files[0];
  if (!file) return;

  try {
    const text = await extractText(file);

    chrome.runtime.sendMessage({
      action: "OCR_DONE",
      ocrText: text
    });

    alert("OCR completed successfully");

  } catch (e) {
    console.error("OCR failed:", e);
  }
});
