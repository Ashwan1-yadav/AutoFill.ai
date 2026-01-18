chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.set({ targetTabId: tab.id }, () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("upload.html") });
  });
});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "LLM_AUTOFILL") {
    chrome.storage.local.get("targetTabId", ({ targetTabId }) => {
      if (!targetTabId) return console.error("targetTabId not set");

      chrome.scripting.executeScript({
        target: { tabId: targetTabId },
        files: ['content.js']
      }).then(() => {
        chrome.tabs.sendMessage(targetTabId, {
          action: "LLM_AUTOFILL",
          mappedFields: msg.mappedFields
        });
      }).catch(err => console.error("Failed to inject content script:", err));
    });
  }
});
