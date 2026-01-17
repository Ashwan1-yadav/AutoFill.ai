const FIELD_KEYWORDS = {
  name: ["name", "full name", "applicant", "candidate"],
  email: ["email", "e-mail", "mail"],
  phone: ["phone", "mobile", "contact", "number"],
  dob: ["dob", "date of birth", "birth"]
};

chrome.runtime.onMessage.addListener((req) => {
  if (req.action === "AUTOFILL") {
    const data = req.payload;
    fillSmart("name", data.name);
    fillSmart("email", data.email);
    fillSmart("phone", data.phone);
    fillSmart("dob", data.dob);
  }
});

function fillSmart(type, value) {
  if (!value) return;

  const inputs = Array.from(
    document.querySelectorAll("input, textarea")
  ).filter(i => i.type !== "password");

  let bestField = null;
  let bestScore = 0;

  inputs.forEach(input => {
    const text = getFieldText(input);
    let score = 0;

    FIELD_KEYWORDS[type].forEach(keyword => {
      if (text.includes(keyword)) score++;
    });

    if (score > bestScore) {
      bestScore = score;
      bestField = input;
    }
  });

  if (bestField) {
    bestField.focus();
    bestField.value = value;
    bestField.dispatchEvent(new Event("input", { bubbles: true }));
    bestField.dispatchEvent(new Event("change", { bubbles: true }));
  }
}

function getFieldText(input) {
  let text = "";

  if (input.id) {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (label) text += label.innerText + " ";
  }

  text +=
    (input.placeholder || "") + " " +
    (input.name || "") + " " +
    (input.id || "") + " " +
    (input.getAttribute("aria-label") || "");

  return text.toLowerCase();
}
