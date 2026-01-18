const fileInput = document.getElementById("fileInput");
const processBtn = document.getElementById("processBtn");

processBtn.addEventListener("click", async () => {
  const file = fileInput.files[0];
  if (!file) return alert("Please select a file.");

  const imgURL = URL.createObjectURL(file);

  const result = await Tesseract.recognize(imgURL, 'eng');

  const text = result.data.text;

  chrome.runtime.sendMessage({
    action: "LLM_AUTOFILL",
    ocrText: text
  });

  alert("Text processed and sent to the page!");
});
