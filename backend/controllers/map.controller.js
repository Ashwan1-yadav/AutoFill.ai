export const mapForm = async (req, res) => {
    try {
      validatePayload(req.body);
  
      const result = await mapFormUsingGemini(req.body);
      res.json(result);
  
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: err.message });
    }
}
