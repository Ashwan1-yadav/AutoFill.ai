export function buildPrompt({ ocrText, fields }) {
    return `
  You are a FORM MAPPING ENGINE.
  
  INPUT OCR TEXT:
  ${ocrText}
  
  FORM FIELDS (array with index):
  ${JSON.stringify(fields, null, 2)}
  
  TASK:
  1. Extract structured user data from OCR text.
  2. Map extracted data to form fields using field index.
  3. Only map when confidence is HIGH.
  4. If unsure, return null.
  
  RULES:
  - DO NOT guess
  - DO NOT invent data
  - DO NOT map passwords, OTPs, CAPTCHA
  - DO NOT submit forms
  - Return JSON ONLY
  - No explanations
  
  OUTPUT FORMAT (STRICT):
  {
    "full_name": { "index": number | null, "value": string | null },
    "dob": { "index": number | null, "value": string | null },
    "gender": { "index": number | null, "value": string | null },
    "phone": { "index": number | null, "value": string | null },
    "email": { "index": number | null, "value": string | null },
    "address": { "index": number | null, "value": string | null }
  }
  `;
}
  