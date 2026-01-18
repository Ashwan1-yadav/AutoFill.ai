chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "APPLY_MAPPING") {
    const data = msg.data;

    for (const [key, value] of Object.entries(data)) {
      const input =
        document.querySelector(`input[name="${key}"]`) ||
        document.querySelector(`input[id="${key}"]`);

      if (input) {
        input.value = value;
      }
    }
  }
});
