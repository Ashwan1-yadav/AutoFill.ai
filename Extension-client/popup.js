import { extractText } from "./ocr.js";

const status = document.getElementById("status");

document.getElementById("scan").onclick = async () => {
  const file = document.getElementById("file").files[0];
  if (!file) return;

  status.innerText = "Scanning document...";

  const text = await extractText(file);

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "LLM_AUTOFILL",
      ocrText: text
    });
  });
};
