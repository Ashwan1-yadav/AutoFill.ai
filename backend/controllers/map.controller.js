export const mapForm = async (req, res) => {
  try {
    validatePayload(req.body);
    console.log("Received OCR:", req.body.ocrText.length);
    console.log("Fields:", req.body.fields.length);

    const result = await mapFormUsingGemini(req.body);
    res.json(result);

  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
}
