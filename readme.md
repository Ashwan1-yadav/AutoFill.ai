<h1 align="center">AutoFill.ai</h1>

<div align="center">

![AutoFill.ai Banner](./Extension-client/assests/banner.jpeg)

**Intelligent Document OCR and Form Auto-Filling Extension**

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=google-chrome)](https://chrome.google.com/webstore)
[![Version](https://img.shields.io/badge/version-1.0-blue?style=for-the-badge)](./manifest.json)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Architecture](#architecture)
- [Installation](#installation)
- [Setup & Configuration](#setup--configuration)
- [Usage Guide](#usage-guide)
- [Technical Details](#technical-details)
- [File Structure](#file-structure)
- [Permissions](#permissions)
- [Troubleshooting](#troubleshooting)
- [Development](#development)
- [Contributing](#contributing)

---

## 🎯 Overview

**AutoFill.ai** is a powerful browser extension that combines **OCR (Optical Character Recognition)** technology with **AI-powered form mapping** to automatically extract information from documents and fill web forms intelligently. 

Instead of manually typing your information repeatedly across different websites, simply upload a document (ID card, form, invoice, etc.), and let AutoFill.ai extract the relevant data and automatically populate form fields on any webpage.

### Key Capabilities

- 📄 **Document OCR**: Extract text from images using Tesseract.js
- 🤖 **AI-Powered Mapping**: Uses Google Gemini AI to intelligently map extracted text to form fields
- 🔄 **Automatic Form Filling**: Seamlessly fills form fields on any website
- 🌐 **Universal Compatibility**: Works on all websites with standard HTML forms
- ⚡ **Fast & Efficient**: Client-side OCR processing for quick results

---

## ✨ Features

### Core Features

- **📸 Image Upload & OCR Processing**
  - Upload document images (ID cards, forms, invoices, etc.)
  - Extract text using Tesseract.js OCR engine
  - Support for English language recognition

- **🧠 AI-Powered Field Mapping**
  - Intelligent extraction of name, email, phone, and address
  - Context-aware field matching using Google Gemini AI
  - Handles various document formats and layouts

- **🔄 Automatic Form Filling**
  - Detects form fields by name, ID, and label attributes
  - Fills fields automatically without manual intervention
  - Triggers proper input events for form validation

- **🎨 Modern UI**
  - Clean and intuitive user interface
  - Drag-and-drop file upload
  - Real-time processing status

### Supported Form Fields

- **Name** - Full name, applicant name, candidate name
- **Email** - Email addresses
- **Phone** - Mobile numbers, contact numbers
- **Address** - Street address, city, state, zip code

---

## 🔄 How It Works

### Workflow Diagram

```
┌─────────────┐
│   User      │
│  Uploads    │
│  Document   │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│  Extension      │
│  (Tesseract.js) │
│  OCR Processing │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Extracted Text │
│  (OCR Result)   │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Backend API    │
│  (Gemini AI)    │
│  Field Mapping  │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Mapped Data    │
│  {name, email,  │
│   phone, addr}  │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Content Script │
│  Auto-Fill      │
│  Form Fields    │
└─────────────────┘
```

### Step-by-Step Process

1. **User Action**: Click the extension icon and upload a document image
2. **OCR Processing**: Tesseract.js extracts text from the image (client-side)
3. **AI Mapping**: Extracted text is sent to backend API which uses Gemini AI to map fields
4. **Data Extraction**: AI identifies and extracts name, email, phone, and address
5. **Form Filling**: Extension automatically fills matching form fields on the current webpage

---

## 🏗️ Architecture

### Extension Components

#### 1. **Background Service Worker** (`background.js`)
- Handles extension icon clicks
- Manages OCR completion events
- Communicates with backend API
- Coordinates message passing between components

#### 2. **Content Script** (`content.js`)
- Injected into all web pages
- Listens for mapping data from background script
- Automatically fills form fields based on field names/IDs
- Triggers input events for proper form validation

#### 3. **Upload Interface** (`upload.html` + `upload.js`)
- User-facing interface for document upload
- Integrates Tesseract.js for OCR processing
- Handles file selection and processing
- Provides user feedback during OCR

#### 4. **OCR Module** (`ocr.js`)
- Utility module for text extraction
- Configures Tesseract.js worker paths
- Handles language loading and initialization

#### 5. **Popup Interface** (`popup.html` + `popup.js`)
- Alternative interface for quick access
- Simplified document processing flow

### Backend Integration

The extension communicates with a backend API (running on `localhost:3000`) that:
- Receives OCR-extracted text
- Uses Google Gemini AI to intelligently map text to form fields
- Returns structured JSON data with mapped field values

**Backend Endpoint**: `POST http://localhost:3000/map`

**Request Body**:
```json
{
  "ocrText": "Extracted text from document...",
  "fields": ["name", "email", "phone", "address"]
}
```

**Response**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "address": "123 Main St, City, State 12345"
}
```

---

## 📦 Installation

### Prerequisites

- **Chrome/Edge Browser** (Chromium-based)
- **Node.js** (for backend server)
- **Backend Server** running on `localhost:3000`

### Step 1: Clone or Download

```bash
git clone <repository-url>
cd AutoFill.ai/Extension-client
```

### Step 2: Load Extension in Browser

1. Open your browser and navigate to:
   - **Chrome**: `chrome://extensions/`
   - **Edge**: `edge://extensions/`

2. Enable **Developer mode** (toggle in top-right corner)

3. Click **"Load unpacked"** button

4. Select the `Extension-client` directory

5. The extension should now appear in your extensions list

### Step 3: Pin Extension (Optional)

- Click the extensions icon (puzzle piece) in toolbar
- Find "AutoFill.ai" and click the pin icon to keep it visible

### Step 4: Setup Backend Server

Ensure the backend server is running:

```bash
cd ../backend
npm install
npm start
```

The server should be running on `http://localhost:3000`

---

## ⚙️ Setup & Configuration

### Backend Configuration

1. Navigate to `backend/config/` directory
2. Create or update `llm.env.js` with your Gemini API key:

```javascript
export const ENV = {
  GEMINI_API_KEY: "your-gemini-api-key-here"
};
```

3. Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

### Extension Configuration

The extension is pre-configured with:
- **Tesseract.js** library paths
- **English language** support
- **Backend API endpoint**: `http://localhost:3000/map`

To change the backend URL, modify `background.js`:

```javascript
const res = await fetch("http://localhost:3000/map", {
  // ... your custom endpoint
});
```

---

## 📖 Usage Guide

### Basic Usage

1. **Open Extension**
   - Click the AutoFill.ai icon in your browser toolbar
   - The upload interface will open in a new tab

2. **Upload Document**
   - Click the upload area or drag-and-drop an image file
   - Supported formats: JPG, PNG, GIF, WebP
   - Wait for OCR processing to complete

3. **Navigate to Form**
   - Go to any webpage with a form you want to fill
   - Ensure the form is visible and loaded

4. **Auto-Fill**
   - The extension automatically processes the document
   - Form fields will be filled automatically
   - Review and submit the form

### Advanced Usage

#### Processing Multiple Documents
- Upload different documents for different forms
- The extension processes each document independently

#### Field Matching
The extension matches fields using:
- Input `name` attributes
- Input `id` attributes
- Field labels (via `for` attribute)
- Placeholder text

#### Supported Field Types
- Text inputs
- Email inputs
- Tel inputs
- Textarea elements

---

## 🔧 Technical Details

### Technologies Used

- **Tesseract.js** - Client-side OCR engine
- **Google Gemini AI** - AI-powered field mapping
- **Chrome Extension API** - Browser extension functionality
- **Manifest V3** - Latest extension manifest format

### Browser Compatibility

- ✅ Google Chrome (latest)
- ✅ Microsoft Edge (latest)
- ✅ Other Chromium-based browsers

### Performance

- **OCR Processing**: Client-side, typically 2-5 seconds per image
- **API Response**: Depends on backend server and network
- **Form Filling**: Instant after data mapping

### Security

- **Permissions**: Only requests necessary permissions
- **Data Handling**: OCR processing happens client-side
- **API Communication**: Secure HTTP requests to backend
- **No Data Storage**: Extension doesn't store personal data

---

## 📁 File Structure

```
Extension-client/
├── manifest.json          # Extension manifest (Manifest V3)
├── background.js          # Service worker for background tasks
├── content.js            # Content script for form filling
├── upload.html           # Upload interface HTML
├── upload.js             # Upload interface logic
├── upload.css            # Upload interface styles
├── popup.html            # Extension popup HTML
├── popup.js              # Extension popup logic
├── popup.css             # Extension popup styles
├── ocr.js                # OCR utility module
├── icon.png              # Extension icon
├── logo.png              # Extension logo
├── assests/
│   └── banner.jpeg       # Banner image
└── libs/
    └── tesseract/        # Tesseract.js OCR library
        ├── tesseract.min.js
        ├── tesseract-core.wasm.js
        ├── worker.min.js
        └── lang/
            └── eng.traineddata.gz
```

### Key Files Explained

| File | Purpose |
|------|---------|
| `manifest.json` | Extension configuration, permissions, and metadata |
| `background.js` | Handles extension events, API communication |
| `content.js` | Injected into web pages, fills form fields |
| `upload.html/js` | Main user interface for document upload |
| `ocr.js` | OCR text extraction utilities |
| `libs/tesseract/` | Tesseract.js OCR library files |

---

## 🔐 Permissions

The extension requires the following permissions:

| Permission | Purpose |
|------------|---------|
| `activeTab` | Access current tab to fill form fields |
| `tabs` | Create new tabs for upload interface |
| `storage` | Store target tab ID temporarily |
| `<all_urls>` | Work on any website with forms |

### Why These Permissions?

- **activeTab**: Needed to inject content script and fill forms
- **tabs**: Required to open upload interface in new tab
- **storage**: Temporary storage for tab coordination
- **host_permissions**: Universal form filling capability

---

## 🐛 Troubleshooting

### Common Issues

#### Extension Not Loading
- ✅ Ensure Developer mode is enabled
- ✅ Check that all files are in the correct directory
- ✅ Verify `manifest.json` is valid JSON
- ✅ Check browser console for errors

#### OCR Not Working
- ✅ Ensure image file is valid (JPG, PNG, etc.)
- ✅ Check browser console for Tesseract errors
- ✅ Verify Tesseract library files are present
- ✅ Try with a clearer, higher-resolution image

#### Form Fields Not Filling
- ✅ Ensure backend server is running on `localhost:3000`
- ✅ Check network tab for API request/response
- ✅ Verify form fields have `name` or `id` attributes
- ✅ Try refreshing the page after extension loads

#### API Connection Errors
- ✅ Verify backend server is running
- ✅ Check CORS settings on backend
- ✅ Ensure API endpoint is correct in `background.js`
- ✅ Check backend logs for errors

#### Wrong Fields Being Filled
- ✅ Review extracted OCR text for accuracy
- ✅ Check AI mapping response in network tab
- ✅ Verify form field names match expected format
- ✅ Manually adjust filled values if needed

### Debug Mode

Enable detailed logging:
- Open browser DevTools (F12)
- Check Console tab for extension messages
- Check Network tab for API requests
- Use Extension DevTools for background script debugging

---

## 💻 Development

### Development Setup

1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd AutoFill.ai
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   npm run dev  # For development with nodemon
   ```

3. **Load Extension**
   - Follow installation steps above
   - Use "Load unpacked" with Extension-client directory

4. **Make Changes**
   - Edit extension files
   - Reload extension in `chrome://extensions/`
   - Refresh target web pages

### Building for Production

1. **Test Thoroughly**
   - Test on multiple websites
   - Verify OCR accuracy
   - Check form filling behavior

2. **Package Extension**
   - Zip the Extension-client directory
   - Ensure all files are included
   - Test packaged extension

3. **Publish** (Optional)
   - Chrome Web Store Developer Dashboard
   - Firefox Add-ons Developer Hub

### Code Structure

- **Modular Design**: Separate files for different functionalities
- **Event-Driven**: Uses Chrome extension message passing
- **Async/Await**: Modern JavaScript for async operations
- **Error Handling**: Try-catch blocks for robust error handling

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow existing code style
- Add comments for complex logic
- Test thoroughly before submitting
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- **Tesseract.js** - OCR library
- **Google Gemini AI** - AI-powered field mapping
- **Chrome Extension API** - Browser extension platform

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review troubleshooting section above

---

<div align="center">

**Made with ❤️ for simplifying form filling**

![Extension Icon](./icon.png)

**Version 1.0** | **AutoFill.ai**

</div>
