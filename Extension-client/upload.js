const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", async () => {
  const file = fileInput.files[0];
  if (!file) return alert("Select a file");

  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch("http://localhost:3000/ocr/process", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  console.log("OCR + AI mapping result:", data);

  chrome.runtime.sendMessage({
    action: "LLM_AUTOFILL",
    mappedFields: data.mappedFields
  });

  alert("OCR + AI mapping done");
});
