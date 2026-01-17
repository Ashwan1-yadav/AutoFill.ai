export function validatePayload(body) {
    if (!body.ocrText || !body.fields) {
      throw new Error("Invalid payload");
    }
  
    if (!Array.isArray(body.fields)) {
      throw new Error("Fields must be an array");
    }
  
    if (body.fields.length > 120) {
      throw new Error("Too many fields");
    }
}
  