const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");

function getFieldsFromExtension() {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ type: "GET_FIELDS" }, (response) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError.message);
      }
      resolve(response?.fields || []);
    });
  });
}

uploadBtn.addEventListener("click", async () => {
  const file = fileInput.files[0];
  if (!file) return alert("Select a file");
  const formData = new FormData();
  formData.append("image", file);
  const fields = await getFieldsFromExtension();
  formData.append("fields", JSON.stringify(fields));

  const res = await fetch("http://localhost:3000/ocr/process", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  chrome.runtime.sendMessage({
    action: "LLM_AUTOFILL",
    mappedFields: data.mappedFields,
  });

  alert("OCR + AI mapping done");
});
