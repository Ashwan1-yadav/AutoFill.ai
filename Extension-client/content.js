function scanForm() {
  return [...document.querySelectorAll("input, select, textarea")]
    .filter(el => el.type !== "password" && el.offsetParent !== null)
    .map((el, i) => ({
      index: i,
      tag: el.tagName,
      type: el.type,
      label: getLabel(el),
      placeholder: el.placeholder,
      name: el.name,
      id: el.id
    }));
}

function getLabel(el) {
  if (!el.id) return "";
  const label = document.querySelector(`label[for="${el.id}"]`);
  return label ? label.innerText : "";
}

function applyMapping(mapping) {
  const fields = document.querySelectorAll("input, textarea, select");

  Object.entries(mapping).forEach(([key, index]) => {
    if (index === null) return;

    const el = fields[index];
    el.focus();
    el.value = mapping[key].value;
    el.dispatchEvent(new Event("input", { bubbles: true }));
  });
}

chrome.runtime.onMessage.addListener(async (req) => {
  if (req.action !== "LLM_AUTOFILL") return;

  const formSchema = scanForm();

  const response = await fetch("https://YOUR_BACKEND_URL/map", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ocrText: req.ocrText,
      fields: formSchema
    })
  });

  const mapping = await response.json();
  applyMapping(mapping);
});
