chrome.runtime.sendMessage({ action: "READY_FOR_AUTOFILL" });

function getAllFormFieldNames() {
  const names = [];

  document.querySelectorAll("input, textarea, select").forEach(el => {
    if (el.type === "hidden" || el.disabled) return;
    if (!el.name) return;

    names.push(el.name);
  });

  return names;
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "COLLECT_FIELDS") {
    try {
      const fields = [];
      document.querySelectorAll("input, textarea, select").forEach(el => {
        if (el.disabled || el.type === "hidden") return;
        fields.push(el.name || el.id || el.placeholder || "");
      });

      sendResponse({ fields });
    } catch (e) {
      sendResponse({ fields: [] });
    }
  }
});


  console.log("Form fields detected:", getAllFormFieldNames());

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "LLM_AUTOFILL") {
    const fields = msg.mappedFields;
    Object.entries(fields).forEach(([key, value]) => {
      const input = document.querySelector(
        `input[name*="${key}" i], input[id*="${key}" i], textarea[name*="${key}" i]`,
      );
      if (input && !input.value) input.value = value;
    });
  }
});
