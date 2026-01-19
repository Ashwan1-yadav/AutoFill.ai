chrome.runtime.sendMessage({ action: "READY_FOR_AUTOFILL" });

chrome.runtime.onMessage.addListener(msg => {
  if (msg.action === "LLM_AUTOFILL") {
    const fields = msg.mappedFields;
    Object.entries(fields).forEach(([key, value]) => {
      const input = document.querySelector(
        `input[name*="${key}" i], input[id*="${key}" i], textarea[name*="${key}" i]`
      );
      if (input && !input.value) input.value = value;
    });
  }
});
