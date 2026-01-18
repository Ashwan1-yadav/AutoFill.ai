chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.set({ targetTabId: tab.id }, () => {
    chrome.tabs.create({
      url: chrome.runtime.getURL("upload.html")
    });
  });
});

chrome.runtime.onMessage.addListener(async (req) => {
  if (req.action === "OCR_DONE") {
    const { ocrText } = req;

    const fields = [
      "name",
      "email",
      "phone",
      "address"
    ];

    const res = await fetch("http://localhost:3000/map", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ocrText, fields })
    });

    const mappedData = await res.json();

    chrome.storage.local.get("targetTabId", ({ targetTabId }) => {
      chrome.tabs.sendMessage(targetTabId, {
        action: "APPLY_MAPPING",
        data: mappedData
      });
    });
  }
});
