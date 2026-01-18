chrome.action.onClicked.addListener(tab => {
  chrome.storage.local.set({ targetTabId: tab.id });
  chrome.tabs.create({
    url: chrome.runtime.getURL("upload.html")
  });
});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "OCR_DONE") {
    chrome.storage.local.get("targetTabId", ({ targetTabId }) => {
      chrome.tabs.sendMessage(targetTabId, {
        action: "LLM_AUTOFILL",
        ocrText: msg.ocrText
      });
    });
  }
});
