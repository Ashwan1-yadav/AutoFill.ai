chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.set({ targetTabId: tab.id }, () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("upload.html") });
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "GET_FIELDS") {
    chrome.storage.local.get("targetTabId", ({ targetTabId }) => {

      if (!targetTabId) {
        sendResponse({ fields: [], error: "NO_TARGET_TAB" });
        return;
      }

      chrome.tabs.sendMessage(
        targetTabId,
        { action: "COLLECT_FIELDS" },
        (response) => {
          if (chrome.runtime.lastError || !response) {
            sendResponse({
              fields: [],
              error: chrome.runtime.lastError?.message || "NO_RESPONSE_FROM_CONTENT"
            });
            return;
          }
          sendResponse({ fields: response.fields || [] });
        }
      );

    });
    return true;
  }
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
